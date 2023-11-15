<template>
    <article-source class="web">{{args.source}}</article-source>
    <br/>
  </template>
  
  <script>
    import 'upday-web-components/components/articleSource'; 
  export default {
    name: 'header-source',
    props: {
        label: String,
        args: Object
    }
  };
  </script>
  
  <style scoped>
  /* Import styles from the articleDetail.css file */
  .web {
    margin: 40px;
  }
  </style>
  