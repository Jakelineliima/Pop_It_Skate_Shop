<template>
  <div class="tenis gridtenis">
    <appheader class="menu"/>
    <img
      class="banner"
      src="../assets/imagens/Banner Tenis.jpg" longDesc="Banner da pagina de Tênis com um homem sentado com uma skate de frente para o mar. "/>

    <cardtenis class="card" />
    <div class="txt">
      <p> Todo o conforto e estilo que seus pés merecem com um preço que cabe no seu bolso.
        <br> <strong>  Pop-It
</strong>,sua loja online , sempre pensando no seu conforto.

</p>
    </div>
    <rodape class="rodape"/>
  </div>
</template>

<style scoped>
.gridtenis {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}
.tenis {
  grid-column: 1/4;
}
.menu{
  grid-column: 1/4;
}

.banner {
  grid-column: 1/4;
  width: 100%;
}

.card {
  grid-column: 1/4;
  grid-row: 6/7;
  margin-top: 20px;
}

.txt {
  grid-column: 1/4;
  grid-row: 7/8;
  text-align: center;
  padding: 57px;
  font-size: 18px;
}
.rodape{
  grid-column: 1/4;
  grid-row: 8/9;
}
@media(max-width: 924px){
  .txt{
    text-align: inherit;
  }
}
@media(max-width: 800px){
  .banner{
      margin-top: 55px;
      width: 100%;
  }
} 

@media(max-width: 300px){
  .txt{
    text-align: inherit;
  }
}
</style>


<script>
// @ is an alias to /src

import cardtenis from "../components/cards/cardtenis.vue";
import appheader from "../components/appheader.vue"
import rodape from "../components/rodape.vue"

export default {
  name: "tenis",
  components: {
    cardtenis,appheader,rodape
    
  },
   
   metaInfo: {
    // Children can override the title.
    title: "Tênis a Pop-It",
    titleTemplate: "Tênis <- Pop-It",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      {
        name: "description",
        content:
          "Pop-it Skate shop é uma loja fundada em Itápolis com o intuito de proporcionando comodidade e conforto aos clientes.Todo o conforto e estilo que seus pés merecem com um preço que cabe no seu bolso."
      }
    ]
  }
};
</script>
