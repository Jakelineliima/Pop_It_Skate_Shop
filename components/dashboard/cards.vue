<template>
    <v-card
      class="mx-auto container"
      max-width="400"
    >
     
     
  
      <v-card-title class="pb- text-center">Adicionar produtos</v-card-title>
  
      <v-card-text class="text--black">
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
          color="#151515"
          class="black--text cor"
          text
        >
          Excluir
        </v-btn>
  
        <v-btn
    
          text
          class="black--text cor2"

        >  <v-file-input label="File input" ></v-file-input>
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
.container{
   box-shadow: 0px 0px 6px -2px #000;
}
.cor{
  background: rgb(138, 136, 136);
}
.cor2{
  border: 1px solid #000;
}
</style>