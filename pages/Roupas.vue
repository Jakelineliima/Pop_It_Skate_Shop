<template>
  <div class="roupas gridroupas">
    <appheader class="menu"/>
    <img
      class="banner"
      src="../assets/imagens/Banner Roupas.jpg" longDesc="Dois homens andando de skate um esta fazendo manobra e o outro esta srrindo com o skate na mão"/>

    <cardroupa class="card" />
    <div class="txt">
     <p>Você sempre confortável de onde estiver com os produtos da <strong>Pop-It Itápolis</strong> </p>
    </div>
    <rodape class="rodape"/>
  </div>
</template>


<style scoped>
.gridroupas {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}
.roupas {
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
    text-align: justify
  }
}
@media(max-width: 800px){
  .banner{
  margin-top: 55px;
  }
}
</style>

<script>
import cardroupa from "../components/cards/cardroupa.vue"
import appheader from "../components/appheader.vue"
import rodape from "../components/rodape.vue"

export default {
    name:"roupas",
    components: {
        cardroupa,appheader,rodape
    },
    
   metaInfo: {
    // Children can override the title.
    title: "Roupas Pop-It",
    titleTemplate: "Roupas <- Pop-It",
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
          "Você sempre confortável de onde estiver com os produtos da Pop-It Itápolis"
      }
    ]
  }
}
</script>