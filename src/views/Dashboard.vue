<template>
  <main-layout>
    <template #header>
      <div class="p-1 container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-12">
                <card
                  :title="stats.money.title"
                  :value="g$getDataBalance.total"
                  :iconClass="stats.money.iconClass"
                  :iconBackground="stats.money.iconBackground"
                  directionReverse
                ></card>
              </div>
              <div class="col-lg-3 col-md-6 col-12">
                <card
                  :title="stats.users.title"
                  :value="g$getDataIncome.data"
                  :iconClass="stats.users.iconClass"
                  :iconBackground="stats.users.iconBackground"
                  directionReverse
                ></card>
              </div>
              <div class="col-lg-3 col-md-6 col-12">
                <card
                  :title="stats.clients.title"
                  :value="g$getDataExpand.data"
                  :iconClass="stats.clients.iconClass"
                  :iconBackground="stats.clients.iconBackground"
                  directionReverse
                ></card>
              </div>
            </div>
            <div class="add-transaction pt-4">
              <button-component
                icon="fa fa-solid fa-plus"
                title="Add Transaction"
                color="info"
                size="btn-md"
                @click="modal.add = true"
              />
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #body>
      <div class="table-comp p-1">
        <empty-result :status="g$dataTransaction.status">
          <data-table
            :data="g$dataTransaction.data"
            v-bind="dt"
            @edit-transaction="EditModal"
            @delete-transaction="DeleteModal"
          />
        </empty-result>
      </div>
    </template>

    <template #modal>
      <div>
        <modal-component
          v-model:show="modal.add"
          modal-classes="modal-lg"
          class="modal-container"
        >
          <template #header>
            <h3 class="modal-title">Add new transaction</h3>
          </template>
          <template #body>
            <from-comp :validation-schema="schema" @submit="onSubmit">
              <div class="row">
                <div class="col-6">
                  <field-form
                    v-slot="{ field }"
                    v-model="input.category"
                    name="category"
                  >
                    <base-input
                      v-bind="field"
                      placeholder="Category type"
                      label="Category"
                      required
                    >
                      <drop-down :options="optionsCategory" />
                    </base-input>
                  </field-form>
                </div>
                <div class="col-6">
                  <field-form
                    v-slot="{ field }"
                    v-model="input.category"
                    name="type"
                  >
                    <base-input
                      v-bind="field"
                      placeholder="Type"
                      label="Type"
                      required
                    >
                      <drop-down :options="optionsType" />
                    </base-input>
                  </field-form>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <field-form
                    v-slot="{ field }"
                    v-model="input.category"
                    name="total"
                  >
                    <base-input
                      v-bind="field"
                      placeholder="Total"
                      label="Total"
                      required
                    >
                    </base-input>
                  </field-form>
                </div>
                <div class="col-6">
                  <field-form
                    v-slot="{ field }"
                    v-model="input.category"
                    name="info"
                  >
                    <base-input
                      v-bind="field"
                      placeholder="Info"
                      label="Info"
                      required
                    >
                    </base-input>
                  </field-form>
                </div>
              </div>
            </from-comp>
          </template>
          <template #footer>
            <button-component
              title="cancle"
              color="danger"
              size="btn-md"
              @click="modal.add = false"
            />
            <button-component
              title="Save"
              color="success"
              size="btn-md"
              @click="onSave"
            />
          </template>
        </modal-component>
      </div>
    </template>
  </main-layout>
</template>

<script>
// component
import Card from "@/examples/Cards/Card.vue";
import CategoriesCard from "../components/CategoriesCard.vue";
import {
  object as y$object,
  string as y$string,
  number as y$number,
} from "yup";

// store
import st$balanceData from "../store/balance";
import st$transaction from "../store/transaction";
import { mapActions, mapState } from "pinia";
import ButtonComponent from "../components/ButtonComponent.vue";

export default {
  name: "dashboard-default",

  setup() {
    const schema = y$object({
      total: y$number().required().label("Total"),
      info: y$string().required().label("Info"),
    });
    return {
      schema,
    };
  },
  data: () => ({
    input: {
      id: null,
      category: "",
      type: "",
      totel: "",
      info: "",
    },
    dt: {
      columns: [
        { name: "category_name", th: "Category" },
        { name: "type_name", th: "Type" },
        { name: "total", th: "Total" },
        { name: "info", th: "Information" },
        { name: "date_transaction", th: "Date" },
      ],
      actions: [
        {
          text: "Edit",
          color: "info",
          event: "edit-transaction",
        },
        {
          text: "Delete",
          color: "danger",
          event: "delete-transaction",
        },
      ],
      index: false,
    },
    optionsCategory: [
      { text: "Selery", value: 1 },
      { text: "Transport", value: 2 },
      { text: "Shop", value: 3 },
    ],
    // data option category select
    optionsType: [
      { text: "Income", value: 1 },
      { text: "Expand", value: 2 },
    ],
    modal: {
      add: false,
      edit: false,
      delete: false,
    },
    stats: {
      money: {
        title: "Month Money",
        iconClass: "ni ni-money-coins",
        iconBackground: "bg-gradient-primary",
      },
      users: {
        title: "Total Income",
        iconClass: "ni ni-world",
        iconBackground: "bg-gradient-danger",
      },
      clients: {
        title: "Total Expand",
        iconClass: "ni ni-paper-diploma",
        iconBackground: "bg-gradient-success",
      },
    },
  }),
  components: {
    Card,
    CategoriesCard,
    ButtonComponent,
  },
  computed: {
    ...mapState(st$balanceData, [
      "g$getDataBalance",
      "g$getDataExpand",
      "g$getDataIncome",
    ]),
    ...mapState(st$transaction, ["g$dataTransaction"]),
  },
  async mounted() {
    await this.transaction();
    await this.balance();
    await this.expand();
    await this.income();
    console.log(this.g$getDataExpand);
  },
  methods: {
    ...mapActions(st$balanceData, [
      "a$getBalance",
      "a$getExpand",
      "a$getIncome",
    ]),

    ...mapActions(st$transaction, ["a$getTransaction"]),

    async transaction() {
      try {
        await this.a$getTransaction();
      } catch (error) {
        console.error(error);
      }
    },

    async balance() {
      try {
        await this.a$getBalance();
      } catch (error) {
        console.error(error);
      }
    },

    async expand() {
      try {
        await this.a$getExpand();
      } catch (error) {
        console.error(error);
      }
    },

    async income() {
      try {
        await this.a$getIncome();
      } catch (error) {
        console.error(error);
      }
    },

    async onSubmit(values) {
      try {
        await this.schema.validate(values);
      } catch (error) {
        console.error(error);
      }
    },

    async onSave() {
      console.log("test");
    },
  },
};
</script>

<style scoped>
.btn-open-modal {
  background-color: #0096e7;
  border: none;
  color: aliceblue;
  font-weight: 700;
}

.table-comp {
  margin-top: -40px;
}
</style>
