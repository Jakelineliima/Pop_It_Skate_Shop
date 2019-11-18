<template>
  <div>
    <h1> Usuários cadastrados.</h1> 

    <v-data-table
      :headers="headers"
      :items="usuarios"
      sort-by="nome"
      class="elevation-1"
      :hide-default-footer="true"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Usuários</v-toolbar-title>
          <v-spacer />
          <v-btn color="primary" dark class="mb-2" v-on="on" nuxt to="/adm/usuarios/incluir" >Incluir</v-btn>
        </v-toolbar>
      </template>
       <template v-slot:item.action="{ item }">
        <v-icon
          color="primary"
          class="mr-2"
          @click="editar(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          color="pink"
          @click="excluir(item)"
        >
          mdi-delete
        </v-icon>
      </template>
     
      <template v-slot:no-data>
        Não há registros cadastrados!
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'lista',
  data () {
    return {
      headers: [
        { text: 'Nome', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Ações', value: 'action', sortable: false,width: 100  }
      ],

      usuarios: []
    }
  },

  created () {
    const usuarios = this.$ls.get('usuarios') /*recupera os dados do ls*/
    if (usuarios) this.usuarios = usuarios
  },

 
  methods: {
    editar (item) {
      this.$router.push(`/adm/usuarios/${item.id}`)
    },

    excluir (item) {
      let dados = this.$ls.get('usuarios')
      dados = dados.filter(u => u.id != item.id)
      this.$ls.set('usuarios', dados)
      this.usuarios = dados
    }
  }
}
</script>
