import { defineStore } from 'pinia';
import data from '../data.json';

export const pristupInfo = defineStore('info', {
  state: () => ({
    data: data.informacie,
  }), 
});
