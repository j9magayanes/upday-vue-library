<template>
    <relative-timestamp :id="args.id" :class="['storybook-title', `storybook-title--${args.size}`]">{{args.title }}</relative-timestamp>
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

  </style>
  