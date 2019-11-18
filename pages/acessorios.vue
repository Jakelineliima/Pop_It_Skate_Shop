<template>
  <div class="acessorios gridacessorios">
    <appheader class="menu"/>
    <img
      class="banner"
      src="../components/imagens/Banner acessorios.jpg" longDesc="Skate Park com varias pessoas andando de skate e conversando"/>

    <cardacessorio class="card" />
    <div class="txt">
      <p>
        Na <strong>Pop-It</strong> você encontra acessórios com os melhores preços.
  
      </p>
    </div>
    <rodape class="rodape"/>
  </div>
</template>

<style scoped>
.gridacessorios {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}
.acessorios {
  grid-column: 1/4;
}
.menu{
  grid-column: 1/4;
}

.rodape{
  grid-column: 1/4;
  grid-row: 8/9;
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
@media(max-width: 924px){
  .txt{
    text-align: justify
  }
}
@media(max-width: 800px){
  .banner{
  margin-top: 4%;
  }
 
  
}

</style>


<script>
// @ is an alias to /src

import cardacessorio from "../components/cards/cardacessorio.vue";
import appheader from "../components/appheader.vue"
import rodape from "../components/rodape.vue"

export default {
  name: "acessorios",
  components: {
    cardacessorio,
    appheader,rodape
  }
};
</script>
