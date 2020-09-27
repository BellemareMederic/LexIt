<template>
  <router-link :to="/theme/+category.title" class="theme__card">
      <img class="theme__card__icon" loading=lazy :src="category.iconUrl" :alt="category.title+' theme images'">
      <h2 class="theme__card__title">{{ category.title }}</h2>
  </router-link>
</template>

<script>
export default {
  props: {
    'category':{
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
</style>