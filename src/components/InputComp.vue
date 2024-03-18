<template>
  <div :class="['form-group']">
    <slot name="label">
      <label v-if="label" :class="labelClasses">
        {{ label }}
      </label>
      <span v-if="required" class="text-danger">*</span>
    </slot>

    <div>
      <slot>
        <input
          :id="name"
          class="form-control"
          :class="inputClasses"
          :name="name"
          :required="required"
          :placeholder="placeholder"
          :value="inputVal"
          :type="type"
          @input="handleChange"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import { useField } from "vee-validate";

export default {
  name: "InputComp",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: [Object, String, Number],
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
    },
    labelClasses: {
      type: String,
      default: "form-control-label",
    },
    inputClasses: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { value: inputVal, handleChange } = useField(props.name, {
      initialValue: props.value,
    });
    return {
      inputVal,
      handleChange,
    };
  },
  data: () => ({
    toggling: "password",
  }),
  methods: {
    togglePassword() {
      this.toggling = this.toggling === "password" ? "text" : "password";
    },
  },
};
</script>

<style></style>
