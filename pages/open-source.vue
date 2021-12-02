<template>
  <div>
    <PageHeading>
      <template #title>
        Open source
      </template>
      <template #description>
        I've authored and maintained a few Laravel packages.
        Have contributed in popular packages like Livewire, Laravel Cashier and more.
        I am active in <a href="https://laracasts.com/@wingly" class="text-black dark:text-gray-200 hover:underline font-bold">Laracasts</a> and love solving coding challenges in <a href="https://www.codewars.com/users/gpanos" class="text-black dark:text-gray-200 hover:underline font-bold">Codewars</a>
      </template>
    </PageHeading>

    <Content>
      <Article v-for="(repo, repoIdx) in repos" :key="repoIdx">
        <template #title>
          {{ repo.name }}
        </template>
        <p class="text-sm">
          {{ repo.description }}
        </p>
        <div class="flex justify-end">
          <a :href="repo.link" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">{{ repo.name }}</span>
            <IconsGitHub class="h-6 w-6" />
          </a>
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
