<template>
  <div class="search-wrapper">
    <input id="search" type="text" name="search" v-model="searchValue" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: "SearchInput"
};
</script>

<style lang="scss" scoped>
.search-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 250px;
}

input {
  height: 30px;
  border: 0;
  border-bottom: 1px solid black;
  background: none;
}
</style>
