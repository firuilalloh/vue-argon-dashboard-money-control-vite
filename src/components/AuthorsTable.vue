<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Category Table</h6>
    </div>
    <div class="card-body px-0 pt-0">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                ID Category
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Name Category
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-3 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">1</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Shop</p>
              </td>
              <td class="td-actions text-right">
                <button
                  type="button"
                  rel="tooltip"
                  class="btn btn-success btn-icon btn-sm"
                  data-original-title=""
                  title=""
                >
                  <i class="ni ni-settings-gear-65 pt-1"></i>
                </button>
                <button
                  type="button"
                  rel="tooltip"
                  class="btn btn-danger btn-icon btn-sm"
                  data-original-title=""
                  title=""
                >
                  <i class="ni ni-fat-remove pt-1"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import st$categoryData from "../store/category";
import { mapActions, mapState } from "pinia";

export default {
  name: "authors-table",
  computed: {
    ...mapState(st$categoryData, ["g$getDataCategory"]),
  },
  async mounted() {
    await this.category();
    console.log(this.g$getDataCategory);
  },
  methods: {
    ...mapActions(st$categoryData, ["a$getCategory"]),

    async category() {
      try {
        await this.a$getCategory();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
