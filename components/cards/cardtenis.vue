<template>
<main >

  <h1>Tênis</h1>

  <section class="cards" id="card">

   <div class="card1 aligncard">
    <img  class="imgskt" src="../../assets/imagens/tenis Nike Sb.jpg" alt="Tênis Nike preto" />
    <h2>Tênis Nike</h2>
    <p>
      Tênis Nike SB Air
      <br />
    </p>
    <h2>R$ 300,00</h2>
    <v-btn class="btn" width="168" color="#000">Comprar</v-btn>
  </div> 
 
  <div class="card2 aligncard" id="card2">
    <img class="imgskt" src="../../assets/imagens/Tenis Stefan.jpg" alt="Tênis Nike com textura de pele de cobra" />
    <h2>Tênis Nike SB</h2>
    <p>
      Tênis Nike SB Stevan Janovsky
      <br />
    </p>
    <h2>R$ 148,00</h2>
    <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
  </div>

   <div class="card3 aligncard">
    <img width="224px" class="imgskt" src="../../assets/imagens/Tenis team.jpg" alt="Tênis Nike branco" />
    <h2>Tênis Nike</h2>
    <p>
       Tênis Nike SB Teen Classic
      <br />
    </p>
    <h2>R$ 190,00</h2>
    <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
  </div>

  </section>

   <section class="cards2">
     
    <div class="card4 aligncard">
    <img class="imgskt" src="../../assets/imagens/Tenis Nike Zoom.jpg" alt="Tênis Nike preto com o simbolo branco" />
    <h2>Tênis Nike </h2>
    <p>
      Tênis Nike SB Zoom
      <br />
    </p>
    <h2>R$ 150,00</h2>
  <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
  </div>

  <div class="card5 aligncard">
    <img width="220px" class="imgskt" src="../../assets/imagens/Tenis vans c.jpg" alt="Tênis vans vermelho" />
    <h2>Tênis Vans</h2>
    <p>
      Tênis Vans Confycush
      <br />
    </p>
    <h2>R$ 145,00</h2>
    <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
  </div>

  <div class="card6 aligncard">
    <img width="208px" class="imgskt" src="../../assets/imagens/Tenis sk8.jpg" alt="Tênis vans preto de cano alto" />
    <h2>Tênis Vans</h2>
    <p>
       Tênis Vans UA Sk8 
      <br />
    </p>
    <h2>R$ 100,00</h2>
    <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
  </div>

  </section>

  <h1>OUTROS PRODUTOS</h1>

  <section class="cards3">
      <div class="card7 aligncard">
    <img width="192px" class="imgskt" src="../../assets/imagens/Tenis dc shoes.jpg" alt="tênis DC com um tom azulado" />
    <h2>Tênis DC</h2>
    <p>
      Tênis DC Shoes Heatrow
      <br />
    </p>
    <h2>R$ 100,00</h2>
    <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
  </div>

  <div class="card8 aligncard">
    <img width="213px" class="imgskt" src="../../assets/imagens/Tenis dc.jpg" alt="Tênis DC preto de camurça" />
   
    <h2>Tênis DC</h2>
    <p>
      Tênis DC Camurça
      <br />
    </p>
    <h2>R$ 100,00</h2>
    <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
  </div>

  <div class="card9 aligncard">
    <img width="210px" class="imgskt" src="../../assets/imagens/Tenis hocks evo.jpg" alt="Tênis Hocks cor de rosa claro" />
    <h2>Tênis Hocks</h2>
    <p>
     Tênis Hocks
      <br />
    </p>
    <h2>R$ 100,00</h2>
    <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
  </div>

  </section>
   
</main>
 
</template>
<script>

export default {
  name: "cardtenis",

};

</script>


<style scoped>

main{
  height: 100%;
  text-align: center;
  font-size: 13px; 
  }
.btn{
  color: #fff;
}

.cards2{
  margin-top: 43px;
}

.cards,.cards2,.cards3 {
  display: flex;
  flex-direction: row;
 justify-content: space-evenly;
}

.aligncard{
  display:flex;
  flex-direction: column;
  width: 248px;
  padding: 10px 0 10px;
  align-items: center;
  box-shadow: #18181A 0px 0 10px -2px;
}

.imgskt{
  width: 100%;
  height: 207px;  
}
h2 {
  color: #000;
}



h1{
  padding: 10px;
}

@media (max-width: 980px) {
 
   .cards,.cards2,.cards3{
     display:flex;
     flex-wrap: wrap;
     align-items: center;
     
   }

 
  .imgskt{
    width: 100%;
  }
}
@media (max-width:599px){
  .cards,.cards2,.cards3{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .aligncard{
  
    margin: 8px;
  }
  @media(max-width:250px){
    h1{
      padding: 0;
      font-size: 21px;
    }
  }
}
</style>
