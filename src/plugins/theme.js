import globalComponent from "./globalComponent";

export default {
  install(app) {
    app.use(globalComponent);
  },
};
