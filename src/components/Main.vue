<template>
  <div class="hello">
    <div class="left">
      <h1>{{ label }}</h1>
      <div>
        <form class="user-input" @submit.prevent="addItem">
          <BliField>
            <BliInput maxlength="35" class="user-text-input" placeholder="Type an item" type="text" v-model="newItem"/>
            <label>Add Item</label>
          </BliField>
          <BliButton color="primary" icon @click="addItem">
            <BliIcon>
              <BliIconBag />
            </BliIcon>
          </BliButton>
        </form>
      </div>
      <div class="user-items">
        <ul v-for="(item, index) in items" v-bind:key="index">
          <li class="item-list">
            {{ item }}
            <BliButton outline color="danger" size="small"  @click="removeItem(index)">remove</BliButton>
          </li>
        </ul>
      </div>
    </div>
    <Right/>
  </div>
</template>

<script>
/* eslint-disable */


import Right from './Right.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Main',
  data : function() {
    return ({
      newItem : ''
    })
  },
  computed: {
    ...mapState([
      'items',
      'label',
    ]),
  },
  components: {
    Right
  },
  methods: {
    ...mapMutations([
      'ADD_ITEM',
      'REMOVE_ITEM'
    ]),
    addItem: function() {
      if (this.newItem.trim() != '') {
        this.ADD_ITEM(this.newItem)
        this.newItem = ''
      }
    },
    removeItem: function(index) {
      this.REMOVE_ITEM(index)
    }

  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.left, .right{
  width: 50%;
  padding: 3%;

}

.user-input {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
}

.user-text-input {
  width: 80%;
}

.item-list {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: #F1F1F1;
  padding: 0.75rem;
  margin-bottom: 1%;
  margin-left: 0;
  border-radius: 8px;
  word-wrap: break-word;
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
