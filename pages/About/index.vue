<template>
  <div id="About">
    <div class="introduction">对自己的描述</div>
    <div class="main">
      <div class="picture" />
      <h1>名字</h1>
    </div>
  </div>
</template>
<style scoped lang="scss">
#About {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  transition: all 0.64s cubic-bezier(0.18, 0.89, 0.32, 1);
  .introduction {
    flex: 1;
    padding: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    font-size: 16px;
    transition: all 0.64s cubic-bezier(0.18, 0.89, 0.32, 1);
    text-align: center;
  }
  .main {
    color: var(--theme);
    flex: 1;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 800px) {
  #About {
    flex-direction: column-reverse;
    .introduction {
      word-break: keep-all;
      padding: 40px;
      line-height: 2;
      text-align: center;
    }
    .main {
      margin-top: 84px;
    }
  }
}
</style>
