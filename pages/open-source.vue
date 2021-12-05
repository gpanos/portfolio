<template>
  <div>
    <PageHeading>
      <template #title>
        Open Source
      </template>
      <template #description>
        I've authored and maintained a few Laravel packages.
        Have contributed in popular packages like Livewire, Laravel Cashier and more.
        I am active in <TextLink href="https://laracasts.com/@wingly">
          <!-- eslint-disable-next-line vue/multiline-html-element-content-newline -->
          Laracasts</TextLink> and love solving coding challenges in
        <TextLink href="https://www.codewars.com/users/gpanos">
          Codewars
        </TextLink>
      </template>
    </PageHeading>

    <Content>
      <Article v-for="(repo, repoIdx) in repos" :key="repoIdx">
        <template #title>
          <TextLink :href="repo.link">
            {{ repo.name }}
          </TextLink>
        </template>
        <p class="text-sm">
          {{ repo.description }}
        </p>
        <div class="flex justify-end">
          <IconLink :href="repo.link" :label="repo.name">
            <IconsGitHub />
          </IconLink>
        </div>
      </Article>
    </Content>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content }) {
    const repos = await $content('repos')
      .fetch()

    return { repos }
  },

  head () {
    return {
      title: 'Open Source'
    }
  }
}
</script>
