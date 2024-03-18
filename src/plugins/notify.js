import { useToast } from "vue-toastification";

import BaseAlert from "@/components/BaseAlert.vue";
import NotificationComp from "@/components/Notification.vue";

const useNotify = (text, type = true, icon = "fas fa-bell") => {
  const message =
    text?.code === "EMPTY_RESULT"
      ? "Data is Empty!"
      : text?.message ?? text?.error ?? text;
  const content = {
    component: NotificationComp,
    props: {
      ownText: message,
      ownIcon: icon,
      text: message,
      type: type ? "success" : "danger",
    },
  };
  const toast = useToast();
  toast(content, {
    hideProgressBar: true,
    icon: false,
    closeButton: false,
    position: "bottom-right",
  });
};

export default {
  component: {
    BaseAlert,
  },
  install: (app) => {
    const ctx = app;
    ctx.config.globalProperties.$notify = useNotify;
    ctx.$notify = useNotify;
  },
};
