<template>
    <div>
    <div id="navigation">  
      <div>
        <img
        class="logo2"
        width="9%"
        src="../components/imagens/logo.svg"
        alt="logo da loja Pop-It Skate Shop"
      />
      </div>
      
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        app
      >
      
        <v-list color="#000">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-item-action color="#fff">
              <v-icon color="#fff">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content class="white--text">
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>

     
      <v-app-bar :clipped-left="clipped" fixed app color="#000" class="menu1">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#fff" />
        <v-btn icon @click.stop="miniVariant = !miniVariant" color="#fff">
          <v-icon color="#fff">mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
        
        <div class="alinhardropmenu">
      
          <dropacessibilidade />
       </div>
      </v-app-bar>
    </div>

    <nav class="d-flex align-center justify-space-around color menu2">
      <img
        class="logo"
        width="9%"
        src="../components/imagens/logo.svg"
        alt="logo da loja Pop-It Skate Shop"
      />

      <v-btn class="botao" color="#000" nuxt to="/">
        <v-icon>mdi-home</v-icon>Inicial
      </v-btn>
      <v-btn class="botao" color="#000" nuxt to="/Skateboard">
        <img class="skt" src="../components/imagens/skateboard.svg" alt="Icone de skateboard" /> Skateboard
      </v-btn>
      <v-btn class="botao" color="#000" nuxt to="/Roupas">
        <v-icon>mdi-hanger</v-icon>Roupas
      </v-btn>
      <v-btn class="botao" color="#000" nuxt to="/Tenis">
        <v-icon>mdi-shoe-formal</v-icon>Tênis
      </v-btn>
      <v-btn class="botao" color="#000" nuxt to="/acessorios">
        <v-icon>mdi-necklace</v-icon>Acessórios
      </v-btn>
      <v-btn class="botao" color="#000" nuxt to="/sobre">
        <v-icon>mdi-necklace</v-icon>Sobre
      </v-btn>
      <div class="drop">
        <dropdown />
      </div>
    </nav>

    <v-bottom-navigation v-model="bottomNav" class="acessibilidade" >
    

      <v-btn dark  >
        <span >Contraste</span>
        <v-icon  >mdi-brightness-4</v-icon>
      </v-btn>

      <v-btn dark  >
        <span>Aumentar letra</span>
        <v-icon>mdi-format-font-size-increase</v-icon>
      </v-btn>

      <v-btn dark >
        <span>Diminuir letra</span>
        <v-icon>mdi-format-font-size-decrease</v-icon>
      </v-btn>
      <v-btn dark>
        <span>Tamanho padrão</span>
        <v-icon>mdi-format-text-variant</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Vlibras</span>
        <v-icon>mdi-hand-right</v-icon>
      </v-btn>
       
  
    </v-bottom-navigation>
    




    </div>
</template>

<script>

import dropdown from "../components/dropdown.vue";
import dropacessibilidade from "../components/dropacessibilidade.vue";

export default {
    name: "appheader",
  components: {
    dropdown,
    dropacessibilidade,
    
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      bottomNav: 3,
      items: [
        {
          icon: "mdi-home",
          title: "Inicial",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Skateboard",
          to: "/Skateboard"
        },
        {
          icon: "mdi-hanger",
          title: "Roupas",
          to: "/Roupas"
        },

        {
          icon: "mdi-shoe-formal",
          title: "Tênis",
          to: "/Tenis"
        },
        {
          icon: "mdi-necklace",
          title: "Acessórios",
          to: "/Acessórios"
        },
        {
          icon: "mdi-notebook",
          title: "Sobre",
          to: "/Sobre"
        },
        {
          icon: "mdi-view-dashboard",
          title: "Administração",
          to: "/dashboard"
        },
        {
          icon: "mdi-account",
          title: "Login",
          to: "/login"
        },
        {
          icon: "mdi-account",
          title: "Cadastro",
          to: "/login"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    };
  },  
 
}
</script>

<style scoped>
p {
  color: #000;
}

.skt {
  width: 25px;
  padding: 1.25px;
}
.color {
  background-color: #000;
}

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

.botao {
  background-color: #000;
  color: #fff;
}

.botao:hover {
  color: rgb(20, 243, 31);
}

.skt img:hover {
  color: rgb(20, 243, 31);
}
#navigation {
  display: none;
}
.txtnav {
  color: #fff;
}

.acessibilidade {
  display: flex;
  justify-content: space-between;
}
.dropacessiblidade {
  display: none;
}
.menu1{
  margin-top: 16%;
}
@media (max-width: 360px) {
  .acessibilidade {
    margin-top: 10%;
  }
  .rodape {
    flex-wrap: wrap;
  }
  .titulo {
    font-size: 14px;
  }
  .txtrodape {
    height: 70px;
  }
}

@media (max-width: 930px) {
  #navigation {
    display: block;
  }
  .menu2,
  .botao,
  .logo,
  .drop {
    display: none;
  }
  .acessibilidade {
    display: none;
  }
  .alinhardropmenu {
    display: block;
    margin-left: 72%;
  }
}
</style>