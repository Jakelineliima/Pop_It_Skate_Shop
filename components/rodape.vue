<template>
  <v-footer padless dark>
    <v-card class="flex" flat tile>
      <v-card-title class="dark rodape">
        <strong class="subheading">Av. Capitão Venâncio N° 1553 Centro Itápolis-SP</strong>

        <v-spacer></v-spacer>
        <dropdown />
        <v-spacer></v-spacer>
        <div class="social">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </div>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>Pop-It Skate Shop sua skate shop on-line</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
import dropdown from "./dropdown.vue";
export default {
  name: "rodape",
  components: {
    dropdown
  },
  data: () => ({
    icons: ["mdi-facebook", "mdi-linkedin", "mdi-instagram", "mdi-whatsapp"]
  })
};
</script>
<style scoped>
.rodape {
  background: #000;
}
@media (max-width: 850px) {
  .rodape {
    display: flex;
    flex-direction: column;
  }

  .social {
    display: flex;
    flex-direction: row;
  }
}
</style>