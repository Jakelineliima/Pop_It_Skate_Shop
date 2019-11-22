<template>
  <v-container>
    <v-form v-model="valid">
      <v-card>
        <v-card-title>{{ modo }} usuário</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Nome completo"
            required
          />

          <v-text-field v-model="email" :counter="50" :rules="emailRules" label="E-mail" required />

          <v-text-field
            type="password"
            v-model="password"
            :counter="4"
            :rules="passwordRules"
            label="Senha"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="salvar" :disabled="!valid">
            <v-icon small class="mr-2">mdi-content-save</v-icon>Salvar
          </v-btn>
          <v-btn color="red" to="/adm/dashboard" text @click="cancelar">
            <v-icon small>mdi-undo</v-icon>Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      modo: this.$route.params.id == "incluir" ? "Incluir" : "Editar",
      name: "",
      email: "",
      password: "",
      valid: true,
      nameRules: [v => !!v || "Nome é obrigatório!"],
      emailRules: [
        v => !!v || "E-mail é obrigatório!",
        v => /.+@.+\..+/.test(v) || "E-mail deve ter um formato válido"
      ],
      passwordRules: [
        v => !!v || "Senha é obrigatória!",
        v => (v && v.length <= 10) || "Senha deve ter no minimo 4 caracteres!"
      ]
    };
  },

  methods: {
    salvar() {
      const dados = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      let usuarios = this.$ls.get("usuarios");
      if (usuarios) {
        dados.id = usuarios.length + 1;
        usuarios.push(dados);
      } else {
        dados.id = 1;
        usuarios = [dados];
      }
      this.$ls.set("usuarios", usuarios);

      this.$router.push("/adm/usuarios/lista");
    }
  }
};
</script>
