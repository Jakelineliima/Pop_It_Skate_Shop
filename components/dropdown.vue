<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn color="#1fec0e" white v-on="on">Entrar</v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" :to="item.to" router exact>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "dropdown",
  data() {
    return {
      items: [
        {
          title: "Painel Administrativo",
          to: "/adm/usuarios/login"
        }
      ]
    };
  }
};
</script>