
import AdImage from './AdImage.vue';

export default {
    title: 'Components/AdImage',
    component: {AdImage},
    argTypes: {
        label: String,
        src: String,
        args: Object,
    },
  };
  
  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { AdImage },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<ad-image label="label" :args="args" />',
  });
  
  export const Primary = Template.bind({});
  Primary.args = {
    label: 'Web',
    size: 'web',
    src: 'https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg',
  }
  ;
