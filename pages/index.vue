<script setup></script>
<template>
  <div id="home">
    <div
      style="
        background-image: linear-gradient(45deg, var(--theme) 30%, #33c4df 72%);
        -webkit-background-clip: text;
      "
    >
      <h1>Logo</h1>
    </div>
  </div>
</template>
<style scoped lang="scss">
#home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Quicksand-Light";
    font-size: 8rem;
    color: transparent;
    transition: all 0.64s cubic-bezier(0.18, 0.89, 0.32, 1.12);
    pointer-events: none;
  }
}

@media screen and (max-width: 1200px) {
  h1 {
    font-size: 6rem !important;
  }
}
@media screen and (max-width: 800px) {
  h1 {
    font-size: 4rem !important;
  }
}
</style>
