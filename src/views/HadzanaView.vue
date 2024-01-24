<template>
    <main>
      <h1 class="nadpis">Hádzanárske pravidlá a pravidlá plážovej hádzanej</h1>
      <div class="uvod">
        <div class="blok" v-for="item in info.data" :key="item.id">
        <BlokInfo :data="item" />
      </div>
      </div>
    </main>
  </template>
  
  <script>
  import BlokInfo from '@/components/BlokInfo.vue'
  import { pristupInfo } from "../stores/info"
  
  export default {
    components: {
      BlokInfo
    },
    computed: {
      info() {
        return pristupInfo();
      }
    }
  };
  </script>
  
  <style scoped>
  .uvod {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-direction: row;
    flex-wrap: wrap;
  
  }
  
  .nadpis {
    font-weight: bolder;
    text-align: center;
    padding: 20px;
    margin: 10px;
    font-size: 35px;
  }
  </style>