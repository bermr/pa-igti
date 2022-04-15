<template>
  <layout-basic>
    <div slot="content">
      <div class="col-md-12 mx-3 mb-4">
        <h1>Extrato</h1>
      </div>
      <div class="row">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Data</th>
              <th>Banco</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in statementItems" :key="item.id">
              <td>{{ item.date }}</td>
              <td><img :src="item.bank" width="40" height="40" alt="..." /></td>
              <td>{{ item.description }}</td>
              <td>R$ {{ item.value }}</td>
              <td col mb-3>
                <a
                  class="btn btn-outline-dark mt-auto"
                  href="#"
                  @click="detail(item)"
                  >Detalhar</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </layout-basic>
</template>

<script>
import LayoutBasic from "../layouts/Basic.vue";
import statementService from "../services/statement";
import { mapActions } from "vuex";

export default {
  name: "HomePage",
  components: {
    LayoutBasic,
  },

  data() {
    return {
      statementItems: [],
    };
  },

  methods: {
    ...mapActions(["addItemToCart"]),

    detail(item) {
      alert("Modal com os detalhes aqui", item);
    },
  },

  mounted() {
    this.statementItems = statementService.all();
  },
};
</script>
