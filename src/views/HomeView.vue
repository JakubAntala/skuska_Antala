<template>
  <div class="uvod">
    <h1 class="nadpis">HC Sporta Hlohovec Academy</h1>
 
      <article>
        Hlavná úloha tejto stránky je priblížiť uživateľovi šport menom Hádzaná. Vysvetľuje jej podstatu, zobrazuje momenty zo zápasov a naše tímové nadšenie pre hru. Hádzaná je krásny šport a budem sa ho aj naďalej snažiť dostať čo najviac do popredia.
      </article>

      <img :src="uvod" alt="uvod" class="obr">
    </div>
</template>

<script>
export default {
  data() {
    return {
      uvod: 'uvod.JPG'
    }
  }
}
</script>
<style scoped>
  .uvod {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .nadpis {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
  }

  article {
    font-size: 18px;
    line-height: 1.6;
    text-align: center;
    color: #34495e;
    margin-bottom: 20px;
  }

  .obr {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
</style>