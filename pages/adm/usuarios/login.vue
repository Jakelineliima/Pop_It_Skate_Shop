<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

        <v-text-field
        type="password" 
        v-model="password"
        :rules="passwordRules"
        label="Senha"
        required>
        </v-text-field>

      <v-btn
        :disabled="!valid"
        color="primary"
        class="mr-4"
        @click="validate"
      >
        Entrar
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default{
  data () {
    return{
    valid: false,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required'
    ],
    password: '',
    passwordRules:[
    v => !!v || 'Digite sua senha!',
    ]
    }
  },

  methods: {
    validate() {
      const usuarios = this.$ls.get('usuarios')
      if(usuarios){
        const usuario = usuarios.find(u => u.email == this.email && u.password == this.password)
        if (usuario) this.$router.push('/adm/dashboard')
        else alert('Não achou!')
      }
    }
  }
}
</script>

