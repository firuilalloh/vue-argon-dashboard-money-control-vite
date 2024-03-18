import { defineStore } from "pinia";
import * as sv$dataBalance from "../service/balance.js";

export const st$balanceData = defineStore({
  id: "balanceStore",
  state: () => ({
    dataBalance: {
      status: null,
      total: [],
    },
    dataExpand: {
      status: null,
      data: [],
    },
    dataIncome: {
      status: null,
      data: [],
    },
  }),
  actions: {
    async a$getBalance() {
      try {
        const { status, total } = await sv$dataBalance.getTotalBalance();
        this.dataBalance = {
          status,
          total,
        };
      } catch (error) {
        this.dataBalance = {
          status: false,
          total: [],
        };
      }
    },
    async a$getExpand() {
      try {
        const { status, data } = await sv$dataBalance.getExpand();
        this.dataExpand = {
          status,
          data,
        };
      } catch (error) {
        this.dataExpand = {
          status: false,
          data: [],
        };
      }
    },
    async a$getIncome() {
      try {
        const { status, data } = await sv$dataBalance.getIncome();
        this.dataIncome = {
          status,
          data,
        };
      } catch (error) {
        this.dataIncome = {
          status: false,
          data: [],
        };
      }
    },
  },
  getters: {
    g$getDataBalance: ({ dataBalance }) => dataBalance,
    g$getDataExpand: ({ dataExpand }) => dataExpand,
    g$getDataIncome: ({ dataIncome }) => dataIncome,
  },
});

export default st$balanceData;
