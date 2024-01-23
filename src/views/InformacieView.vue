<template>
  <div class="header">
    <button @click="goBack">Prehľad</button>
    <h1 class="nadpis" v-if="Informacia">{{ Informacia.nadpis }}</h1>
  </div>
  <div class="text" v-if="Informacia">
    <article>
      <p>{{ Informacia.text }}</p>
    </article>
  </div>
  <div v-else>
    <p>Nenájdená informácia.</p>
  </div>
</template>

<script>

import { pristupInfo } from "../stores/info"

export default {
  data() {
    return {
      Informacia: null,
    };
  },
  mounted() {
    const store = pristupInfo();
    const id = parseInt(this.$route.params.id, 10);
    this.Informacia = store.data.find(p => p.id === id);
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 20px;
  }

  .nadpis {
    font-weight: bolder;
    text-align: center;
    padding: 20px;
    margin: 10px;
    font-size: 35px;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
  }

  article {
    background-color: rgb(0, 0, 0);
    color: rgb(163, 162, 162);
    border: 2px solid #584B53;
    margin: 20px;
    padding: 30px;
    border-radius: 5px;
  }

  button {
    background-color: lightgrey;
    color: black;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  button:hover {
    font-size: 15px;
  }
</style>
