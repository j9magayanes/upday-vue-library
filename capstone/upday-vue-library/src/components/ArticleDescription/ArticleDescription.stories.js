
import ArticleDescription from './ArticleDescription.vue';

export default {
    title: 'Test/ArticleDescription',
    component: {ArticleDescription},
    argTypes: {
        primary: Boolean,
        backgroundColor: String,
        size: String,
        label: String,
        title: String,
        id: String,
        args: Object
    },
  };
  
  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ArticleDescription },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<article-description  :args="args"/>',
  });
  
  export const Primary = Template.bind({});
Primary.args = {
    label: 'Meinestadt',
    title: 'Mehr als 16 Monate nach Beginn des russischen Angriffskriegs hat der ukrainische Präsident Wolodymyr Selenskyj die Forderung nach einer baldigen konkreten EU-Beitrittsperspektive für sein Land erneuert. „Die Ukraine hat Einfluss auf die Stärke Europas. Das ist ein Fakt“, sagte Selenskyj am Donnerstag in seiner abendlichen Videoansprache. „Und dieses Jahr ist es an der Zeit, diesen und andere Fakten zu nutzen, um die Einheit in Europa zu stärken – angefangen beim Start von Verhandlungen über die EU-Mitgliedschaft der Ukraine.“ Unterdessen reiste der frühere US-Vizepräsident Mike Pence in die Ukraine. Von Selenskyj in Kiew empfangen wurde zudem die schwedische Umweltaktivistin Greta Thunberg.',
    size: 'meinestadt',
    id: 'meinestadt',
}
;

