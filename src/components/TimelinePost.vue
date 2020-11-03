<template>
  <a data-test="post" post class="panel-block">
    <a>{{ post.title }}</a>
    <div>{{ post.created.format("yyyy-MM-dd") }}</div>
  </a>
</template>

<script lang="ts">
// import { computed } from "vue";
import { defineComponent } from "vue";
// import { Post } from "@/types";
export default defineComponent({
  name: "TimelinePost",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
});
</script>

<style></style>
