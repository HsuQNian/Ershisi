<script setup>
import "giscus";
const app = defineProps({
  width: String,
});
</script>
<template>
  <div class="comments-container">
    <giscus-widget
      repo=""
      repoid=""
      category=""
      category-id=""
      mapping="pathname"
      strict="0"
      reactionsenabled="1"
      emitmetadata="0"
      inputposition="top"
      theme="preferred_color_scheme"
      lang="zh-CN"
      crossorigin="anonymous"
      async
    />
  </div>
</template>
<style scoped lang="scss">
.comments-container {
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  giscus-widget {
    min-width: 200px;
    max-width: v-bind("app.width");
  }
}
</style>
