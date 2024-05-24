<template>
  <button :class="btnClasses" :style="{ border: border }">
    <span v-if="icon" class="mr-2">
      <i :class="icon"></i>
    </span>
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "button",
    },
    color: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "btn-sm",
    },
    border: {
      type: String,
      default: "",
    },
  },
  computed: {
    btnClasses() {
      return ["btn", "btn-" + this.color, this.size];
    },
  },
};
</script>