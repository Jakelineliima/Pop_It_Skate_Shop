<template>
  <div>
    <appheader />

    <v-card class="card">
      <v-form ref="form" v-model="valid" class="form">
        <h1>Digite suas informações de administrador.</h1>
        <div class="d-flex flex-direction-row" margin="10px">
          <v-icon>mdi-gmail</v-icon>

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </div>

        <div class="d-flex flex-direction-row" margin="25">
          <v-icon>mdi-lock</v-icon>

          <v-text-field
            type="password"
            v-model="password"
            :rules="passwordRules"
            label="Senha"
            required
          ></v-text-field>
        </div>
        <v-alert transition="scale-transition" type="error" :value="!!alert">{{alert}}</v-alert>
        <div class="btns">
          <v-btn :disabled="!valid" color="green" class="mr-4 entrar" @click="validate">Entrar</v-btn>
          <v-btn to="/" class="btn" color="#424242">Voltar</v-btn>
        </div>
      </v-form>
    </v-card>
    <rodape />
  </div>
</template>

<script>
import appheader from "../../../components/appheader.vue";
import rodape from "../../../components/rodape";
export default {
  components: {
    appheader,
    rodape
  },
  data() {
    return {
      valid: false,
      email: "",
      emailRules: [v => !!v || "E-mail é necessario."],
      password: "",
      passwordRules: [v => !!v || "Digite sua senha!"],
      alert: ""
    };
  },

  methods: {
    validate() {
      const usuarios = this.$ls.get("usuarios");
      if (usuarios) {
        const usuario = usuarios.find(
          u => u.email == this.email && u.password == this.password
        );
        if (usuario) this.$router.push("/adm/dashboard");
        else {
          this.alert = "Você não tem permissão para entrar!";
        }
      }
    }
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
  margin-top: 35px;
}
.card {
  display: flex;
  justify-content: center;

  border-radius: 9px;
  box-shadow: 0px 0px 9px -2px;
  margin: 75px 134px;
}

.form {
  margin: 19px 0 71px 0;
}

.btn {
  color: #ffff;
}

.btns {
  margin-top: 31px;
}
@media (max-width: 860px) {
  .card {
    font-size: 12px;
    display: contents;
  }
  h1 {
    margin-top: 55px;
  }
  .form {
    padding-top: 70px;
    padding-bottom: 84px;
  }
}
</style>

