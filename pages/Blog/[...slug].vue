<script setup>
const route = useRoute();
let data = await queryContent(route.path).findOne();
const contentBox = ref(null);
const contentRenderer = ref(null);
onMounted(() => {
  let CodeBlock = contentRenderer.value.$el.querySelectorAll("pre");
  CodeBlock.forEach((item) => {
    let lineNumber = parseInt(
      item.querySelector("code span.line:last-child").getAttribute("line")
    );
    const line = document.createElement("code");
    line.className = "line-number";
    for (let i = 1; i <= lineNumber; i++) {
      const span = document.createElement("span");
      span.innerText = i;
      line.appendChild(span);
    }
    item.prepend(line);
  });
});
const scrollTop = ref(0);
const scroll = () => {
  scrollTop.value = event.target.scrollTop;
};
let toTop = () => {
  contentBox.value.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
<template>
  <div id="contentBox" @scroll="scroll" ref="contentBox">
    <transition name="toTop">
      <div v-if="scrollTop > 0" id="toTop" @click="toTop" />
    </transition>
    <div id="content">
      <h2
        style="
          text-align: center;
          font-weight: 600;
          margin-bottom: 0;
          line-height: 1.6rem;
        "
      >
        {{ data.title }}
      </h2>
      <p style="text-align: center; margin-bottom: -12px; font-size: 0.8rem">
        {{ data.date }}
      </p>
      <ContentRenderer
        :value="data"
        ref="contentRenderer"
        class="markdown-body"
      >
        <template #empty>
          <div id="contentBox" />
        </template>
      </ContentRenderer>
      <!-- <Comment v-if="data.comment" :width="'980px'" /> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
#toTop {
  position: fixed;
  bottom: 24px;
  width: 26px;
  height: 26px;
  right: 12px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2px;
    height: 12px;
    background: var(--Virtual);
    transform: translate(-50%, -20%);
    border-radius: 2px;
  }
  &::after {
    background: transparent;
    border: 2px solid var(--Virtual);
    width: 12px;
    height: 12px;
    transform: translate(-50%, -60%) rotate(45deg);
    border-radius: 2px;
    border-right: none;
    border-bottom: none;
  }
}
.markdown-body {
  min-width: 160px;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 30px;
  border: 20px solid var(--Deep);
  background: var(--Deep);
  display: flex;
  flex-direction: column;
  min-height: 50vh;
}

#contentBox {
  height: 100vh;
  width: 100vw;
  user-select: text;
  scroll-behavior: smooth;
  overflow-y: scroll;
  transition: all 0.32s ease-in-out;
  #content {
    padding-top: 80px;
    white-space: pre-wrap;
    transition: all 0.3s ease-in-out;
    &:not(.markdown-body) {
      color: var(--Virtual);
      & h2 {
        width: 72vw;
        margin: auto;
      }
    }
  }
}

::selection,
.markdown-body ::selection {
  background: #bbb;
  opacity: 0.8;
}
.toTop-enter-active,
.toTop-leave-active {
  transition: all 0.28s ease-in-out;
}
.toTop-enter-from,
.toTop-leave-to {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
@media screen and (max-width: 540px) {
  #content {
    padding-top: 40px;
  }
}
</style>
<style>
@import url("@/public/github-markdown.css");
</style>
