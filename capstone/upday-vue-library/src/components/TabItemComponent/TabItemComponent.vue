<template>
    <div>
      <!-- Your Vue template here -->
      <tab-item-component :selected="selected">{{name}}</tab-item-component>
    </div>
  </template>
  
  <script>
   import 'upday-web-components/components/tabItemComponent'; // Import the custom web component
  

  export default {
    props: {
      name: String,
      selected: Boolean,
    },
  };
  </script>