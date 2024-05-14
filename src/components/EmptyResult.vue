<script>
export default {
  name: 'EmptyResult',
  props: {
    // Text
    text: {
      type: String,
      default: 'This',
    },
    // Status
    status: {
      type: Boolean,
      default: null,
    },
  },
  computed: {
    loadState() {
      return this.status
    },
  },
};
</script>

<template>
  <template v-if="!loadState">
    <div class="empty-result mx-auto py-8 px-0">
      <div class="d-flex justify-content-center">
        <div v-if="loadState === null" class="spinner-border" role="status">
          <!-- <i class="fas fa-spinner fa-spin-pulse fa-2x"> -->
            <span class="sr-only">Loading...</span>
          <!-- </i> -->
        </div>
          <h3 class="text-danger text-center"><strong>{{text}} Data</strong> is Empty!</h3>
      </div>
    </div>
  </template>
  <template v-else>
    <slot />
  </template>
</template>

<style lang="scss" scoped>
:root {
  --color: #1a1a1a;
  --background: white;
}
.dark {
  --color: white;
  --background: #1a1a1a;
}
.empty-result {
  background-color: var(--background);
  color: var(--color);
  .text-danger {
    color: #f5365c !important;
  }
}
</style>