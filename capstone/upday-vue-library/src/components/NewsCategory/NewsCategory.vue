<template>
    <div class="web">
    <category-detail>{{args.category}}</category-detail>
    </div>
  </template>
  
  <script>
    import 'upday-web-components/components/categoryDetail'; 
  export default {
    name: 'news-category',
    props: {
        label: String,
        args: Object
    }
  };
  </script>
  
  <style scoped>
  /* Import styles from the articleDetail.css file */
  .web {
    margin-left: 40px;
    margin-top: 10px;
    color: gray;
  }
  </style>
  