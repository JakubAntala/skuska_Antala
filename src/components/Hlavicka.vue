<template>
    <header class="header">
        <nav class="container">  
            <ul class="nav">
                <li v-for="link in links" :key="link.path">
                    <router-link :to="link.path" class="link">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: 'Domov', path: '/' },
                { name: 'Galéria', path: '/Galeria' },
                { name: 'O Hádzanej', path: '/informacie' },
                { name: 'Prihlásenie na tréningy', path: '/prihlasenie' },
            ],
        };
    }, 
};
</script>
<style scoped>
  .header {
    background-color: #34495e;
    color: white;
    padding: 10px 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  .nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .nav li {
    margin: 0 10px;
  }

  .link {
    color: white;
    text-decoration: none;
    font-size: 16px;
    padding: 5px 10px;
    transition: color 0.3s ease;
  }

  .link:hover {
    color: #f39c12;
  }
</style>