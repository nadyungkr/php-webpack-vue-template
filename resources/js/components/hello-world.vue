<template>
  <div id="hello-world">
      <img src="../../images/logo.png">
      <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style scoped>
#hello-world {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-align: center;
  width: 600px;
}
#hello-world h1 {
  font-weight: 500;
  font-size: 2.5em;
  line-height: 1.5em;
}
</style>
