<template>
  <main-layout>
    <template #body>
      <data-table-filter class="tb-filter" :items="items" />
    </template>
  </main-layout>
</template>

<script>
import DataTableFilter from "../components/DataTableFilter.vue";
import AuthorsTable from "../components/AuthorsTable.vue";
import CategoryTable from "../components/CategoryTable.vue";
import ProjectsTable from "../components/ProjectsTable.vue";
import { mapActions, mapState } from "pinia";
import st$transaction from "../store/transaction";

export default {
  name: "tablesPage",
  components: {
    DataTableFilter,
    AuthorsTable,
    ProjectsTable,
    CategoryTable,
  },
  data: () => ({
    Table: "Catgeory",
    items: [
      {
        category: "",
        type: "",
        total: "",
        info: "",
        date: "",
      },
    ],
  }),
  computed: {
    ...mapState(st$transaction, ["g$dataTransaction"]),
  },
  async mounted() {
    this.transaction();
  },
  methods: {
    ...mapActions(st$transaction, ["a$getTransaction"]),
    async transaction() {
      try {
        await this.a$getTransaction();
        this.fillTheItems();
      } catch (error) {
        console.error(error);
      }
    },
    fillTheItems() {
      const transaction = this.g$dataTransaction;

      this.items = transaction.data.map((transaction) => {
        return {
          category: transaction.category_name,
          type: transaction.type_name,
          total: transaction.total,
          info: transaction.info,
          date: transaction.date_transaction,
        };
      });
    },
  },
};
</script>

<style scoped>
.tb-filter {
  margin-top: -50px;
  padding: 8px;
}
</style>
