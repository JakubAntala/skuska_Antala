<template>
    <div class="center-image">
      <img :src="obr5" alt="obr2" class="obr">
      <img :src="obr3" alt="obr3" class="obr">
      <img :src="obr4" alt="obr4" class="obr">
      <img :src="obr2" alt="obr5" class="obr">
      <img :src="uvod" alt="uvod" class="obr">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        uvod: 'uvod.JPG',
        obr2: 'obr1.jpg',
        obr3: 'obr2.jpg',
        obr4: 'obr3.jpg',
        obr5: 'obr4.jpg'
      }
    }
  }
  </script>
  
  <style scoped>
    .center-image {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 20px;
     
    }
  
    .obr {
      max-width: 80%;
      height: auto;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
   
  </style>
  