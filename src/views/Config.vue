<template>
  <layout-basic>
    <div slot="content">
      <div class="card">
        <div class="row px-5 py-3">
          <div class="column">
            <h3>Instituições registradas</h3>
            <ul
              v-for="item in registeredBanks"
              :key="item.id"
              class="list-group list-group-flush"
            >
              <li class="list-group-item">
                <img :src="item.logo" width="25" height="25" alt="..." />
                {{ item.name }}
                <a
                  class="btn btn-danger btn-sm py-0"
                  href="#"
                  v-b-modal="'myModal'"
                  @click="detail(item)"
                  ><i class="fa fa-minus"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="column px-3 py-5">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <a
              class="btn btn-success btn-sm py-0"
              href="#"
              v-b-modal="'myModal'"
              @click="detail(item)"
              ><i class="fa fa-plus"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </layout-basic>
</template>

<script>
import LayoutBasic from "../layouts/Basic.vue";
import bankService from "../services/bank";

export default {
  name: "ConfigPage",
  components: {
    LayoutBasic,
  },

  data() {
    return {
      availableBanks: [],
      registeredBanks: [],
    };
  },

  mounted() {
    this.registeredBanks = bankService.all();
  },
};
</script>

<style>
.row {
  display: flex;
}

.column {
  flex: 50%;
}
</style>
