<template>
  <div id="app">
    <img
      src="https://svgshare.com/i/SNz.svg"
      alt="image"
      border="0"
      width="450"
      height="450"
    />
    <Comp1 v-show="showComp === 'comp1'" msg="you are now on Comp1" />
    <Comp2 v-show="showComp === 'comp2'" msg="you are now on Comp2" />
    <Comp3 v-show="showComp === 'comp3'" msg="you are now on Comp3" />
    <nav>
      <a v-bind:class="{ disable: showComp === 'comp1' }" v-on:click="switchComp('comp1')">Comp1</a>
      <a v-bind:class="{ disable: showComp === 'comp2' }" v-on:click="switchComp('comp2')">Comp2</a>
      <a v-bind:class="{ disable: showComp === 'comp3' }" v-on:click="switchComp('comp3')">Comp3</a>
    </nav>
  </div>
</template>

<script>
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';

export default {
  name: 'app',
  data() {
    return {
      showComp: 'comp1'
    };
  },
  methods: {
    switchComp: function(event) {
      this.showComp = event;
    },
  },
  components: {
    Comp1,
    Comp2,
    Comp3,
  },
}
</script>

<style lang="scss">
$text-color: #79d0b2;

html {
  background-color: #203A42;
}
nav {
  $margin-space: 1em;
  a {
    cursor: pointer;
    font-weight: bold;
    &::before,
    &::after {
      color: $text-color;
    }
    &:first-child {
      &::before {
        content: '<';
        margin-right: $margin-space;
        cursor: default;
      }
    }
    &:last-child {
      &::after {
        content: '>';
        margin-left: $margin-space;
        cursor: default;
      }
    }
    &:not(:last-child) {
      margin-right: $margin-space;
    }
    &:hover {
      color: lighten($text-color, 20%);
    }
    &.disable {
      pointer-events: none;
      color: rgba($text-color, .5);
    }
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  margin-top: 60px;
}
</style>