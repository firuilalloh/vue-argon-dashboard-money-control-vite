<template>
  <ul class="pagination mb-0" :class="[size && `pagination-${size}`, `justify-content-${align}`, paginationClass]">
    <li class="page-item prev-page" :class="{ disabled: modelValue === 1 }">
      <a class="page-link" aria-label="Previous" @click="prevPage">
        <i class="fa fa-angle-left"></i>
      </a>
    </li>
    <li v-for="item in range(minPage, maxPage)" :key="item" class="page-item" :class="{ active: modelValue === item }">
      <a class="page-link" @click="changePage(item)">{{ item }}</a>
    </li>
    <li class="page-item page-pre next-page" :class="{ disabled: modelValue === totalPages }">
      <a class="page-link" aria-label="Next" @click="nextPage">
        <i class="fa fa-angle-right"></i>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'NPagination',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['default', 'primary', 'danger', 'success', 'warning', 'info'].includes(value),
    },
    pageCount: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
    modelValue: {
      type: Number,
      default: 1,
    },
    size: {
      type: String,
      default: '',
      description: 'Pagination size',
    },
    align: {
      type: String,
      default: 'end',
      description: 'Pagination alignment (e.g center|start|end)',
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      defaultPagesToDisplay: 5,
    };
  },
  computed: {
    paginationClass() {
      return `pagination-${this.type}`;
    },
    totalPages() {
      if (this.pageCount > 0) return this.pageCount;
      if (this.total > 0) {
        return Math.ceil(this.total / this.perPage);
      }
      return 1;
    },
    pagesToDisplay() {
      if (this.totalPages > 0 && this.totalPages < this.defaultPagesToDisplay) {
        return this.totalPages;
      }
      return this.defaultPagesToDisplay;
    },
    minPage() {
      if (this.modelValue >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        const newMaxPage = pagesToAdd + this.modelValue;
        if (newMaxPage > this.totalPages) {
          return this.totalPages - this.pagesToDisplay + 1;
        }
        return this.modelValue - pagesToAdd;
      }
      return 1;
    },
    maxPage() {
      if (this.modelValue >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        const newMaxPage = pagesToAdd + this.modelValue;
        if (newMaxPage < this.totalPages) {
          return newMaxPage;
        }
        return this.totalPages;
      }
      return this.pagesToDisplay;
    },
  },
  watch: {
    perPage() {
      this.$emit('update:modelValue', 1);
    },
    total() {
      this.$emit('update:modelValue', 1);
    },
  },
  methods: {
    range(min, max) {
      const arr = [];
      for (let i = min; i <= max; i += 1) {
        arr.push(i);
      }
      return arr;
    },
    changePage(item) {
      this.$emit('update:modelValue', item);
    },
    nextPage() {
      if (this.modelValue < this.totalPages) {
        this.$emit('update:modelValue', this.modelValue + 1);
      }
    },
    prevPage() {
      if (this.modelValue > 1) {
        this.$emit('update:modelValue', this.modelValue - 1);
      }
    },
  },
};
</script>
