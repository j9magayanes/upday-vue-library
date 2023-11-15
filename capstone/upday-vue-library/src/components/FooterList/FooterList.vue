<template>
    <div class="footer">
      <div class="li">
      <list-component :items="items"></list-component>
      </div>
    </div>
  </template>
  
  <script>
   import 'upday-web-components/components/listComponent'; // Import the custom web component
  
  export default {
    name: "footer-list",
    props: {
      items: String // List of items passed as a prop
    },
  };
  </script>
  
  <style scoped>
  /* Add your scoped CSS styles here */
    .footer {
    height: 80px;
    font-size: 0.625rem;
    line-height: 0.8125rem;
    text-align: center;
    color: #FFFFFF;
    background: #50D4F5;
    margin-top: 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
    .li {
    font-weight: bold;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    list-style: none;
    }
  </style>
  