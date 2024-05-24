<template>
  <div>
    <select class="form-select" v-model="selectedValue" @change="handleChange">
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Title",
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: { String, Number }
    }
  },
  data() {
    return {
      selectedValue: this.value
    };
  },
  watch: {
    value(newValue) {
      this.selectedValue = newValue
    }
  },
  methods: {
    handleChange() {
      this.$emit("input", this.selectedValue)
    }
  }
};
</script>

<style scoped>
div {
  width: 100%;
}
</style>
