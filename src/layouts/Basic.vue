<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"
          ><img
            width="20"
            height="20"
            src="https://img.icons8.com/officel/344/money-box.png"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav
          ><b-navbar-nav>
            <b-nav-item to="/">Extrato</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/configuracoes"
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
