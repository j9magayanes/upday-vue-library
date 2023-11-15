<template>
    <figure>
      <ad-wrapper >
        <h3>Story continues below advertisement</h3>
        <ad-image :args="args"/>
      </ad-wrapper>
    </figure>
  </template>
  
  <script>
  import 'upday-web-components/components/adWrapper'; // Assuming adWrapper is a global component
  import AdImage from '../AdImage/AdImage.vue'; // Assuming ImageComponent is the Vue component for image
  
  export default {
    name: 'ad-component',
    props: {
      src: String,
      label: String,
      args: {
      type: Object,
      default: () => ({src: 'https://lineardesign.com/wp-content/uploads/2019/12/Google-Ads-Display-Ads-MailChimp-Example-1-1.jpg'}), // Set a default empty object for args prop
    },
    },
    components: {
      AdImage,
    },
  };
  </script>
  
  <style scoped>
  /* Styles specific to this component */
  .ad-block {
    background-color: #f2f2f2;
    align-self: center;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: flex-grow ease-in-out 1s;
    margin: 16px 0;
    position: relative;
  }
  
  .grow {
    flex-grow: 1;
  }
  
  /* Other styles from ad.css */
  </style>
  