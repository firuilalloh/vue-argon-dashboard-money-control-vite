import InputComp from "../components/InputComp.vue";
import { Form, Field } from "vee-validate";
import DataTable from "../components/DataTable.vue";
import BasePagination from "../components/BasePagination.vue";
import ModalComponent from "../components/ModalComponent.vue";
import BaseInput from "../components/BaseInput.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import MainLayout from "../layout/MainLayout.vue";
import SideNav from "../examples/Sidenav";
import NavBar from "../examples/Navbars/Navbar.vue";
import DropDown from "../components/DropDown.vue";

const globalComponent = {
  install(app) {
    app.component("InputComp", InputComp);
    app.component("DataTable", DataTable);
    app.component("BasePagination", BasePagination);
    app.component("BaseInput", BaseInput);
    app.component("ModalComponent", ModalComponent);
    app.component("ButtonComponent", ButtonComponent);
    app.component("MainLayout", MainLayout);
    app.component("SideNav", SideNav);
    app.component("NavBar", NavBar);
    app.component("DropDown", DropDown);

    app.component("FormComp", Form);
    app.component("FieldForm", Field);
  },
};

export default globalComponent;
