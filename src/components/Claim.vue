<template>
  <div class="claim-wrapper">
    <h1 class="claim">Spacer</h1>
    <p class="subclaim">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iusto ad enim error
      facere nulla!
    </p>
    <p class="subclaim">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
  </div>
</template>

<script>
export default {
  name: "Claim"
};
</script>

<style lang="scss" scoped>
.claim-wrapper {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.claim {
  font-size: 50px;
  margin: 0;
}

.subclaim {
  margin: 15px 0 0 0;
  font-size: 13px;
}
</style>
