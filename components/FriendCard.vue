<script setup>
const app = defineProps({
  link: String,
  descr: String,
  name: String,
  avatar: String,
});
</script>
<template>
  <a :href="app.link" target="_blank">
    <div id="main">
      <img
        v-if="!!app.avatar"
        id="avatar"
        :src="avatar"
        referrerpolicy="no-referrer"
        loading="lazy"
      />
      <div v-else id="avatar" class="noAvatar" />
      <div id="name">
        {{ app.name }}
      </div>
    </div>
    <div class="descr">
      {{ app.descr ? app.descr : "&nbsp;" }}
    </div>
    <div id="arrow" />
  </a>
</template>
<style scoped lang="scss">
a {
  width: 240px;
  height: 100px;
  position: relative;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 0px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.2;
  padding: 1rem 1rem;
  border-radius: 0.36rem;
  color: var(--Virtual);
  transition: all 0.24s ease-in-out;
  margin: 20px;
  overflow: hidden;
  text-shadow: 0px 0px 0.4px rgba(0, 0, 0, 0.1);
  &:is(:hover, :focus-within) {
    color: var(--theme);
    box-shadow: 0px 0px 4px var(--theme);
  }
  &:hover #arrow {
    transform: rotate(45deg) translateY(-200%) translateX(-40%);
    opacity: 1;
    filter: drop-shadow(0px 0px 2px var(--theme));
  }
  &:hover #arrow::before {
    border-right: 2px solid var(--theme);
    border-top: 2px solid var(--theme);
    animation: float 2.4s 0.48s ease-in-out infinite alternate;
  }
}

#main {
  display: flex;
  flex-direction: row;
  align-items: center;
  #avatar {
    width: 48px;
    height: 48px;
    background: var(--Deep);
    border-radius: 12px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 0px 8px rgba(0, 0, 0, 0.1);
    opacity: 0.8;
  }
  .noAvatar {
    width: 48px;
    height: 48px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4), 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  #name {
    margin: 0 0.8rem;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
}
@keyframes float {
  50% {
    transform: translateY(-44%) translateX(44%);
  }
}

#arrow {
  position: absolute;
  top: 50%;
  right: 16%;
  width: 18px;
  height: 18px;
  transform: translateY(-180%) translateX(-960%) rotate(-135deg);
  z-index: -1;
  transition: all 0.48s ease-in-out;
  border-radius: 0.1rem;
  transform-origin: center center;
  opacity: 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 0.1rem;
    border-right: 2px solid transparent;
    border-top: 2px solid transparent;
    transition: all 0.36s ease-in-out;
    border-right: 2px solid var(--theme);
    border-top: 2px solid var(--theme);
  }
}
.descr {
  font-size: 0.8rem;
  height: 72px;
  display: flex;
  place-items: center;
}
@media screen and (max-width: 700px) {
  a {
    width: 128px;
    padding: 0.8rem 0.8rem;
    height: auto;
    #main {
      flex-direction: column;
    }
    #name {
      margin: 0.4rem 0;
      font-size: 0.8rem;
    }
  }

  .descr {
    display: flex;
    place-items: center;
    text-align: center;
  }
}
</style>
