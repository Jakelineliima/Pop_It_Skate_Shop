<template>
<v-app>
  <appheader/>
<v-form>
  <v-container>
    <v-col cols="12"  md="3" text-center>
      <h1>Digite sua informações para se cadastrar.</h1>
            <v-text-field
              label="Nome"
              placeholder="Digite seu nome."
              outlined
              v-model="name"
               :rules="nameRules"
            ></v-text-field>
          </v-col>

           <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="E-mail"
              placeholder="Digite seu e-mail."
              outlined
               v-model="email"
        :rules="emailRules"
            ></v-text-field>
          </v-col>

           <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Senha"
              placeholder="Digite uma senha."
              outlined
              type="password"
              v-model="password"
        :rules="passwordRules"
            ></v-text-field>
          </v-col>
          <button @click="salvar">Salvar</button>
          <v-alert transition="scale-transition" type="error" :value="!!alert">{{alert}}</v-alert>
  </v-container>
</v-form>
</v-app>
  
</template>

<script>
import appheader from "../../../components/appheader.vue"
export default {
  components:{
   appheader
  },
  data () {
    return {
      name: '',
      nameRules: [
      v => !!v || 'O nome é necessario.'],

      email: '',
      emailRules: [
      v => !!v || 'E-mail é necessario',
     
    ],
      password: '',
      passwordRules:[
    v => !!v || 'Digite sua senha!',
    ], 
    alert:''
    }
  },

  methods: {
    salvar () {
      const dados = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      let usuarios = this.$ls.get('usuarios')
      if (usuarios) {
        dados.id = usuarios.length + 1
        usuarios.push(dados)
        this.$router.push('/adm/usuarios/lista')
        this.$ls.set('usuarios', usuarios)
      } else {
        dados.id = 1
        usuarios = [ dados ]
        this.alert = "Não há dados registrados!"
      }
      

    }
  }
}
</script>
