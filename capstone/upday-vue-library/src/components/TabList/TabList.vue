<template>
  <div>
    <!-- Use the custom web component here -->
    <tab-component
      :class-list="classList"
      :class-link="classLink"
      :ref-link="refLink"
      :aria-label="ariaLabel"
      @pointer-down="handlePointerDown"
      :href="href"
      :role="role"
      :text="text"
      :active="isActive"
    >
      <!-- Slot content goes here -->
      <h1>{{ text }}</h1>
    </tab-component>
  </div>
</template>

<script>
import 'upday-web-components/components/tabComponent'; // Import the custom web component

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
    handlePointerDown(event) {
      // Handle the pointer-down event from the custom web component
      console.log('Pointer Down:', event);
    },
  },
};
</script>
