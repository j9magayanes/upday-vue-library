<template>
    <div  class="web">
    <article-detail >{{args.description }}</article-detail>
    </div>
  </template>
  
  <script>
    import 'upday-web-components/components/articleDetail'; 
  export default {
    name: 'article-description',
    props: {
      primary: Boolean,
      backgroundColor: String,
      size: String,
      label: String,
      description: String,
      id: String,
      args: Object
    }
  };
  </script>
  
  <style scoped>
  /* Import styles from the articleDetail.css file */
 @import './articleDescription.css';
    .web {
      margin: 40px
    }
  </style>
  