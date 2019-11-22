<template>
  <v-container>
    <v-form v-model="valid">
      <v-card>
        <v-card-title>{{ modo }} usuário</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="nome"
            :counter="50"
            :rules="nomeRegras"
            label="Nome completo"
            required
          />

          <v-text-field
            v-model="email"
            :counter="100"
            :rules="emailRegras"
            label="E-mail"
            autocomplete="new-password"
            required
          />

          <v-text-field
            type="password"
            v-model="senha"
            :counter="50"
            :rules="senhaValidacao"
            label="Senha"
            autocomplete="new-password"
            v-if="modo == 'Incluir'"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="salvar" :disabled="!valid">
            <v-icon small class="mr-2">mdi-content-save</v-icon>Salvar
          </v-btn>
          <v-btn color="secondary" text @click="cancelar">
            <v-icon small class="mr-2" to="/adm/dashboard">mdi-undo</v-icon>Cancelar
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
      senha: "",
      valid: true,
      nameRegras: [v => !!v || "Nome completo é obrigatório"],
      apelidoRegras: [v => !!v || "Apelido é obrigatório"],
      emailRegras: [
        v => !!v || "E-mail é obrigatório",
        v =>
          (v && v.length <= 100) || "E-mail deve ter no máximo 100 caracteres",
        v => /.+@.+\..+/.test(v) || "E-mail deve ter um formato válido"
      ],
      senhaValidacao: [
        v => this.modo == "Incluir" && (!!v || "Senha é obrigatória"),
        v =>
          this.modo == "Incluir" &&
          ((v && v.length <= 100) || "Senha deve ter no máximo 50 caracteres")
      ]
    };
  },

  created() {
    const usuarios = this.$ls.get("usuarios");
    if (usuarios) {
      const usuario = usuarios.find(u => u.id == this.id);
      if (usuario) {
        this.name = usuario.name;
        this.apelido = usuario.apelido;
        this.email = usuario.email;
      }
    }
  },

  methods: {
    gerarId() {
      return Math.round(Math.random() * 9999);
    },

    salvar() {
      let dados = this.$ls.get("usuarios");
      if (!dados) dados = [];

      if (this.modo == "Incluir") {
        dados.push({
          id: this.gerarId(),
          name: this.name,
          apelido: this.apelido,
          email: this.email,
          senha: this.senha
        });
      } else {
        const i = dados.findIndex(u => u.id == this.id);
        dados[i].name = this.name;
        dados[i].apelido = this.apelido;
        dados[i].email = this.email;
      }

      this.$ls.set("usuarios", dados);
      this.$router.push("/adm/usuarios/lista");
    },

    cancelar() {
      this.$router.push("/adm/usuarios/");
    }
  }
};
</script>
