import { mount } from "@vue/test-utils";
import Timeline from "@/components/Timeline.vue";

describe("Timeline.vue", () => {
  it("测试三个a标签的功能", () => {
    const wrapper = mount(Timeline);
    expect(wrapper.findAll('[data-test="panel"]')).toHaveLength(3);
  });
  it("测试a标签的事件功能", async () => {
    const wrapper = mount(Timeline);
    const $today1 = wrapper.findAll('[data-test="panel"]')[0];
    expect($today1.classes()).toContain("is-active");

    const $today2 = wrapper.findAll('[data-test="panel"]')[1];
    await $today2.trigger("click");
    // 点击事件触发后'今天'就没有is-active
    expect($today1.classes()).not.toContain("is-active");
    // 点击事件触发后'本周'就会有is-active
    expect($today2.classes()).toContain("is-active");

    const $today3 = wrapper.findAll('[data-test="panel"]')[2];
    await $today3.trigger("click");
        // 点击事件触发后'今天'就没有is-active
        expect($today2.classes()).not.toContain("is-active");
        // 点击事件触发后'本周'就会有is-active
        expect($today3.classes()).toContain("is-active");
  });
  it("测试数据加载功能", async () => {
    // 1.取到Timeline组件
    const wrapper = mount(Timeline);
    // 默认进来数据长度是否为1
    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(1);
    // 取本周[1]
    const $thisWeek = wrapper.findAll("[data-test='panel']")[1]
    // 点击本周
    await $thisWeek.trigger('click');
    // 数据长度是否为2
    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(2);
    // 1.取本月; 2.点击本月; 3.查看数据长度是否为3
    const $thisMonth = wrapper.findAll("[data-test='panel']")[2]
    await $thisMonth.trigger('click');
    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(3);
  });
});
