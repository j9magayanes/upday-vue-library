<template>
    <div class="container">
    <div class="left">
    <news-category class="category" :args="args" ></news-category>
   <div class="description">
    <title-description :args="args"></title-description>
   </div>
    <news-source class="source" :args="args"></news-source>
    <time-stamp class="time" :args="args"></time-stamp>
    </div>
    <div class="right">
        <div class="image" >
    <header-image    :args="args"></header-image>
</div>   
</div>
    </div>
  </template>
  
  <script>

import HeaderImage from '../HeaderImage/HeaderImage.vue';
import NewsCategory from '../NewsCategory/NewsCategory.vue';
import NewsSource from '../NewsSource/NewsSource.vue';
import TimeStamp from '../TimeStamp/TimeStamp.vue';
import TitleDescription from '../TitleDescription/TitleDescription.vue';

  export default {
    name: 'article-page',
    props: {
      src: String,
      label: String,
      args: {
      type: Object,
      default: () => ({src: 'https://lineardesign.com/wp-content/uploads/2019/12/Google-Ads-Display-Ads-MailChimp-Example-1-1.jpg'}), // Set a default empty object for args prop
    },
    },
    components: {
      NewsCategory,
      TitleDescription,
        NewsSource,
        TimeStamp,
        HeaderImage,
    },
  };
  </script>
  
  <style scoped>
  /* Styles specific to this component */
  .container {
    background: rgb(232, 231, 231);
    display: flex;
    justify-content: center; 
   margin:auto ;
   padding: 10px
  }
  .left {
    flex: 50%;
 
  }
  .right {
    flex: 50%;
  
  }

  .category {

  }
  .description {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #282828;
    display: -webkit-box;
    font: 8px sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .source {

  }
  .time{

  }
  .image {
    color: indigo;
    height: 110px !important;
    width: 110px  !important;
  }
  /* Other styles from ad.css */
  </style>
  