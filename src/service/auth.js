import { baseApi } from "../plugins/axios";

const login = (body) => baseApi.post("/api/users/login", body);

export { login };
