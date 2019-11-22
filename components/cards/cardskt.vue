<template>
  <main>
    <h1>Shapes</h1>

    <section class="cards" id="card">
      <div class="card1 aligncard">
        <img
          class="imgskt"
          src="../../assets/imagens/shape1.png"
          alt="Shape de skate com o nome do Skatista Luan de Oliveira"
        />
        <h2>Shape Flip</h2>
        <p>
          Shape Flip
          <br />Luan de Oliveira - 8.0"
        </p>
        <h2>R$ 300,00</h2>
        <v-btn class="btn" width="168" color="#000">Comprar</v-btn>
      </div>

      <div class="card2 aligncard" id="card2">
        <img
          class="imgskt"
          src="../../assets/imagens/shape2.png"
          alt="Shape de skate cor rosa desenhada uma mão com boca"
        />
        <h2>Shape Santa Cruz</h2>
        <p>
          Shape Santa Cruz
          <br />Rock Hand Pink - 7.9"
        </p>
        <h2>R$ 185,00</h2>
        <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
      </div>

      <div class="card3 aligncard">
        <img
          class="imgskt"
          src="../../assets/imagens/shape3.png"
          alt="Shape de skate desenhado uma mão com boca azul"
        />
        <h2>Shape Santa Cruz</h2>
        <p>
          Shape Santa Cruz
          <br />Hand Wood 7.8"
        </p>
        <h2>R$ 89,00</h2>
        <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
      </div>
    </section>

    <section class="cards2">
      <div class="card4 aligncard">
        <img
          class="imgskt"
          src="../../assets/imagens/shape4.png"
          alt="Shape de skate cor rosa com o nome Cisco escrito"
        />
        <h2>Shape Cisco</h2>
        <p>
          Shape Cisco
          <br />FN + R Logo 7.9"
        </p>
        <h2>R$ 200,00</h2>
        <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
      </div>

      <div class="card5 aligncard">
        <img
          class="imgskt"
          src="../../assets/imagens/shape5.png"
          alt="Shape de skate com uma caveira com capuz desenhada"
        />
        <h2>Shape Santa Cruz</h2>
        <p>
          Shape Santa Cruz
          <br />Caveiras 7.9"
        </p>
        <h2>R$ 135,00</h2>
        <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
      </div>

      <div class="card6 aligncard">
        <img
          class="imgskt"
          src="../../assets/imagens/shape6.png"
          alt="Shape de skate escrito em preto skate"
        />
        <h2>Shape Progress</h2>
        <p>
          Shape Progress
          <br />Skate PGS 8.0"
        </p>
        <h2>R$ 120,00</h2>
        <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
      </div>
    </section>

    <h1>OUTROS PRODUTOS</h1>

    <section class="cards3">
      <div class="card7 aligncard">
        <img
          class="imgskt"
          src="../../assets/imagens/Truck Crail Netozzila.jpg"
          alt="Truck de skate azul e branco"
        />
        <h2>Truck Crail</h2>
        <p>
          Truck Crail
          <br />Netozzila 122MM
        </p>
        <h2>R$ 365,00</h2>
        <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
      </div>

      <div class="card8 aligncard">
        <img
          class="imgskt"
          src="../../assets/imagens/Truck Danilo.jpg"
          alt="Truck de skate com as cores verde vermelho e amarelo escrito Danilo Danti"
        />

        <h2>Truck Danillo Dante</h2>
        <p>
          Truck Danillo Dante
          <br />Reggae 129MM
        </p>
        <h2>R$ 200,00</h2>
        <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
      </div>

      <div class="card9 aligncard">
        <img
          class="imgskt"
          src="../../assets/imagens/Truck thrasher.jpg"
          alt="Truck de skate escrito Thrasher"
        />
        <h2>Truck Independent</h2>
        <p>
          Truck Independent
          <br />Thrasher Grid
        </p>
        <h2>R$ 480,00</h2>
        <v-btn class="btn" color="#000" width="168">Comprar</v-btn>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "cardskt"
};
</script>


<style scoped>
main {
  text-align: center;
  font-size: 13px;
}
.btn {
  color: #fff;
  width: 168px;
}

.cards2 {
  margin-top: 43px;
}

.cards,
.cards2,
.cards3 {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.aligncard {
  display: flex;
  flex-direction: column;
  width: 248px;
  padding: 10px 0 10px;
  align-items: center;
  box-shadow: #18181a 0px 0 10px -2px;
}

.imgskt {
  width: 100%;
  height: 207px;
}

h2 {
  color: #000;
}

h1 {
  padding: 10px;
}

@media (max-width: 980px) {
  .cards,
  .cards2,
  .cards3 {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
}
@media (max-width: 599px) {
  .cards,
  .cards2,
  .cards3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .aligncard {
    margin: 8px;
  }
  @media (max-width: 360px) {
    h1 {
      padding: 0;
      font-size: 21px;
    }
    .cards img,
    .cards2 img,
    .cards3 img {
      width: 100%;
    }
    .btn {
      width: 88%;
    }
    .imgskt {
      width: 100%;
    }
  }
}
@media (max-width: 760px) {
  .card3,
  .card6,
  .card9 {
    margin-top: 28px;
  }
}
</style>
