<template>
    <div class="paticka">
       
        <div class="kontakty">
            <h3>Kontakty</h3>
            <ul>
              <li><a href="mailto:jakub.antala10@gmail.com" target="_blank">e-mail: jakub.antala10@gmail.com</a></li>
              <li><a href="tel:+421-903-662-946" target="_blank">tel.č.: +421-903-662-946</a></li>
              <li><a href="https://www.instagram.com/jakubantala/" target="_blank" class="tlacidlo">Instagram</a></li>
            </ul>
        </div>
        <p>Copyright &copy; Jakub Antala</p>
    </div>
</template>

<style scoped>
  .paticka {
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #34495e;
    color: white;
    text-align: center;
    padding: 10px 0;
  }

  .kontakty {
    text-align: center;
    padding: 20px;
  }

  .kontakty h3 {
    margin-top: 0;
    color: #dbdbda; 
  }

  .kontakty ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .kontakty li {
    margin-bottom: 10px; 
  }

  .kontakty a {
    color: #dddddb; 
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .kontakty a:hover {
    color: #969592; 
  }

  .tlacidlo {
    background-color: #202020;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .tlacidlo:hover {
    background-color: #0f0f0f;
  }
</style>
