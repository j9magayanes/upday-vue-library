<template>
    <figure>
      <img  :src="src"/>
    </figure>
  </template>
  
  <script>


  export default {
    name: 'test-image',
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
  