<template>
    <article-source class="web">{{args.credit}}</article-source>
  </template>
  
  <script>
    import 'upday-web-components/components/articleSource'; 
  export default {
    name: 'image-source',
    props: {
        label: String,
        args: Object
    }
  };
  </script>
  
  <style scoped>
  /* Import styles from the articleDetail.css file */
  .web {
    color: gray;
    margin-left: 40px;   
  }
  </style>
  