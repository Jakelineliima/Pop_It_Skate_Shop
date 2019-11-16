<template>
  <div class="skate gridskate">
    <Appheader class="menu" />
    <img class="banner" src="../assets/imagens/Banner Skate.jpg" alt="banner da pagina inicial" />
    <cardskt class="card" />

    <div class="txt">
      <p>Você sempre com as melhores peças pro seu skate pelo menor preço.</p>
      <br />
      <strong>Pop-It Skate Shop sua loja online.</strong>
    </div>
    <footer />
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
}

.card {
  margin-top: 20px;
}

.txt {
  grid-column: 1/4;
  grid-row: 7/8;
  text-align: center;
  padding: 57px;
  font-size: 18px;
}
@media (max-width: 924px) {
  .txt {
    text-align: inherit;
  }
}
@media (max-width: 800px) {
  .banner {
    margin-top: 4%;
  }
}
</style>


<script>
// @ is an alias to /src

import cardskt from "../components/cards/cardskt.vue";
import Appheader from "../components/Appheader.vue";
import rodape from "../components/rodape.vue";
export default {
  name: "home",
  components: {
    cardskt,
    Appheader,
    rodape
  }
};
</script>
