import { defineStore } from "pinia";
import * as sv$dataCategory from "../service/category.js";

export const st$categoryData = defineStore({
  id: "categoryStore",
  state: () => ({
    dataCategory: {
      status: null,
      data: [],
    },
  }),
  actions: {
    async a$getCategory() {
      try {
        const { status, data } = await sv$dataCategory.getCategory();
        this.dataCategory = {
          status,
          data,
        };
      } catch (error) {
        this.dataCategory = {
          status: false,
          data: [],
        };
      }
    },
  },
  getters: {
    g$getDataCategory: ({ dataCategory }) => dataCategory,
  },
});

export default st$categoryData;
