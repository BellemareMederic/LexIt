<template>
  <h2>Theme</h2>
  <div class="theme__container">
      <theme-card v-for="category in categories" :key="category.title" :category="category"/>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import themesData from '../../public/themes.json' //Temp for style developpement
import themeCard from '../components/theme/ThemeCard.vue';

export default {
  setup(){
    const categories = reactive(themesData);

    return {
      categories
    }
  },
  components: {
    'theme-card': themeCard
  }
}
</script>

<style lang="scss">
.theme{
  &__container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:20px;
  max-width: 70vw;
  margin:0 auto;
  }
  &__card{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    text-decoration: none;
    overflow: hidden;
    background-color:#fff;
    // box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
      box-shadow: 0 5px 20px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.11);
    }
    &__icon{
      display: block;
      width: 50px;
      height: 50px;
      padding: 10px;
      object-fit: cover;
      object-position: center;
    }
    &__title{
      display: block;
      margin-left:10px;
      :first-letter{
        text-transform: uppercase;
      }
    }
  }
}
</style>