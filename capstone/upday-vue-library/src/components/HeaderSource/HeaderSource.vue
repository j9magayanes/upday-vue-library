<template>
    <article-source :class="meinestadt">{{args.source}}</article-source>
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

  </style>
  