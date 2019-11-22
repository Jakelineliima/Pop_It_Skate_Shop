<template >
  <div class="home gridhome">
    <appheader class="menu" />
    <img
      class="banner"
      src="../assets/imagens/Banner inicial.jpg"
      longdesc="Mulher Jovem andando de longboard em uma pista com pequenas montanhas"
    />

    <card class="card" />
    <div class="txt">
      <p>
        Na
        <strong>Pop-It</strong> você encontra os melhores produtos com descontos e marcas que você procura.
        <br />
        <br />
        <strong>Skates, Roupas, Tênis e Acessórios Pop It</strong>
      </p>
    </div>
    <rodape class="rodape" />
  </div>
</template>

<style scoped>
.gridhome {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}

.menu {
  grid-column: 1/4;
}

.banner {
  grid-column: 1/4;
  grid-row: 2/3;
  width: 100%;
  display: flex;
  justify-content: center;
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
.rodape {
  grid-column: 1/4;
  grid-row: 8/9;
}
@media (max-width: 924px) {
  .txt {
    text-align: inherit;
  }
  .banner{
    margin-top: 55px;
  }
}
@media (max-width: 800px) {
  .banner {
    width: 100%;
  }
}

@media (max-width: 360px) {
  .banner {
    margin-top: 55px;
  }
  .txt {
    text-align: inherit;
  }
}
</style>


<script>
// @ is an alias to /src
import appheader from "../components/appheader.vue";
import card from "../components/cards/card.vue";
import rodape from "../components/rodape.vue";

export default {
  name: "home",
  components: {
    card,
    appheader,
    rodape
  },
   metaInfo: {
    // Children can override the title.
    title: "Inicio Pop-It",
    titleTemplate: "Inicio<- Pop-It",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "Na Pop-It você encontra os melhores produtos com descontos e marcas que você procura. Skates, Roupas, Tênis e Acessórios Pop It"
      },
    
    ]
  }
};
</script>
