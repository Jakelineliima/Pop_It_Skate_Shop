<template>
  <div class="sobre gridsobre">
    <Appheader class="menu"/>
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

    <img class="video" src="../assets/imagens/Imagem 1.jpg" alt="Imagen do video " />
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
@media (max-width: 924px) {
  .txt {
    text-align: inherit;
  }
}
@media (max-width: 800px) {
  .banner {
    margin-top: -4%;
  }
}


</style>


<script>
import appheader from "../components/Appheader.vue"

export default {
  name: "quemsomos",
  components:{
Appheader
  }
  
};
</script>
