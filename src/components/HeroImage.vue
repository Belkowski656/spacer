<template>
  <div class="hero-image"></div>
</template>

<script>
export default {
  name: "HeroImage"
};
</script>

<style lang="scss" scoped>
.hero-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-image: url("../assets/bgc.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
