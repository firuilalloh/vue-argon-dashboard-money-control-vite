import InputComp from "../components/InputComp.vue";
import { Form, Field } from "vee-validate";

const globalComponent = {
  install(app) {
    app.component("InputComp", InputComp);

    app.component("FormComp", Form)
    app.component("FieldForm", Field)
  },
};

export default globalComponent;
