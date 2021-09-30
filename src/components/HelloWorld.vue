<template>
  <div class="hello">
    <h1>{{ currentCount }}</h1>
    <h2>Current Count: {{ currentCount1 }}</h2>
    <h2>Current Count: {{ currentCount2 }}</h2>
    <button @click="incrementCount2">Add</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    currentCount: 0,
  }),
  methods: {
    incrementCount() {
      this.currentCount++;
    },
  },

// Composition API 
  setup() {
    const state = reactive({
      currentCount1: 12,
    });

// Using converting ref to toRefs
    const currentCount2 = ref(8);

    const incrementCount2 = () => {
      currentCount2.value++
    };

    return {
      ...toRefs(state),
      incrementCount2,
      currentCount2,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
