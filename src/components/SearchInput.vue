<template>
  <input
    id="search"
    type="text"
    name="search"
    :value="value"
    @input="handleChange"
    :class="{ dark }"
  />
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    value: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 250px;
  height: 30px;
  border: 0;
  border-bottom: 1px solid white;
  background: none;
  color: white;
  font-size: 18px;
  padding: 10px;
  text-align: center;
}

input:focus {
  outline: none;
}

.dark {
  color: #1e3d4a;
  border-bottom-color: #1e3d4a;
}
</style>
