<template> 
<div>
    <div  id="app" class="alinhar">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn id="btn"
            color="#000"
            dark
            v-on="on"
            class="btn"
          >
            Configurações
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="clicar"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  <div class="alinhar">
<cards id="card"/>
 <lista class="lista"/>
  </div>



</div>
</template>



<script>
import cards from "../../components/dashboard/cards.vue"
import lista from "../adm/usuarios/lista.vue" 

 export default {
    name:'dashboard',
    components:{
        cards,lista
    },


  data: () => ({
    items: [
      { title: 'Clientes' },
      { title: 'Produtos' },
      { title: 'Estátisticas' },
      { title: 'Ir para o site Pop-It' },
    ],
  }),


 }
</script>
<style scoped>
.alinhar{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto
}
#btn{
display: flex;
justify-content: left;
}
.lista{
  grid-column: 1/5;
  grid-row: auto;
}

.btn{
  grid-row: 1/2;
  grid-column: 1/2;
  margin-top: -137px;
  width: 56%;
}

</style>