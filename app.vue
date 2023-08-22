<script setup>
const route = useRoute();
const onReady = ref(false);
useHead({
  titleTemplate: () => {
    return `${
      route.path == "/"
        ? "websiteName | Home"
        : `websiteName | ${route.path.slice(1)[0].toUpperCase()}${route.path
            .slice(2)
            .replaceAll("/", " | ")
            .replaceAll("-", " ")}`
    }`;
  },
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0",
    },
  ],
});
onMounted(() => {
  if (document.readyState == "complete") {
    onReady.value = true;
  }
  document.onreadystatechange = () => {
    if (document.readyState == "complete" && onReady.value == false) {
      onReady.value = true;
    }
  };
});
</script>
<template>
  <transition name="Loading" mode="out-in">
    <Loading v-if="!onReady" />
    <NuxtLayout v-else name="page"><NuxtPage /></NuxtLayout>
  </transition>
</template>
