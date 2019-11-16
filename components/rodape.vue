<template>
  <v-footer color="#000">
    <v-col cols="12">
      <v-card color="#fff" class="txtrodape">
        <p class="text-center pt-2">Av. Capitão Venancio N° 1558 Centro Itápolis-SP</p>
      </v-card>
      <div class="d-flex justify-space-around align-items-center rodape">
        <div class="dropbtn">
          <dropdown />
        </div>

        <v-card color="#000" class="social">
          <v-card-title class="titulo">Redes Sociais</v-card-title>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Whatsapp</a>
        </v-card>
      </div>
    </v-col>
  </v-footer>
</template>

<script>
import dropdown from "../components/dropdown.vue";
export default {
  name: "rodape",
  components: {
    dropdown
  }
};
</script>
<style scoped>
.dropbtn {
  margin-top: 24px;
}

.social,
.social a {
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

@media (max-width: 360px) {
  .rodape {
    flex-wrap: wrap;
  }

  .txtrodape {
    height: 70px;
  }
}
</style>