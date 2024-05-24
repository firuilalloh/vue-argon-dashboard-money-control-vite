<script setup>
import { computed, ref } from "vue";
import SearchFrom from "./SearchFrom.vue";

let searchFilter = ref("");

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const filteredItems = computed(() => {
  if (searchFilter.value === "") {
    return props.items;
  }
  return props.items.filter(
    (item) =>
      item.type.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
      item.category.toLowerCase().includes(searchFilter.value.toLowerCase())
  );
});

const handleSearch = (search) => {
  searchFilter.value = search;
};
</script>

<template>
  <div class="card">
    <div class="d-flex justify-content-between">
      <div class="card-header mt-2">
        <h6>Transaction history</h6>
      </div>
      <div class="card-header">
        <SearchFrom @search="handleSearch" />
      </div>
    </div>
    <div class="card-body px-0 pt-0">
      <div class="table-responsive p-0">
        <table class="table table-bordered align-items-center">
          <thead>
            <tr>
              <th>Category</th>
              <th>Type</th>
              <th>Total</th>
              <th>Info</th>
              <th>Date</th>
              <th>
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="body-table"
              v-for="(item, index) in filteredItems"
              :key="index"
            >
              <td>{{ item.category }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.total }}</td>
              <td>{{ item.info }}</td>
              <td>{{ item.date }}</td>
              <td class="pt-3 pb-1">
                <button-component color="warning" title="Detail" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style></style>
