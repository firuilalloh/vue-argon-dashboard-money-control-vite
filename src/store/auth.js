import { defineStore } from "pinia";
import { login } from "../service/auth.js";
import { setCk, delCk, certDetail } from "@/utils/cookies";
import d from "dayjs";

const useAuthStore = defineStore({
  id: "auth",
  actions: {
    async a$setUserInfo() {
      try {
        const { id, user } = certDetail();
        if (!id && !user) throw Error("No User Info");
        this.id = id;
        this.user = user;
      } catch ({ message }) {
        this.id = undefined;
        this.user = undefined;
      }
    },
    async a$login(payload) {
      try {
        const { data } = await login(payload);
        setCk("CERT", data.token, { iso9601: d(data.expiresAt) });
        this.a$setUserInfo();
        return "Login Success";
      } catch (error) {
        throw error ?? "Login Failed";
      }
    },
    async a$logout() {
      try {
        const { id, user } = certDetail();
        if (id && user) delCk("CERT");
        this.a$setUserInfo();
        return "Logout Success";
      } catch (error) {
        throw error ?? "Logout Failed";
      }
    },
  },
});

export default useAuthStore;
