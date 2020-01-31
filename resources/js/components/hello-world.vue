<template>
  <ul>
    <li v-for="(item, idx) in authorData" :key="idx">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  props: ['author'],
  data () {
    return {
      authorData: JSON.parse(this.author)
    }
  }
}
</script>
