<template>
  <main>
    <h1>Roupas</h1>
    
    <section class="cards" id="card">
      <div class="card1 aligncard">
        <img 
          class="imgskt"
          src="../imagens/Calça Dc Shoes.jpg"
          alt="Metade do corpo de um homen usando uma calça preta com a mão no bolso"
        />
        <h2>Calça DC</h2>
        <p>
          Calça DC SHOES
          <br />
        </p>
        <h2>R$ 79,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>

      <div class="card2 aligncard" id="card2">
        <img
          class="imgskt"
          src="../imagens/Calça Indepent Fit Proud.jpg"
          alt="Metade do corpo de um homen usando uma calça caqui"
        />
        <h2>Calça Independent</h2>
        <p>
          Calça Independent Fit Proun
          <br />
        </p>
        <h2>R$ 68,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>

      <div class="card3 aligncard">
        <img
          class="imgskt"
          src="../imagens/Calça Moleton.jpg"
          alt="Calça de moleton cor cinza"
        />
        <h2>Calça Matriz</h2>
        <p>
          Calça Matriz Moleton
          <br />
        </p>
        <h2>R$ 55,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>
    </section>

    <section class="cards2">
      <div class="card4 aligncard">
        <img class="imgskt" src="../imagens/camiseta grizzly.jpg" alt="Camiseta preta com um urso psicodelico desenhada" />
        <h2>Camiseta Grizzly</h2>
        <p>
          Camiseta Grizzly Psicodelic
          <br />
        </p>
        <h2>R$ 20,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>

      <div class="card5 aligncard">
        <img
          class="imgskt"
          src="../imagens/Camiseta Nomad.jpg"
          alt="Camista preta desenhada em um circulo um homem e um camelo passando por uma cidade deserta"
        />
        <h2>Camiseta Nommad</h2>
        <p>
          Camiseta Nommad XV
          <br />
        </p>
        <h2>R$ 45,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>

      <div class="card6 aligncard">
        <img
          class="imgskt"
          src="../imagens/Camiseta Thrasher Flame.jpg"
          alt="Camiseta preta escrita Thrasher como se tivesse pegando fogo"
        />
        <h2>Camiseta Thrasher</h2>
        <p>
          Camiseta Thrasher Flame
          <br />
        </p>
        <h2>R$ 65,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>
    </section>

    <h1>OUTROS PRODUTOS</h1>

    <section class="cards3">
      <div class="card7 aligncard">
        <img
          class="imgskt"
          src="../imagens/Regata Dc Shoes Combo.jpg"
          alt="Um homem usando uma regata de onça pintada "
        />
        <h2>Regata DC</h2>
        <p>
          Regata DC SHOES Onça
          <br />
        </p>
        <h2>R$ 25,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>

      <div class="card8 aligncard">
        <img
          class="imgskt"
          src="../imagens/Regata Matriz Barra.jpg"
          alt="Um homem usando uma regata preta"
        />

        <h2>Regata Matriz</h2>
        <p>
          Regata Matriz Barra
          <br />
        </p>
        <h2>R$ 10,00</h2>
        <v-btn class="btn" color="#000" >Comprar</v-btn>
      </div>

      <div class="card9 aligncard">
        <img
          class="imgskt"
          src="../imagens/Shorts Rvca.png"
          alt="Shorts vermelho com umas folhas psicodelica desenhada"
        />
        <h2>Shorts RVCA</h2>
        <p>
          Shorts RVCA Trunk Vermelha
          <br />
        </p>
        <h2>R$ 21,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "cardroupas"
};
</script>


<style scoped>main{
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
  height: 248px; 
}
/*
.card{
  height: 399px;

}*/

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
