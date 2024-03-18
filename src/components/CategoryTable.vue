<template>
  <div class="card">
    <div class="card-header pb-0">
        <h6>{{ TableTitle }}</h6>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
    }),
    props: {
        TableTitle: {
            type: String,
            default: ''
        }
    }

}
</script>

<style>

</style>