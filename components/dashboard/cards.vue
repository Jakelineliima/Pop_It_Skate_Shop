<template>
    <v-card
      class="mx-auto"
      max-width="400"
    >
     
     
  
      <v-card-title class="pb- text-center">Adicionar produtos</v-card-title>
  
      <v-card-text class="text--primary">
        <div></div>
  
        <div>Adicione seus produtos novos</div>
      </v-card-text>

       <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      > </v-img>
        
  
      <v-card-actions>
        <v-btn
          color="#fff"
          text
        >
          Excluir
        </v-btn>
  
        <v-btn
          color="#fff"
          text
        >  <v-file-input label="File input"></v-file-input>
          Adicionar
        </v-btn>
      </v-card-actions>
    </v-card>
</template>
<script>
export default {
    name:'cards'
}
</script>
<style scoped>

</style>