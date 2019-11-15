<template>
     <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn color="#fff" white v-on="on">Acessibilidade</v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" :to="item.to" router exact>
         <v-list-item-action color="#fff">
              <v-icon color="#fff">{{ item.icon }}</v-icon>
            </v-list-item-action>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "dropacessibilidade",
  data ()  {
    
  return{
      
    items: [
      {
        title: "Contraste",
        to:""
      },

      { 
         icon: "",
        title: "Aumentar letra",
        to: ""
      },

      {
        title: "Diminuir letra",
        to: ""
      },

      {
        title: "Tamanho padrão",
        to: ""
      },

      {
        title: "Vlibras",
        to: ""
      }
    ]
  }
  
}}
</script>