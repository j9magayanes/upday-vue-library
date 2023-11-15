<template>
    <figure >
      <img  class="mobile" :src="args.src"/>
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
  .web {
    width: 360px;
    height: 203px;
    /* Your styles for the image */
  }
  .mobile {
    width: 110px;
    height: 110px;
  }
  /* Other styles from image.css */
  </style>
  