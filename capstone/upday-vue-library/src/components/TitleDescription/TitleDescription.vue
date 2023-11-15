<template>
    <figure>
      <article-title  >{{ args.title}}</article-title>
    </figure>
  </template>
  
  <script>
  import 'upday-web-components/components/articleTitle'; // Assuming imageComponent is a global component
  
  export default {
    name: 'title-description',
    props: {
      primary: Boolean,
      backgroundColor: String,
      size: String,
      label: String,
      title: String,
      id: String,
      args: Object
    },
  };
  </script>
  
  <style scoped>
  /* Styles specific to this component */
  .web {
    color: black;
 
  }
  /* Other styles from image.css */
  </style>
  