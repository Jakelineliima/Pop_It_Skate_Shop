<template>
<main >

  <h1>LANÇAMENTOS</h1>

  <section class="cards" id="card">

   <div class="card1 aligncard">
    <img class="imgskt" src="../imagens/shape11.png" alt="Shape de skate com uma lamborguine desenhada" />
    <h2>Shape Element</h2>
    <p>
      Shape Element
      <br />Nijah Gold
    </p>
    <h2>R$ 500,00</h2>
    <v-btn class="btn" color="#000">Comprar</v-btn>
  </div> 
 
  <div class="card2 aligncard" id="card2">
    <img class="imgskt" src="../imagens/camiseta2.png" alt="Camiseta Elemente cinza com uma arvore andando de skate" />
    <h2>Camiseta Element</h2>
    <p>
      Camiseta Element
      <br />Natureza radical
    </p>
    <h2>R$ 48,00</h2>
    <v-btn class="btn" color="#000" >Comprar</v-btn>
  </div>

   <div class="card3 aligncard">
    <img class="imgskt" src="../imagens/thrasher-magazine-.png" alt="Camiseta Thrasher Ande de skate e va para a prisão" />
    <h2>Camiseta Thrasher</h2>
    <p>
       Camiseta Thrasher 
      <br />Vá para a prisão
    </p>
    <h2>R$ 89,00</h2>
    <v-btn class="btn" color="#000" >Comprar</v-btn>
  </div>

  </section>

   <section class="cards2">
     
    <div class="card4 aligncard">
    <img class="imgskt" src="../imagens/camiseta RVCA.png" alt="Camiseta branca da marca RVCA" />
    <h2>Camiseta RVCA</h2>
    <p>
      Camiseta RVCA 
      <br />Branca algodão
    </p>
    <h2>R$ 50,00</h2>
  <v-btn class="btn" color="#000" >Comprar</v-btn>
  </div>

  <div class="card5 aligncard">
    <img class="imgskt" src="../imagens/bermuda1.png" alt="Bermuda Listrada de tons de laranja e azul" />
    <h2>Bermuda RVCA</h2>
    <p>
      Bermuda RVCA
      <br />Dias de verão
    </p>
    <h2>R$ 35,00</h2>
    <v-btn class="btn" color="#000" >Comprar</v-btn>
  </div>

  <div class="card6 aligncard">
    <img class="imgskt" src="../imagens/shape12.png" alt="Shape de skate DGK com Logo desenhada" />
    <h2>Shape DGK Logo</h2>
    <p>
      Shape DGK
      <br />Dirty Chetto Kids
    </p>
    <h2>R$ 120,00</h2>
    <v-btn class="btn" color="#000" >Comprar</v-btn>
  </div>

  </section>

  <h1>OUTROS PRODUTOS</h1>

  <section class="cards3">
      <div class="card7 aligncard">
    <img class="imgskt" src="../imagens/rolamento.png" alt="Oito Rolamentos de skate vermelhos " />
    <h2>Kit 8 rolamentos</h2>
    <p>
      Rolamentos Black Star
      <br />Hardware - ABEC 9
    </p>
    <h2>R$ 65,00</h2>
    <v-btn class="btn" color="#000">Comprar</v-btn>
  </div>

  <div class="card8 aligncard">
    <img class="imgskt" src="../imagens/tenis.png" alt="Tenis branco da Adidas com linhas pretas" />
   
    <h2>Tênis Adidas</h2>
    <p>
      Tênis Adidas Skateboard
      <br />Lucas Premiere White
    </p>
    <h2>R$ 169,00</h2>
    <v-btn class="btn" color="#000" >Comprar</v-btn>
  </div>

  <div class="card9 aligncard">
    <img class="imgskt" src="../imagens/blusa.png" alt="Blusa de frio vermelha branca e preta Adidas" />
    <h2>Moleton Adidas</h2>
    <p>
     Blusa de Moleton Adidas
      <br />FZ-HOOD 
    </p>
    <h2>R$ 180,00</h2>
    <v-btn class="btn" color="#000">Comprar</v-btn>
  </div>

  </section>
   
</main>
 
</template>
<script>
export default {
  name: "card",

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
  width: 168px;
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
    height: auto;
  }

  .card2 img{
    width: 80%
  }
}
@media (max-width:599px){
  .cards,.cards2,.cards3{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .aligncard{
    width: 56%;
    margin: 8px;
  }
  @media(max-width:360px){
    h1{
      padding: 0;
      font-size: 21px;
    }
    .cards img,.cards2 img, .cards3 img{
      width: 100%
    }
    .btn{
      width: 88%;
    }
    .imgskt{
      width: 100%;
    }
  }
}
@media (max-width: 760px) {
    .card3,.card6,.card9{
    margin-top: 28px;
  }
}
</style>
