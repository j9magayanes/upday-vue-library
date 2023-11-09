<template>
    <div>
      <ul>
  <custom-list v-for="(item, index) in items" :key="index" :text="item.text" :href="item.href" :checked="item.checked" :index="index" @onToggle="item.event" @onRemove="removeItem">{{item.text}}</custom-list>
      </ul>
    </div>
  </template>
  
  <script>
     import 'upday-web-components/components/customList'; 
  
  export default {
    name: 'test-list',
    props: {
      items: Array // List of items passed as a prop
    },
    methods: {
      toggleItem(index) {
        // Handle toggle logic and emit events if needed
        this.$emit('toggleItem', index);
      },
      removeItem(index) {
        // Handle remove logic and emit events if needed
        this.$emit('removeItem', index);
      }
    }
  };
  </script>
  