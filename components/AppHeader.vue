<template>
  <header>
    <Disclosure v-slot="{ open, close }" as="nav" class="bg-white dark:bg-black shadow border-b border-transparent dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 relative">
          <div class="flex items-center flex-shrink-0">
            <NuxtLink to="/">
              <span class="sr-only">Dimitris Karapanos avatar</span>
              <Avatar />
            </NuxtLink>
          </div>
          <div class="items-center hidden sm:flex">
            <NuxtLink v-for="(link, linkIdx) in navigation" :key="linkIdx" :to="link.to" class="text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-500 inline-flex items-center px-3 text-sm font-medium">
              {{ link.label }}
            </NuxtLink>

            <ToggleColorModeButton />
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton class="inline-flex items-center justify-center text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
              <span class="sr-only">Open main menu</span>
              <IconsMenu v-if="!open" />
              <IconsX v-else />
            </DisclosureButton>
          </div>
        </div>
      </div>
      <DisclosurePanel class="sm:hidden">
        <div class="pt-2 pb-4 space-y-1">
          <NuxtLink v-for="(link, linkIdx) in navigation" :key="linkIdx" :to="link.to" class="border-transparent text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-900 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" @click.native="close">
            {{ link.label }}
          </NuxtLink>
          <div class="flex justify-end pt-2 pr-4 border-t border-gray-100 dark:border-transparent">
            <ToggleColorModeButton />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
</template>
<script>
export default {
  data: () => ({
    navigation: [
      {
        label: 'About',
        to: '/'
      },
      {
        label: 'Resume',
        to: '/resume'
      },
      {
        label: 'Open Source',
        to: '/open-source'
      },
      {
        label: 'Blog',
        to: '/blog'
      }
    ]
  })
}
</script>
