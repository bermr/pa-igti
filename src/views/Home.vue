<template>
  <layout-basic>
    <div slot="content">
      <b-modal id="myModal" title="Detalhamento">
        {{ detailItem.description }} {{ detailItem.date }}
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
