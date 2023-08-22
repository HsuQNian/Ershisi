<script setup>
const blogPosts = ref((await queryContent("/blog").find()).reverse());
const tags = reactive(["All"]);
const blogList = ref([]);
const selectTag = async (params) => {
  if (params == "All") blogList.value = blogPosts.value;
  else {
    blogList.value = blogPosts.value.filter((post) => {
      return typeof post.label == "string"
        ? post.label == params
        : post.label.includes(params);
    });
  }
};
onMounted(() => {
  blogPosts.value.forEach((post) => {
    if (typeof post.label == "string" && tags.indexOf(post.label) == -1)
      tags.push(post.label);
    else if (tags.indexOf(post.label) > -1) return;
    else {
      post.label.forEach((tag) => {
        if (!tags.includes(tag) && tags.indexOf(tag) == -1) tags.push(tag);
      });
    }
  });
  blogList.value = blogPosts.value;
});
</script>
<template>
  <div id="BlogBox">
    <div id="tags">
      <span v-for="index in tags" @click="selectTag(index)">{{ index }}</span>
    </div>
    <div id="Blog">
      <transition-group name="blogPosts">
        <NuxtLink
          v-for="{ _path: slug, title, date, label } in blogList"
          :key="slug"
          :to="slug"
          :slug="slug"
        >
          <div id="title">
            <div>{{ title }}</div>
            <div class="line" />
            <div style="font-size: 0.76rem; letter-spacing: 2px">
              <span>{{ date.split("T")[0] }}</span>
              <span
                v-if="typeof label != 'string'"
                v-for="index in label"
                class="label"
              >
                {{ index }}
              </span>
              <span v-else class="label">{{ label }}</span>
            </div>
          </div>
        </NuxtLink>
      </transition-group>
    </div>
  </div>
</template>
<style scoped>
#BlogBox {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.32s ease-in-out;
}
#tags {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 1rem;
  color: var(--Virtual);
  flex-wrap: wrap;
  margin-top: 88px;
}
#tags span {
  font-size: 0.8rem;
  transition: all 0.32s ease-in-out;
  cursor: pointer;
}
#tags span:not(:first-child) {
  margin-left: 1rem;
}
#tags span:hover {
  color: var(--Real);
}
#Blog {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
  margin-left: -2rem;
}
#Blog span:nth-child(2) {
  margin-left: 20px;
}
#title {
  letter-spacing: 2px;
}
#title span {
  color: var(--Virtual);
  transition: all 0.32s ease-in-out;
}
a:hover #title span {
  color: var(--Real);
}
.line {
  width: 100%;
  height: 0.1em;
  background-color: transparent;
  background-image: linear-gradient(to right, var(--Real), var(--Real));
  background-repeat: no-repeat;
  background-size: 0 0.1em;
  background-position: 0 100%;
  transition: background-size 0.4s ease;
  border-radius: 2px;
}
#title:hover .line {
  background-size: 100% 0.1em;
}
.label:first {
  padding-left: 20px;
}

.label + .label::before {
  content: "·";
}

a {
  margin: 1.2rem 0;
  font-size: 0.8rem;
  color: var(--Real);
  transition: all 0.32s ease-in-out;
  position: relative;
}
.blogPosts-leave-active {
  position: absolute;
}
@media screen and (max-width: 540px) {
  #tags {
    margin-top: 40px;
  }
}
</style>
