<template>
    <div>
      <ul>
        <h1>Test</h1>
        <list-component :items="items"></list-component>
      </ul>
    </div>
  </template>
  
  <script>
     import 'upday-web-components/components/listComponent'; 
  
  export default {
    name: 'footer-list',
    props: {
      items: Array // List of items passed as a prop
    },
    methods: {
    }
  };
  </script>
  