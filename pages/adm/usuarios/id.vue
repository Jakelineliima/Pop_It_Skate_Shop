<template>
  <div>
    Editar usuário

    <input v-model="nome" placeholder="Nome do usuário">
    <input v-model="email" placeholder="E-mail">

    <button @click="salvar">Salvar</button>
    <button @click="cancelar">Cancelar</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      nome: '',
      email: ''
    }
  },

  created () {
    const usuarios = this.$ls.get('usuarios')
    if (usuarios) {
      const item = usuarios.find(r => r.id == this.id)

      if (item) {
        this.nome = item.nome
        this.email = item.email
      }
    }
  },

  methods: {
    salvar () {

    }
  }
}
</script>
