<template>
    <article-detail :id="args.id" :class="['storybook-title', `storybook-title--${args.size}`]">{{args.title }}</article-detail>
  </template>
  
  <script>
    import 'upday-web-components/articleDetail'; 
  export default {
    name: 'article-description',
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
 @import './articleDescription.css'; 
  </style>
  