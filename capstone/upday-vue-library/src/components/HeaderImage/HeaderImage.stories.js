
import HeaderImage from './HeaderImage.vue';

export default {
    title: 'Components/HeaderImage',
    component: {HeaderImage},
    argTypes: {
        label: String,
        src: String,
        args: Object,
    },
  };
  
  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { HeaderImage },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<header-image v-bind="args" :src="src"/>',
  });
  
  export const Web = Template.bind({});
  Web.args = {
    label: 'Web',
    size: 'web',
    src: 'https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg',
    args:{   src: 'https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg',}
  }
  ;

  export const Huawei = Template.bind({});
  Huawei.args = {
    label: 'huawei',
    size: 'mobile',
    src: 'https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg',
    args:{   src: 'https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg',}
  }
  ;

  export const Oppo = Template.bind({});
  Oppo.args = {
    label: 'oppo',
    size: 'mobile',
    src: 'https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg',
    args:{   src: 'https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg',}
  }
  ;

  export const Samsung = Template.bind({});
  Samsung.args = {
    label: 'samsung',
    size: 'mobile',
    src: 'https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg',
    args:{   src: 'https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg',}
  }
  ;
