<template>
  <!-- <base-header
      v-if="!isFull"
      type="gradient-fln"
      class="pb-6 pt-5"
    >
      Card stats
      <div class="col-lg-12 mb-5 p-0">
        <h1 class="display-2 text-white text-center">{{ title }}</h1>
      </div>
    </base-header> -->

  <div class="container-fluid" :class="[!isFull ? 'mt--7' : '']">
    <div v-if="!cardDeck" class="row">
      <div class="col-12">
        <div :class="['card shadow']">
          <div
            v-if="!disableHeaderBody || $slots.header"
            :class="['card-header']"
          >
            <slot name="header"></slot>
          </div>
          <div class="card-body" :class="[{ 'p-0': disablePadding }]">
            <slot name="body"></slot>
          </div>
          <div v-if="$slots.footer" class="card-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <slot name="body"></slot>
    </div>
  </div>

  <slot name="modal"></slot>
</template>
  
  <script>
export default {
  name: "MainLayout",
  props: {
    title: {
      type: String,
      default: "Main Dashboard Layout",
    },
    disablePadding: {
      type: Boolean,
      default: false,
    },
    disableHeaderBody: {
      type: Boolean,
      default: false,
    },
    isFull: {
      type: Boolean,
      default: false,
    },
    cardDeck: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
  
  <style lang="scss">
.card {
  .card-header {
    h3 {
      margin: 0;
    }
  }
}

// .main-layout {
//   margin-left: 200px;
// }
.card-dark {
  background-color: #1a1a1a !important;
  h3,
  p,
  label.form-control-label {
    color: white !important;
  }
  border-color: #bebebe !important;
}
</style>
  