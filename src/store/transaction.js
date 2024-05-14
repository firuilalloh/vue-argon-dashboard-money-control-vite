import { defineStore } from "pinia";
import * as sv$transaction from "../service/transaction.js";

const st$transaction = defineStore({
    id: "Transaction store",
    state: () => ({
        dataTransaction: {
            status: null,
            data: [],
        },
        // dataBalance: {
        //     status: null,
        //     message: "",
        //     total: [],
        // },
    }),
    actions: {
        async a$getTransaction() {
            try {
                const { data, status } = await sv$transaction.getTransaction();
                this.dataTransaction = {
                    data,
                    status,
                };
            } catch (error) {
                this.dataTransaction = {
                    status: false,
                    data: [],
                };
            }
        },
        // async a$getBalance() {
        //     try {
        //         const { status, message, total } = await sv$transaction.getBalance();
        //         this.dataBalance = {
        //             total,
        //             message,
        //             status,
        //         };
        //     } catch (error) {
        //         this.dataBalance = {
        //             status: false,
        //             message: "",
        //             total: [],
        //         };
        //     }
        // },
        async a$addTransaction(form) {
            try {
                await sv$transaction.addTransaction(form);
                await this.a$getTransaction();
            } catch ({ error, message }) {
                throw error ?? message;
            }
        },
        async a$editTransaction(id, form) {
            try {
                await sv$transaction.editTransaction(id, form);
                await this.a$getTransaction();
            } catch ({error, message}) {
                throw error ?? message;
            }
        },
        async a$deleteTransaction(id) {
            try {
                await sv$transaction.deleteTransaction(id);
                await this.a$getTransaction()
            } catch ({error, message}) {
                throw error ?? message
            }
        }
    },
    getters: {
        g$dataTransaction: ({ dataTransaction }) => dataTransaction,
        // g$dataBalance: ({ dataBalance }) => dataBalance,
    },
});

export default st$transaction;
