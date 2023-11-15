<template>
    <relative-timestamp class="web">{{args.time }}</relative-timestamp>
  </template>
  
  <script>
    import 'upday-web-components/components/relativeTimestamp'; 
  export default {
    name: 'time-stamp',
    props: {
      primary: Boolean,
      backgroundColor: String,
      size: String,
      label: String,
      title: String,
      id: String,
      args: Object
    }
  };
  </script>
  
  <style scoped>
  /* Import styles from the articleDetail.css file */
    .web {
      margin-left: 40px
    }
  </style>
  