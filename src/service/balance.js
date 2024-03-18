import { baseApi } from "../plugins/axios";

const api = "api/users/transaction";

const getTotalBalance = () => baseApi.get(`${api}/gettotalbalance`);
const getExpand = () => baseApi.get(`${api}/getexpand`);
const getIncome = () => baseApi.get(`${api}/getincome`);

export { getTotalBalance, getExpand, getIncome };
