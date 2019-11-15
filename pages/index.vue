<template>
  <div class="home gridhome">  
<appheader class="menu"/>
    <img
      class="banner"
      src="../components/imagens/Banner inicial.jpg" longDesc="Skate Park com varias pessoas andando de skate e conversando"/>

    <card class="card" />
    <div class="txt">
      <p>
        Na <strong>Pop-It</strong> você encontra os melhores produtos com descontos e marcas que você procura.
        <br>
        <br>
        <strong>Skates, Roupas, Tênis e Acessórios Pop It</strong>
      </p>

  
    </div>
  </div>

</template>

<style scoped>

.gridhome {
  display: grid;
  grid-template-columns: 1fr  1fr  1fr ;
  grid-template-rows: auto;
  
}

.menu{
  grid-column: 1/4;
  
 

}

.banner {
  grid-column: 1/4;
  grid-row: 2/3;
  width: 100%;
  display: flex;
  justify-content: center
}

.card {
  grid-column: 1/4;
  grid-row: 6/7;
  margin-top: 20px;
}

.txt{
  grid-column: 1/4;
  grid-row: 7/8;
  text-align: center;
  padding: 57px;
  font-size: 18px;
}
@media(max-width: 924px){
  .txt{
    text-align: inherit;
  }
}
@media(max-width: 800px){
  .banner{
      margin-top: -4%;
      width: 100%;
  }
} 

@media(max-width: 360px){
  .banner{
   margin-top: 0;
  }
  .txt{
    text-align: inherit;
  }
}

</style>


<script>
// @ is an alias to /src
import appheader from "../components/appheader.vue"
import card from "../components/cards/card.vue";

export default {
  name: "home",
  components: {
    card,appheader
  }
};
</script>
