<template>
    <div class="web">
    <read-more >{{args.text}}</read-more>
    </div>
  </template>
  
  <script>
    import 'upday-web-components/components/readMore'; 
  export default {
    name: 'read-button',
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
    border: 1px solid #ccc;

    border: 1px solid #ccc;
    border-radius: 89px;
    color: #121212;
    font-size: .9375rem;
    line-height: .9375rem;
    padding: 14px;
    vertical-align: middle;
    text-align: center;
    width: 100px;
    margin: auto;
  }

  </style>
  