<template>
  <div class="form-container">
    <h1 class="nadpis">Prihlásenie dieťaťa do tréningového cyklu</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="meno">Meno:</label>
        <input type="text" id="meno" v-model="form.meno" required>
      </div>

      <div class="form-group">
        <label for="priezvisko">Priezvisko:</label>
        <input type="text" id="priezvisko" v-model="form.priezvisko" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>

      <div class="form-group">
        <label for="poznamka">Bližšie informácie o dieťati:</label>
        <textarea id="poznamka" v-model="form.poznamka" required></textarea>
      </div>

      <div class="button-container">
        <button type="submit">Odoslať</button>
        <button type="button" @click="handleReset">Vymazať informácie</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useFormStore } from '../stores/storeLogin.js'; 

export default {
  data() {
    return {
      form: useFormStore()
    };
  },
  created() {
    this.form.loadForm();
  },
  methods: {
    handleSubmit() {
      this.form.submitForm();
      this.form.saveForm();
      this.form.resetForm(); 
    },handleReset() {
      this.form.resetForm(); 
    }
  }
};
</script>

<style scoped>
.form-container {
  background-color: #34495e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  color: white;
  max-width: 700px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
}

.form-group {
  margin-bottom: 15px;
}


.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #bfbeb8;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  color: #333;
}

.form-group textarea {
  min-height: 100px; 
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; 
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
</style>