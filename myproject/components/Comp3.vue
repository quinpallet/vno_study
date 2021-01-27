// created component Comp3

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'comp-3',
    props: {
      msg: String,
    },
  };
</script>

<style>

</style>