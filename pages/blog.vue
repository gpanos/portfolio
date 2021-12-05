<template>
  <div>
    <PageHeading>
      <template #title>
        Blog
      </template>
      <template #description>
        I like to share what I've learned and what is on my mind. Mostly posts about web development and work life.
      </template>
    </PageHeading>
    <Content>
      <Article v-for="(post, postIdx) in posts" :key="postIdx">
        <template #title>
          {{ post.title }}
        </template>
        <p>{{ post.description }}</p>
        <p v-if="post.externalUrl">
          <TextLink :href="post.externalUrl">
            Read more
          </TextLink>
          <span class="text-xs">[{{ post.externalUrlHost }}]</span>
        </p>
        <p v-else>
          <TextLink as="nuxt-link" :to="`/posts/${post.slug}`">
            Read more
          </TextLink>
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
