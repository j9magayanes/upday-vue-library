<template>
    <figure>
      <article-title :id="args.id" :class="['storybook-title', `storybook-title--${args.size}`]">{{ args.title}}</article-title>
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

  /* Other styles from image.css */
  </style>
  