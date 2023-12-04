<template>
  <div>
    <!-- Use the custom web component here -->
    <tab-component
      :class-list="classList"
      :class-link="classLink"
      :ref-link="refLink"
      :aria-label="ariaLabel"
      :href="href"
      :role="role"
      :text="text"
      :active="isActive"
      ref="elementWithRipple"
      @pointerdown="createRippleAnimationFn"
    >
      <!-- Slot content goes here -->
      <h1>{{ text }}</h1>
    </tab-component>
  </div>
</template>

<script>
import 'upday-web-components/components/tabComponent'; // Import the custom web component
import { createRippleAnimation } from 'upday-web-components/components/ripple'; 
import './ripple.css'

export default {
  name: 'MyTabComponentWrapper',
  props: {
    classList: String,
    classLink: String,
    refLink: String,
    ariaLabel: String,
    href: String,
    role: String,
    text: String,
    isActive: Boolean,
  },
  methods: {
    createRippleAnimationFn(event) {
      const tabListComponent = this.$refs.elementWithRipple;
      console.log(tabListComponent)
      // Access the underlying DOM element
      const tabListElement = tabListComponent.shadowRoot.querySelector('a');

      // Now you can pass tabListElement to your createRippleAnimation function
      createRippleAnimation(event, tabListElement, true);
    },
  },
};
</script>
