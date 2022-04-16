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
        <div class="card">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th style="font-size: 20px; border-bottom: 1pt solid black">
                  Descrição
                </th>
                <th style="font-size: 20px; border-bottom: 1pt solid black">
                  Data
                </th>
                <th style="font-size: 20px; border-bottom: 1pt solid black">
                  Valor (R$)
                </th>
                <th
                  style="font-size: 20px; border-bottom: 1pt solid black"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in statementItems" :key="item.id">
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
      detailItem: {},
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
};
</script>
