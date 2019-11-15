<template>
  <div class="roupas gridroupas">
    <appheader class="menu"/>
    <img
      class="banner"
      src="../components/imagens/Banner Roupas.jpg" longDesc="Um jovem andando de skate em um lugar abandonado"/>

    <cardroupa class="card" />
    <div class="txt">
     <p>Você sempre confortável de onde estiver com os produtos da <strong>Pop-It Itápolis</strong> </p>
    </div>
    
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
import cardroupa from "../components/cards/cardroupa.vue"
import appheader from "../components/appheader.vue"
export default {
    name:"roupas",
    components: {
        cardroupa,appheader
    }
}
</script>