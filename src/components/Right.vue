<template>
  <div class="right">
    <h2>Currently there are {{ itemCount }} items</h2>
    <BliButton color="secondary" block @click="removeAll">Remove All</BliButton>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Right',
  computed: {
    ...mapGetters([
      'itemCount'
    ])
  },
  methods: {
    ...mapMutations([
      'REMOVE_ALL'
    ]),
    removeAll: function() {
      this.REMOVE_ALL();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

template {
  display: flex;
  flex-direction: row;
}

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
