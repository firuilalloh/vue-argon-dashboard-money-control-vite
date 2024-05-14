import InputComp from "../components/InputComp.vue";
import { Form, Field } from "vee-validate";
import DataTable from "../components/DataTable.vue";
import BasePagination from "../components/BasePagination.vue";
import ModalComponent from "../components/ModalComponent.vue";
import BaseInput from "../components/BaseInput.vue";

const globalComponent = {
  install(app) {
    app.component("InputComp", InputComp);
    app.component("DataTable", DataTable);
    app.component("BasePagination", BasePagination);
    app.component("BaseInput", BaseInput);
    app.component("ModalComponent", ModalComponent);

    app.component("FormComp", Form);
    app.component("FieldForm", Field);
  },
};

export default globalComponent;
