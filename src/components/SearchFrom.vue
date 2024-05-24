<template>
  <form>
    <div class="input-group">
      <input
        type="text"
        @input="onSearch"
        class="form-control"
        placeholder="Search"
      />
    </div>
  </form>
</template>

<script setup>
const emit = defineEmits(["search"]);

const onSearch = (e) => {
  emit("search", e.target.value);
};
</script>
