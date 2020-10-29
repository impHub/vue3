<template>
  <section id="section">
    <div class="container">
      <Timeline />
    </div>
  </section>
</template>
<script>
// import { computed, reactive, toRefs, watch } from "vue";
import { defineComponent } from "vue";
import Timeline from "./components/Timeline";
export default defineComponent({
  components: {
    Timeline
  }
});
</script>

<style></style>
