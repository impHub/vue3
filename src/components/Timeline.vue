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
    <a v-for="item in posts" :key="item.id" class="panel-block">
      <a>{{ item.title }}</a>
      <div>{{ item.created.format("yyyy-MM-dd") }}</div>
    </a>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Period } from "@/types";
import { todayPost, todayWeek, todayMonth } from "@/mock";
import moment from "moment";
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
    console.log(todayPost, todayWeek, todayMonth);

    // 展示数据
    const posts = computed(() =>
      [todayPost, todayWeek, todayMonth].filter(post => {
        if (
          selectedPeriod.value == "今天" &&
          post.created.isAfter(moment().subtract(1, "day"))
        ) {
          return true;
        }
        if (
          selectedPeriod.value == "本周" &&
          post.created.isAfter(moment().subtract(7, "day"))
        ) {
          return true;
        }
        if (
          selectedPeriod.value == "本月" &&
          post.created.isAfter(moment().subtract(1, "month"))
        ) {
          return true;
        }
        return false;
      })
    );
    return { proiods, selectedPeriod, setPeriod, posts };
  }
});
</script>

<style scoped></style>
