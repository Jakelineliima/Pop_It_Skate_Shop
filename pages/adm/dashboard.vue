<template>  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      class="d-flex justify-contend-around"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Painel Administrativo - Pop-It Skate Shop</v-toolbar-title>
      <v-btn to="/"><v-icon to="/index"> mdi-reply
      </v-icon> <p>Voltar para o site.</p></v-btn>
     
    </v-app-bar>

    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
          class="alinhar"
        >

        <cards/>
        <lista class="lista"/>
          <v-flex shrink>
     
          
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>





</template>



<script>
import cards from "../../components/dashboard/cards.vue"
import lista from "../adm/usuarios/lista.vue" 

 export default {
    name:'dashboard',
    components:{
        cards,lista
    }, 
  
    theme: { dark: true },
  data: () => ({
    drawer: null,
  })





 }
</script>
<style scoped>
.alinhar{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto
}
#btn{
display: flex;
justify-content: left;
}
.lista{
  grid-column: 1/5;
  grid-row: auto;
  margin-top: 25px;
}

.btn{
  grid-row: 1/2;
  grid-column: 1/2;
  margin-top: -137px;
  width: 56%;
}

</style>