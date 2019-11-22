<template>
  <v-container class="container">
    <v-data-table
      :headers="headers"
      :items="usuarios"
      sort-by="nome"
      class="elevation-1"
      :hide-default-footer="true"
    >
      <template v-slot:top class="txt">
        <v-toolbar color="white" class="cont">
          <v-toolbar-title class="cont">Usuários</v-toolbar-title>
          <v-spacer />
          <div class="btn">
            <v-btn color="#939393" to="/adm/dashboard" class="white--text">
              Cancelar
              <v-icon>mdi-arrow-left-thick</v-icon>
            </v-btn>
            <v-btn color="primary" to="/adm/usuarios/incluir" class="elevation-1">
              Adicionar
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon color="#000" class="mr-2" @click="editar(item)">mdi-pencil</v-icon>
        <v-icon color="red" @click="excluir(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>Não há registros cadastrados!</template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Nome completo", value: "nome" },
        { text: "E-mail", value: "email" },
        { text: "Ações", value: "action", sortable: false, width: 100 }
      ],

      usuarios: []
    };
  },

  created() {
    const usuarios = this.$ls.get("usuarios");
    if (usuarios) this.usuarios = usuarios;
  },

  methods: {
    editar(item) {
      this.$router.push(`/adm/usuarios/${item.id}`);
    },

    excluir(item) {
      let dados = this.$ls.get("usuarios");
      dados = dados.filter(u => u.id != item.id);
      this.$ls.set("usuarios", dados);
      this.usuarios = dados;
    }
  }
};
</script>
<style scoped>
.btn {
  color: #fff;
}
.container {
  box-shadow: 0px 0px 6px -2px #000;
}
@media (max-width: 360px) {
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .cont {
    display: contents;
  }
  .btn {
    margin: 3px -4px -17px 47px;
  }
  .txt {
    margin-top: 25px;
  }
}
</style>
