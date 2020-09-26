<template>
  <h2>Theme</h2>
  <ul class="theme__container">
    <li class="theme__card" v-for="category in categories" :key="category.title">
      <a :href="/themes/+category.title">
      {{ category.title}}
      </a>
    </li>
  </ul>
</template>

<script>
import { ref, reactive } from 'vue'
import themesData from '../../public/themes.json' //Temp for style developpement

export default {
  setup(){
    const categories = reactive(themesData);

    return {
      categories
    }
  }
}
</script>

<style lang="scss" scoped>
.theme{
  &__container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 70vw;
  margin:0 auto;
  }
  &__card{
    display: block;
    width: 200px;
    list-style: none;
    background:lightgray;
    border-radius: 5px;
    padding:10px;


  }
}
</style>