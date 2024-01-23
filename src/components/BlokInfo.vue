<template>
    <router-link :to="`/informacie/${data.id}`" class="blok-link">
      <div class="blok-info">
        <img :src="data.image" alt="Image" class="blok-image"/>
        <h2 class="blok-title">{{ data.nadpis }}</h2>
      </div>
    </router-link>
  </template>
  
  <script>
  export default {
    props: {
      data: Object
    }
  }
  </script>
  
  <style scoped>
  .blok-link {
    text-decoration: none; 
    color: inherit; 
  }
  
  .blok-info {
    display: flex;
    align-items: center;
    margin: 20px;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    transition: background-color 0.2s ease-in-out; 
  }
  
  .blok-info:hover {
    background-color: #a7a7a7; 
  }
  
  .blok-image {
    width: 64px; 
    height: 64px; 
    margin-right: 20px;
    border-radius: 8px;
    object-fit: cover;
  }
  
 
  </style>
  