<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">Nome do app</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav> </b-collapse>
      </b-navbar>
    </div>
    <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <div class="px-3 py-5">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutBasic",
  data() {
    return {
      info: {},
    };
  },
  methods: {},

  async mounted() {},
};
</script>

<style>
#logo {
  width: 150px;
}
</style>
