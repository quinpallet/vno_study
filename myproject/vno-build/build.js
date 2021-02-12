// deno-lint-ignore-file
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const Comp1 = Vue.component("comp-1", {template: /* html */
`
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <br />
    </p>
    <h3>
      <a href="https://vno.land" target="_blank" rel="noopener">vno.land</a> &
      <a
        href="https://github.com/oslabs-beta/vno"
        target="_blank"
        rel="noopener">
        github
      </a>
    </h3>
    <ul>
      <br />
    </ul>
  </div>
`,
  name: 'comp-1', props: { msg: String, },});

const Comp2 = Vue.component("comp-2", {template: /* html */
`
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
`,
  name: 'comp-2', props: { msg: String, },});

const Comp3 = Vue.component("comp-3", {template: /* html */
`
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
`,
  name: 'comp-3', props: { msg: String, },});

const App = new Vue({template: /* html */
`
  <div id="app">
    <img
      src="https://github.com/open-source-labs/vno/raw/main/assets/vnologo.svg"
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
`,  name: 'app', data() { return { showComp: 'comp1' }; }, methods: { switchComp: function(event) { this.showComp = event; }, }, components: { Comp1, Comp2, Comp3, },});

App.$mount("#app");