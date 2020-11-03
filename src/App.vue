<template>
  <section id="section">
    <div class="container">
      <!-- vue内置组件延迟加载 -->
      <Suspense>
        <template #default><Timeline /></template>
        <template #fallback><Progress /></template>
      </Suspense>
    </div>
  </section>
</template>
<script>
// import { computed, reactive, toRefs, watch } from "vue";
import { defineComponent } from "vue";
import Timeline from "./components/Timeline";
import Progress from "./components/Progress";
export default defineComponent({
  components: {
    Timeline,
    Progress
  }
});
</script>

<style></style>
