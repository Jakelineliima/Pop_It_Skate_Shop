<template>
  <div class="skate gridskate">
    <appheader class="menu" />
    <img class="banner" src="../assets/imagens/Banner Skate.jpg" alt="banner da pagina inicial" />
    <cardskt class="card" />

    <div class="txt">
      <p>Você sempre com as melhores peças pro seu skate pelo menor preço.</p>
      <br />
      <strong>Pop-It Skate Shop sua loja online.</strong>
    </div>
    <rodape class="rodape" />
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
  .banner {
    margin-top: 55px;
  }
}
</style>


<script>
// @ is an alias to /src

import cardskt from "../components/cards/cardskt.vue";
import appheader from "../components/appheader.vue";
import rodape from "../components/rodape.vue";
export default {
  name: "home",
  components: {
    cardskt,
    appheader,
    rodape
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
          "Você sempre com as melhores peças pro seu skate pelo menor preço. Pop-It Skate Shop sua loja online"
      }
    ]
  }
};
</script>
