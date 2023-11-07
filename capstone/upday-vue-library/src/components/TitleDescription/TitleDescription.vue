<template>
    <figure>
      <article-title :src="args.src" :label="args.title" :size="args.size" class="meinestadt" />
    </figure>
  </template>
  
  <script>
  import 'upday-web-components/articleTitle'; // Assuming imageComponent is a global component
  
  export default {
    name: 'title-description',
    props: {
      label: String,
      src: String,
      args: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Styles specific to this component */
  .meinestadt {
    /* Your styles for the image */
  }
  
  /* Other styles from image.css */
  </style>
  