<template>
    <div class="web">
    <ad-component :args="args" ></ad-component>
    <news-category :args="args" ></news-category>
    <title-description :args="args"></title-description>
    <news-source :args="args"></news-source>
    <time-stamp :args="args"></time-stamp>
    <header-image :args="args"></header-image>
    <image-source :args="args"></image-source>
    <article-description :args="args"></article-description>
    <read-button :args="args"></read-button>
    <ad-component :args="args" ></ad-component>
    <article-card v-for="(value, key, index) in myObject" :key="index" :args="args">{{ item }}</article-card>
    <footer-list :items="items"/>
    </div>
  </template>
  
  <script>
  import AdComponent from '../AdComponent/AdComponent.vue';

import ArticleCard from '../ArticleCard/ArticleCard.vue';
import ArticleDescription from '../ArticleDescription/ArticleDescription.vue';
import FooterList from '../FooterList/FooterList.vue';
import HeaderImage from '../HeaderImage/HeaderImage.vue';
import ImageSource from '../ImageSource/ImageSource.vue';
import NewsCategory from '../NewsCategory/NewsCategory.vue';
import NewsSource from '../NewsSource/NewsSource.vue';
import ReadButton from '../ReadButton/ReadButton.vue';
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
      AdComponent,
      NewsCategory,
      TitleDescription,
        NewsSource,
        TimeStamp,
        HeaderImage,
        ImageSource,
        ArticleDescription,
        ReadButton,
        ArticleCard,
        FooterList
    },
    data() {
    return {
      items: '[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]',
      myObject: { key1: 'Value 1', key2: 'Value 2', key3: 'Value 3' }
    }
  }
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

  .web {

  }
  
  /* Other styles from ad.css */
  </style>
  