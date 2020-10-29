<template>
  <nav class="is-primary panel">
    <p class="panel-tabs">
      <a
        @click="setPeriod(item)"
        :class="[item === selectedPeriod ? 'is-active' : '']"
        data-test="panel"
        v-for="(item, index) in proiods"
        :key="index"
      >
        {{ item }}
      </a>
    </p>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Period } from "@/types";
export default defineComponent({
  name: "Timeline",
  setup() {
    const proiods: Period[] = ["今天", "本周", "本月"];
    // 默认选中
    const selectedPeriod = ref<Period>("今天");
    // tab切换
    const setPeriod = (period: Period) => {
      console.log(period);
      selectedPeriod.value = period;
    };
    return { proiods, selectedPeriod, setPeriod };
  }
});
</script>

<style scoped></style>
