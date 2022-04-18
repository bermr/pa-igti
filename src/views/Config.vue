<template>
  <layout-basic>
    <div slot="content">
      <b-modal id="myModal" title="Adicionar">
        <ul v-for="item in availableBanks" class="list-group" :key="item.id">
          <li class="list-group-item">
            <img :src="item.logo" width="25" height="25" alt="..." />
            {{ item.name }}
            <button
              class="btn btn-success btn-sm"
              href="#"
              v-b-modal="'myModal'"
              @click="registerBank(item)"
            >
              <i class="fa fa-plus"></i>
            </button>
          </li>
        </ul>
        <template #modal-footer="{ ok }">
          <b-button size="sm" variant="success" @click="ok()"> OK </b-button>
        </template>
      </b-modal>
      <div class="card">
        <div class="row px-5 py-3">
          <div class="column">
            <h1>Instituições registradas</h1>

            <div v-if="registeredBanks.length == 0">
              <p>Você ainda não possui nenhuma insituição cadastrada :(</p>
            </div>
            <ul
              v-for="item in registeredBanks"
              :key="item.id"
              class="list-group list-group-flush"
            >
              <li class="list-group-item">
                <img :src="item.logo" width="25" height="25" alt="..." />
                {{ item.name }}
                <button
                  class="btn btn-danger btn-circle btn-sm"
                  href="#"
                  v-b-modal="'myModal'"
                  @click="remove(item)"
                >
                  <i class="fa fa-minus"></i>
                </button>
              </li>
            </ul>
          </div>
          <div class="column px-3 py-5">
            <p>
              Adicione uma nova instituição financeira ao seu extrato utilizando
              o ecossistema do Open Banking do Brasil. Ao clicar você está
              concordando com os Termos de Uso e etc...
            </p>
            <div class="text-center">
              <a class="btn btn-success btn-lg//" href="#" v-b-modal="'myModal'"
                >Adicionar</a
              >
            </div>
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

  methods: {
    registerBank(itemToAdd) {
      this.registeredBanks.push(itemToAdd);
      this.availableBanks = this.availableBanks.filter((item) => {
        return item.id !== itemToAdd.id;
      });
    },

    remove(itemToRemove) {
      this.registeredBanks = this.registeredBanks.filter((item) => {
        return item.name !== itemToRemove.name;
      });
      this.availableBanks.push(itemToRemove);
    },
  },

  mounted() {
    this.registeredBanks = bankService.all().slice(0, 3);
    this.availableBanks = bankService.all().slice(3);
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
