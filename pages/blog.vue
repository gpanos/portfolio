<template>
  <div>
    <PageHeading>
      <template #title>
        Blog
      </template>
      <template #description>
        Sometimes I like to share my thoughts but I never seem to find the time to write them down.
        I promise I will do better...
      </template>
    </PageHeading>
    <Content>
      <Article v-for="(post, postIdx) in posts" :key="postIdx">
        <template #title>
          {{ post.title }}
        </template>
        <p>{{ post.description }}</p>
        <p v-if="post.externalUrl">
          <a :href="post.externalUrl" class="text-black dark:text-gray-200 underline font-bold">Read more</a>
          <span class="text-xs">[{{ post.externalUrlHost }}]</span>
        </p>
        <p v-else>
          <NuxtLink :to="`/posts/${post.slug}`" class="text-black dark:text-gray-200 underline font-bold">
            Read more
          </NuxtLink>
        </p>
        <div class="flex justify-end text-xs mt-4">
          {{ post.createdAt | formatDate }}
        </div>
      </Article>
    </Content>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('posts')
      .sortBy('createdAt', 'desc')
      .fetch()

    return { posts }
  },

  head () {
    return {
      title: 'Blog'
    }
  }
}
</script>
