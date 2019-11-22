<template>
  <main>
    <h1>Acessórios</h1>

    <section class="cards" id="card">
      <div class="card1 aligncard">
        <img
          width="168px"
          src="../../assets/imagens/Boné Dgk.jpg"
          alt="Bóne DGK Cinza com o logo desenhada,logo escrito dgk"
        />
        <h2>Bóne DGK</h2>
        <p>
          Bóne DGK Past Time
          <br />
        </p>
        <h2>R$ 50,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>

      <div class="card2 aligncard" id="card2">
        <img
          width="197px"
          src="../../assets/imagens/Bone Grizzly X.jpg"
          alt="Bóne Grizzly Preto com o logo desenhado, logo é um urso branco "
        />
        <h2>Bóne Grizzly</h2>
        <p>
          Bóne Grizzly X
          <br />
        </p>
        <h2>R$ 48,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>

      <div class="card3 aligncard">
        <img
          width="197px"
          src="../../assets/imagens/Bone Thrasher.jpg"
          alt="Bóne Thrasher Com o Logo desenhado, logo escrito Thrasher pegando fogo"
        />
        <h2>Bóne Thrasher</h2>
        <p>
          Bóne Thrasher Logo
          <br />
        </p>
        <h2>R$ 57,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>
    </section>

    <section class="cards2">
      <div class="card4 aligncard">
        <img
          class="imgskt"
          src="../../assets/imagens/Meia DGK.jpg"
          alt="Meia ate a canela camuflagem colorida"
        />
        <h2>Meia DGK</h2>
        <p>
          Meia DGK General Crew
          <br />
        </p>
        <h2>R$ 20,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>

      <div class="card5 aligncard">
        <img
          class="imgskt"
          src="../../assets/imagens/Meia Nike SB.jpg"
          alt="Meia ate a canela camuflagem em marrom, cinza e verde escuro"
        />
        <h2>Meia Nike</h2>
        <p>
          Meia Nike SB Energy
          <br />
        </p>
        <h2>R$ 45,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>

      <div class="card6 aligncard">
        <img
          class="imgskt"
          src="../../assets/imagens/Touca Indepent.jpg"
          alt="Touca preta com a logo desenhada"
        />
        <h2>Touca Independent</h2>
        <p>
          Touca Independent Cross
          <br />
        </p>
        <h2>R$ 36,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>
    </section>

    <h1>OUTROS PRODUTOS</h1>

    <section class="cards3">
      <div class="card7 aligncard">
        <img width="198px" src="../../assets/imagens/Relogio G-Shok gst.jpg" alt="Relógio prata " />
        <h2>Relógio G-Shock</h2>
        <p>
          Relógio G-Shock Gts
          <br />
        </p>
        <h2>R$ 1165,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>

      <div class="card8 aligncard">
        <img width="198px" src="../../assets/imagens/Relogio G-Shok.jpg" alt="Relógio preto" />

        <h2>Relógio G-Shock</h2>
        <p>
          Relógio G-Shock GA 720GB
          <br />
        </p>
        <h2>R$ 1200,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>

      <div class="card9 aligncard">
        <img
          width="198px"
          src="../../assets/imagens/Relogio casio.jpg"
          alt="Relogio dourado de correia fina"
        />
        <h2>Relógio Casio</h2>
        <p>
          Relógio Casio Iluminator
          <br />
        </p>
        <h2>R$ 900,00</h2>
        <v-btn class="btn" color="#000">Comprar</v-btn>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "cardacessorios"
};
</script>


<style scoped>
main {
  height: 100%;
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

  .imgskt {
    width: 100%;
    height: auto;
  }

  .card2 img {
    width: 80%;
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
    width: 56%;
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
