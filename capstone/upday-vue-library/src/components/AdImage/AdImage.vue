<template>
    <figure>
      <image-component :src="args.src" :label="args.title" :size="args.size" class="meinestadt" />
    </figure>
  </template>
  
  <script>
  import 'upday-web-components/components/imageComponent'; // Assuming imageComponent is a global component
  
  export default {
    name: 'ad-image',
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
  