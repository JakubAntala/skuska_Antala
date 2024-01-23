<template>
    <div class="container3">
      <form id="id" @submit.prevent="validateForm">
        <i class="fas fa-paper-plane"></i>
  
        <div class="input-group">
          <label>Meno dieťaťa</label>
          <input type="text" placeholder="Zadaj meno" id="contact-name" @keyup="validateName">
          <span id="name-error">{{ nameError }}</span>
        </div>
  
        <div class="input-group">
          <label>Email rodiča</label>
          <input type="email" placeholder="Zadaj Email" id="contact-email" @keyup="validateEmail">
          <span id="email-error">{{ emailError }}</span>
        </div>   
  
        <div class="input-group"> 
          <label>Bližšie informácie o dieťati.</label>
          <input type="text" placeholder="Napíš poznámku" id="contact-poznamka" @keyup="validatePoznamka">
          <span id="poznamka-error">{{ poznamkaError }}</span>
        </div>
  
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
              Súhlas so spracovaním osobných údajov.
            </label>
          </div>
        </div>
  
        <button @click.prevent="validateForm">Odoslať</button>
        <span id="submit-error">{{ submitError }}</span>
      </form>
    </div>  
  </template>
  
  <script>
  export default {
    data() {
      return {
        nameError: '',
        emailError: '',
        poznamkaError: '',
        submitError: ''
      };
    },
    methods: {
      validateName() {
        const name = document.getElementById('contact-name').value;
        if (name.length == 0) {
          this.nameError = 'Zadaj meno';
          return false;
        }
        if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
          this.nameError = 'Zadajte meno a priezvisko';
          return false;
        }
       
        return true;
      },
      validateEmail() {
        const email = document.getElementById('contact-email').value;
        if (email.length == 0) {
          this.emailError = 'Zadajte Email';
          return false;
        }
        if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
          this.emailError = 'Neplatný Email';
          return false;
        }
        
        return true;
      },
      validatePoznamka() {
        const poznamka = document.getElementById('contact-poznamka').value;
        if (poznamka.length == 0) {
          this.poznamkaError = 'Zadajte meno a kategóriu dieťaťa.';
          return false;
        }
        
        return true;
      },
      validateForm() {
    const isCheckboxChecked = document.getElementById('invalidCheck').checked;

    if (this.validateName() && this.validateEmail() && this.validatePoznamka() && isCheckboxChecked) {
      this.$router.back();
    } else {
      if (!isCheckboxChecked) {
        this.submitError = 'Prosím, súhlaste so spracovaním osobných údajov.';
      } else {
        this.submitError = 'Prosím zadajte potrebné údaje.';
      }
      setTimeout(() => { this.submitError = ''; }, 5000);
      alert('Prosím, vyplnte všetky polia formulára.');
     }
    }
  }
  };
  </script>
  
  
  <style scoped>
    .container3 {
      background-color: #34495e; 
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
      color: white;
      max-width: 500px;
      margin: auto;
      margin-top: 40px;
      margin-bottom: 160px;
    }
  
    .input-group label {
      display: block;
      margin-bottom: 5px;
      color: #bfbeb8; 
    }
  
    .input-group input[type="text"],
    .input-group input[type="email"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: none;
      border-radius: 5px;
      box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
    }
  
    .form-check-label {
      margin-left: 10px;
    }
  
    .form-check-input {
      accent-color: #0d0d0c; 
    }
  
    button {
      background-color: #464646; 
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    button:hover {
      background-color: #090909; 
    }
  
    span {
      color: #ea1212;
    }
  </style>
  