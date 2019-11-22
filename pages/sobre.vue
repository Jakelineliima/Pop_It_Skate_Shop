<template>
  <div class="sobre gridsobre">
    <appheader class="menu"/>
    <img
      class="banner"
      src="../assets/imagens/Banner Sobre.jpg"
      longdesc="Homem andando de skate em um pista cercada por neve"
    />

    <div class="txt">
      <h2>UM POUCO SOBRE A POP-IT SKATE SHOP</h2>
      <p>
        Pop-it Skate shop é uma loja fundada em Itápolis com o intuito de
        proporcionando comodidade e conforto aos clientes.
        <br />
        <br />Oferecemos varias marcas e modelos de roupas, tênis, acessórios e
        também várias marcas e modelo para o seu skate.
      </p>
      <h2>Pop-It sua skate shop Online de onde estiver.</h2>
    </div>

    <video class="video" src="../assets/imagens/Pop-It Skate Shop.mp4"></video>
    <rodape class="rodape"/>
  </div>
</template>

<style scoped>
.gridsobre {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}
.sobre {
  grid-column: 1/4;
}
.menu{
  grid-column: 1/4;
 

}
.banner {
  grid-column: 1/4;
  width: 100%;
}

.video {
  grid-column: 1/4;
  grid-row: 7/8;
  width: 50%;
  margin-left: 24%;
  margin-bottom: 8%;
}
.txt {
  grid-column: 1/4;
  grid-row: 6/7;
  text-align: center;
  padding: 57px;
  font-size: 17px;
}
.rodape{
  grid-column: 1/4;
  grid-row: 8/9;
}
@media (max-width: 924px) {
  .txt {
    text-align: inherit;
  }
}
@media (max-width: 800px) {
  .banner {
    margin-top: 55px;
  }
}


</style>


<script>
import appheader from "../components/appheader.vue"
import rodape from "../components/rodape.vue"
export default {
  name: "quemsomos",
  components:{
appheader,rodape
  },
  
   
   metaInfo: {
    // Children can override the title.
    title: "Sobre a Pop-It",
    titleTemplate: "Sobre a <- Pop-It",
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
          "Pop-it Skate shop é uma loja fundada em Itápolis com o intuito de proporcionando comodidade e conforto aos clientes. "
      }
    ]
  }
  
};
</script>
