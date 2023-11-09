<template>
    <div>
      <ul>
        <footer-component v-for="(item, index) in items" :href="item.href" :key="index" :text="item.text" :checked="item.checked" :index="index" @onToggle="item.event" @onRemove="removeItem">{{item.text}}</footer-component>
      </ul>
    </div>
  </template>
  
  <script>
     import 'upday-web-components/components/footerComponent'; 
  
  export default {
    name: 'footer-description',
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
  