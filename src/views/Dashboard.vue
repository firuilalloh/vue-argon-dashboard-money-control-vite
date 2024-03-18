<template>
  <div class="py-4 container-fluid">
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
        <div class="row mt-4">
          <div class="col-lg-7 mb-lg-0 mb-4">
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <div class="d-flex justify-content-between">
                  <h6 class="mb-2">Category's</h6>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table align-items-center">
                  <tbody>
                    <tr v-for="(sale, index) in sales" :key="index">
                      <td class="w-30">
                        <div class="px-2 py-1 d-flex align-items-center">
                          <div>
                            <img :src="sale.flag" alt="Country flag" />
                          </div>
                          <div class="ms-4">
                            <p class="mb-0 text-xs font-weight-bold">
                              Country:
                            </p>
                            <h6 class="mb-0 text-sm">{{ sale.country }}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">Sales:</p>
                          <h6 class="mb-0 text-sm">{{ sale.sales }}</h6>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">Value:</p>
                          <h6 class="mb-0 text-sm">{{ sale.value }}</h6>
                        </div>
                      </td>
                      <td class="text-sm align-middle">
                        <div class="text-center col">
                          <p class="mb-0 text-xs font-weight-bold">Bounce:</p>
                          <h6 class="mb-0 text-sm">{{ sale.bounce }}</h6>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <categories-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// component
import Card from "@/examples/Cards/Card.vue";
import CategoriesCard from "../components/CategoriesCard.vue";

import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";
// store
import st$balanceData from "../store/balance";
import { mapActions, mapState } from "pinia";

export default {
  name: "dashboard-default",
  // data() {
  //   return {
  //     stats: {
  //       money: {
  //         title: "Today's Money",
  //         iconClass: "ni ni-money-coins",
  //         iconBackground: "bg-gradient-primary",
  //       },
  //       users: {
  //         title: "Total Income",
  //         iconClass: "ni ni-world",
  //         iconBackground: "bg-gradient-danger",
  //       },
  //       clients: {
  //         title: "Total Expand",
  //         iconClass: "ni ni-paper-diploma",
  //         iconBackground: "bg-gradient-success",
  //       },
  //     },
  //     sales: {
  //       us: {
  //         country: "United States",
  //         sales: 2500,
  //         value: "$230,900",
  //         bounce: "29.9%",
  //         flag: US,
  //       },
  //       germany: {
  //         country: "Germany",
  //         sales: "3.900",
  //         value: "$440,000",
  //         bounce: "40.22%",
  //         flag: DE,
  //       },
  //       britain: {
  //         country: "Great Britain",
  //         sales: "1.400",
  //         value: "$190,700",
  //         bounce: "23.44%",
  //         flag: GB,
  //       },
  //       brasil: {
  //         country: "Brasil",
  //         sales: "562",
  //         value: "$143,960",
  //         bounce: "32.14%",
  //         flag: BR,
  //       },
  //     },
  //   };
  // },
  data: () => ({
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
    sales: {
      us: {
        country: "United States",
        sales: 2500,
        value: "$230,900",
        bounce: "29.9%",
        flag: US,
      },
      germany: {
        country: "Germany",
        sales: "3.900",
        value: "$440,000",
        bounce: "40.22%",
        flag: DE,
      },
      britain: {
        country: "Great Britain",
        sales: "1.400",
        value: "$190,700",
        bounce: "23.44%",
        flag: GB,
      },
      brasil: {
        country: "Brasil",
        sales: "562",
        value: "$143,960",
        bounce: "32.14%",
        flag: BR,
      },
    },
  }),
  components: {
    Card,
    CategoriesCard,
  },
  computed: {
    ...mapState(st$balanceData, [
      "g$getDataBalance",
      "g$getDataExpand",
      "g$getDataIncome",
    ]),
  },
  async mounted() {
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
  },
};
</script>
