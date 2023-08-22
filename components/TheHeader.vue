<script setup>
import { Store } from "../store/index.js";
const store = Store();
const router = useRouter();
router.beforeResolve((_to, _from, next) => {
  store.mobileHeader = false;
  next();
});
</script>
<template>
  <div class="header">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/blog">Blog</nuxt-link>
    <nuxt-link to="/friends">Friends</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
  </div>
  <div
    class="toggle-menu"
    style="z-index: 1004"
    @click="store.mobileHeader = !store.mobileHeader"
  >
    <div
      style="
        width: 28px;
        height: 2px;
        background: var(--Virtual);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, 50%);
        transition: transform 0.48s cubic-bezier(0.18, 0.89, 0.32, 1.36);
      "
      :style="{
        transform: store.mobileHeader
          ? 'translate(-200%, 50%)'
          : 'translate(-50%, 50%)',
      }"
    ></div>
  </div>
  <transition name="miscellaneous">
    <div
      v-if="store.mobileHeader"
      class="mobileHeader"
      @click.self="store.mobileHeader = !store.mobileHeader"
    >
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/blog">Blog</nuxt-link>
      <nuxt-link to="/friends">Friends</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </div>
  </transition>

  <div
    v-if="store.showMusic"
    id="MusicDisc"
    @click="
      () => {
        store.MusicDisplay = !store.MusicDisplay;
        if (store.MusicListShow) store.MusicListShow = false;
      }
    "
  >
    <div
      id="disc"
      :style="{
        AnimationPlayState: store.MusicPlaying ? 'running' : 'paused',
      }"
    >
      <div
        v-for="index in 10"
        :style="{
          width: `${30 - index * 2}px`,
          height: `${30 - index * 2}px`,
          transform: `translate(-50%, -50%) rotate(${
            index % 2 == 0 ? index : -index * 20
          }deg)`,
        }"
      />
    </div>
    <div
      style="opacity: 0"
      :style="{
        Animation: store.MusicSwitch ? 'songChange .56s .42s forwards' : '',
      }"
    >
      <div
        id="disc"
        :style="{
          AnimationPlayState: store.MusicPlaying ? 'running' : 'paused',
        }"
      >
        <div
          v-for="index in 10"
          :style="{
            width: `${30 - index * 2}px`,
            height: `${30 - index * 2}px`,
            transform: `translate(-50%, -50%) rotate(${
              index % 2 == 0 ? index : -index * 20
            }deg)`,
          }"
        />
      </div>
    </div>
    <div
      id="Crank"
      :style="{
        transform:
          store.Crank && !store.MusicSwitch
            ? 'translateX(-50%) rotate(-30deg)'
            : 'translateX(-50%) rotate(-60deg)',
      }"
    >
      <div v-for="index in 3" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 1%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 12px;
  width: 99vw;
  height: 64px;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  transition: all 0.24s;
  a {
    margin: 0 28px;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.24s;
    color: var(--Virtual);
    transition: all 0.24s;
    &:nth-child(1) {
      margin-left: 4%;
    }
  }
}
.toggle-menu {
  width: 26px;
  height: 26px;
  position: fixed;
  left: 12px;
  bottom: 24px;
  transform: translateX(-400%);
  transition: all 1.2s cubic-bezier(0.68, 0.89, 0.32, 1.04);
}
.mobileHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1003;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: none;
  a {
    margin: 8px 0;
    letter-spacing: 4px;
    font-size: 1rem;
    transition: all 0.24s;
    color: var(--Virtual);
  }
}
a.router-link-exact-active {
  color: var(--theme);
}
@media screen and (max-width: 540px) {
  .header {
    opacity: 0;
    pointer-events: none;
  }
  .mobileHeader {
    display: flex;
    justify-content: flex-end;
    a {
      transform: translateY(-10rem);
    }
  }

  .toggle-menu {
    transform: translateX(0);
    &:before,
    &:after {
      bottom: 0;
      content: "";
      position: absolute;
      width: 2px;
      height: 20px;
      background: var(--Virtual);
      border-radius: 2px;
      transition: all 0.24s;
      transform: rotate(v-bind("store.mobileHeader?'45deg':'90deg'"))
        translate(
          v-bind("store.mobileHeader?'0px':'-6px'"),
          v-bind("store.mobileHeader?'-6px':'-2px'")
        );
      transform-origin: bottom;
    }
    &:after {
      right: 0;
      transform: rotate(v-bind("store.mobileHeader?'-45deg':'-90deg'"))
        translate(
          v-bind("store.mobileHeader?'0px':'16px'"),
          v-bind("store.mobileHeader?'-6px':'-2px'")
        );
    }
  }
}
</style>
