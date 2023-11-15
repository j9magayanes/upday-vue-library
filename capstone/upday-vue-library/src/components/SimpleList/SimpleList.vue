<template>
    <div>
      <list-component :items="items"></list-component>
    </div>
  </template>
  
  <script>
   import 'upday-web-components/components/listComponent'; // Import the custom web component
  
  export default {
    name: "simple-list",
    props: {
      items: String // List of items passed as a prop
    },
  };
  </script>
  
  <style scoped>
  /* Add your scoped CSS styles here */
  </style>
  