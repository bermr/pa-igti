<template>
  <layout-basic>
    <div slot="content">
      <b-modal id="myModal">
        <div class="row">
          <div class="col-md-9" style="font-size: 30px">
            {{ detailItem.description }}
          </div>
          <div
            class="py-2 px-2 card"
            style="font-size: 20px"
            v-bind:class="
              detailItem.signal === 'credit' ? 'text-success' : 'text-danger'
            "
          >
            {{ detailItem.signal == "credit" ? "Crédito" : "Débito" }}
          </div>
        </div>
        <div class="pt-3">
          <div class="row">
            <div class="col-md-6">
              <div style="font-size: 20px">Valor do lançamento</div>
              <strong>{{ detailItem.value }}</strong>
            </div>
            <div class="col-md-6 text-center">
              <div style="font-size: 20px">Data de lançamento</div>
              <strong style="text-align: center">{{ detailItem.date }}</strong>
            </div>
          </div>
          <div class="pt-1">
            <div style="font-size: 20px">Instituição</div>
            <strong>{{ detailItem.bankName }}</strong>
          </div>
          <div class="pt-1">
            <div style="font-size: 20px">Número de controle</div>
            <strong>{{ detailItem.registerNumber }}</strong>
          </div>
        </div>
        <template #modal-footer="{ ok }">
          <b-button size="sm" variant="success" @click="ok()"> OK </b-button>
        </template>
      </b-modal>
      <div class="py-3">
        <h3>Olá, <strong>Bernardo</strong></h3>
        <div class="input-group md-form form-sm form-2 pl-0 py-3">
          <input
            class="form-control my-0 py-1 lime-border"
            type="text"
            placeholder="Buscar"
            v-model="query"
            aria-label="Search"
          />
        </div>
        <div class="card my-3">
          <div class="px-4">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th style="font-size: 18px; border-bottom: 1pt solid black">
                    Descrição
                  </th>
                  <th style="font-size: 18px; border-bottom: 1pt solid black">
                    Data
                  </th>
                  <th style="font-size: 18px; border-bottom: 1pt solid black">
                    Valor (R$)
                  </th>
                  <th
                    style="font-size: 18px; border-bottom: 1pt solid black"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in queryResult" :key="item.id">
                  <td>
                    <img :src="item.bank" width="25" height="25" alt="..." />
                    {{ item.description }}
                  </td>
                  <td>{{ item.date }}</td>

                  <td
                    v-bind:class="
                      item.signal === 'credit' ? 'text-success' : 'text-danger'
                    "
                  >
                    {{ item.signal === "credit" ? "+" : "-" }} {{ item.value }}
                  </td>

                  <td>
                    <a
                      style="font-size: 0.8em; width: 5vh"
                      class="btn btn-dark btn-sm py-0"
                      href="#"
                      v-b-modal="'myModal'"
                      @click="detail(item)"
                      ><i class="fa fa-search"></i
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </layout-basic>
</template>

<script>
import LayoutBasic from "../layouts/Basic.vue";
import statementService from "../services/statement";

export default {
  name: "HomePage",
  components: {
    LayoutBasic,
  },

  data() {
    return {
      statementItems: [],
      queryItems: [],
      detailItem: {},
      query: null,
    };
  },

  methods: {
    detail(item) {
      this.detailItem = item;
    },
  },

  mounted() {
    this.statementItems = statementService.all();
  },

  computed: {
    queryResult() {
      if (this.query) {
        return this.statementItems.filter((item) => {
          return this.query
            .toLowerCase()
            .split(" ")
            .every(
              (v) =>
                item.description.toLowerCase().includes(v) ||
                item.value.toString().includes(v)
            );
        });
      } else {
        return this.statementItems;
      }
    },
  },
};
</script>
