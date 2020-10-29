<template>
  <div id="nav">
    <p>姓名:{{ name }}</p>
    <p>
      <button type="button" @click="changeAge(1)">+</button>
      <span>年龄:{{ age }}</span>
      <button type="button" @click="changeAge(-1)">-</button>
    </p>
    <p>
      <button type="button" @click="changeYear(1)">+</button>
      <span>年份:{{ year }}</span>
      <button type="button" @click="changeYear(-1)">-</button>
    </p>
  </div>
</template>
<script>
import { computed, reactive, toRefs, watch } from "vue";
export default {
  // data() {
  //   return {
  //     name: "hh",
  //   };
  // },
  props: {
    title: String
  },
  // 写在下面name被执行
  // props父传来的参数,context相当于this
  setup(props, context) {
    const data = reactive({
      name: "xixi",
      age: 32,
      year: computed({
        get() {
          console.log("get");
          return 2020 - data.age;
        },
        set(val) {
          console.log("set");
          data.age = 2020 - val;
        }
      })
    });
    watch(
      () => {
        return props.title;
      },
      (newTitle, oldTitle) => {
        console.log(newTitle, oldTitle);
        context.emit("title-changed");
      }
    );
    function changeAge(val) {
      data.age += val;
    }
    function changeYear(val) {
      data.year = data.year + val;
    }

    return { ...toRefs(data), changeAge, changeYear };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
