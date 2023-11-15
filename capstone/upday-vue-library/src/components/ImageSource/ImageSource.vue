<template>
    <image-credits class="web">{{args.credit}}</image-credits>
  </template>
  
  <script>
    import 'upday-web-components/components/imageCredits'; 
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
  