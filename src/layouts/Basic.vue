<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav
          ><b-navbar-nav>
            <b-nav-item to="/pa-igti/">Home</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/pa-igti/config"
              ><i class="fa fa-cog" aria-hidden="true"></i>
              Configurações
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="container">
      <div class="card-body p-0">
        <div class="py-3">
          <slot name="content"></slot>
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
