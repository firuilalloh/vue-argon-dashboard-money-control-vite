import { baseApi } from "../plugins/axios";

const api = "api/users/transaction";

const getTransaction = () => baseApi.get(`${api}/gettransaction`);
const addTransaction = (body) => baseApi.post(`${api}/addtransaction`, body);
const getBalance = () => baseApi.get(`${api}/gettotalbalance`);
const editTransaction = (id, body) => baseApi.put(`${api}/edittransaction/${id}`, body);
const deleteTransaction = (id) => baseApi.delete(`${api}/delTransaction/${id}`);

export {
  getTransaction,
  addTransaction,
  getBalance,
  editTransaction,
  deleteTransaction,
};