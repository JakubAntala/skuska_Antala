import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
  state: () => ({
    meno: '',
    priezvisko: '',
    email: '',
    poznamka: ''
  }),
  actions: {
    loadForm() {
      const storedForm = localStorage.getItem('Form');
      if (storedForm) {
        this.$patch(JSON.parse(storedForm));
      }
    },
    saveForm() {
      localStorage.setItem('Form', JSON.stringify(this.$state));
    },
    submitForm() {
      console.log(this.$state);
      console.log('Spravne ulozene informacie.')
    },
    resetForm() {
      this.$reset(); 
    }
  }
});