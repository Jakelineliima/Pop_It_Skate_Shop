<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped color="#000">
      <v-list>
     

        <v-list-item @click to="/adm/usuarios/lista">
          <v-list-item-action>
            <v-icon color="#fff">mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Lista de usuarios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      
        <v-list-item @click to="/">
          <v-list-item-action>
            <v-icon color="#fff">mdi-arrow-left-thick </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Voltar ao site</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left class="d-flex justify-contend-around" color="#000">
      <v-app-bar-nav-icon color="#fff" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="menudash">
        <v-toolbar-title class="white--text txt">Painel Administrativo - Pop-It Skate Shop</v-toolbar-title>
        <v-btn to="/" color="#fff" class="btn">
          <v-icon to="/index">mdi-reply</v-icon>
          <p>Voltar para o site.</p>
        </v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center class="alinhar">
          <h3>Bem vindo ao painel administrativo do site Pop-It</h3>
          <cards />

          <lista class="lista" />
          <v-flex shrink></v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer app color="#000">
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import cards from "../../components/dashboard/cards.vue";
import lista from "../adm/usuarios/lista.vue";

export default {
  name: "dashboard",
  components: {
    cards,
    lista
  },
  theme: { dark: true },
  data: () => ({
    drawer: null
  })
};
</script>
<style scoped>
.alinhar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}
#btn {
  display: flex;
  justify-content: left;
}
.lista {
  grid-column: 1/4;
  grid-row: auto;
  margin-top: 25px;
}

.btn {
  width: 40%;
}

.btnvoltar{
  display: none;
}

.menudash {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
h3 {
  text-align: center;
  grid-column: 2/5;
  grid-row: 1/2;

}
@media (max-width: 800px) {
  .alinhar {
    display: flex;
    flex-wrap: wrap;
    margin-top: 11px;
  }
  h3{
    padding: 27px;
  }
  .txt{
    font-size: 15px;
  }
  .btn{
    grid-row:2/3;
  }
}
@media(max-width:560px){
  .btn{
    display: none;
  }
  .btnvoltar{
    display: block;
  }
}
@media (max-width: 360px) {
  .lista {
    margin: 0;
  }
  .menudash{
    flex-direction: column;
  }
  
 
}
</style>