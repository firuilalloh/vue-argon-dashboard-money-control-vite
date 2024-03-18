import { baseApi } from "../plugins/axios";

const api = 'api/users/category'

const getCategory = () => baseApi.get(`${api}/getcategory`)

export { getCategory }