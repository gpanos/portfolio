<template>
  <div class="min-h-screen max-w-7xl mx-auto p-8">
    <div><Avatar /></div>
    <div class="mt-5 border-t border-gray-200">
      <dl class="divide-y divide-gray-200">
        <div class="py-5 grid grid-cols-3 gap-4 ba-always bi-avoid">
          <dt class="text-sm font-medium text-gray-500">
            Full name
          </dt>
          <dd class="text-sm text-gray-900 col-span-2">
            Dimitris Karapanos
          </dd>
        </div>
        <div class="py-5 grid grid-cols-3 gap-4 ba-always bi-avoid">
          <dt class="text-sm font-medium text-gray-500">
            Email address
          </dt>
          <dd class="text-sm text-gray-900 col-span-2">
            karapanos.dimitris@gmail.com
          </dd>
        </div>
        <div class="py-5 grid grid-cols-3 gap-4 ba-always bi-avoid">
          <dt class="text-sm font-medium text-gray-500">
            About
          </dt>
          <dd class="text-sm text-gray-900 col-span-2">
            I'm a full-stack developer from Greece living in Paris.
            My core programming languages are PHP and Javascript.
            Currently working with Laravel and Vue.
          </dd>
        </div>
        <div class="py-5 grid grid-cols-3 gap-4 ba-always bi-avoid">
          <dt class="text-sm font-medium text-gray-500">
            Web presence
          </dt>
          <dd class="text-sm text-gray-900 col-span-2">
            <ul role="list" class="divide-y divide-gray-200 -mt-3">
              <li v-for="(link, linkIdx) in web" :key="linkIdx" class="flex items-center justify-between text-sm p-3">
                <span>{{ link.label }}:</span>
                <span class="ml-2 flex-1 w-0">
                  {{ link.link }}
                </span>
              </li>
            </ul>
          </dd>
        </div>
        <div class="py-5 grid grid-cols-3 gap-4 ba-always bi-avoid">
          <dt class="text-sm font-medium text-gray-500">
            Stack
          </dt>
          <dd class="text-sm text-gray-900 col-span-2">
            <ul role="list" class="flex flex-wrap">
              <li v-for="(tool, toolIdx) in tools" :key="toolIdx">
                <span class="mr-1 mb-2 inline-flex items-center px-3 py-0.5 text-sm font-medium">
                  {{ tool.name }}
                </span>
              </li>
            </ul>
          </dd>
        </div>
        <div class="py-5 grid grid-cols-3 gap-4 ba-always bi-avoid">
          <dt class="text-sm font-medium text-gray-500">
            Work
          </dt>
          <dd class="text-sm text-gray-900 col-span-2">
            <ul role="list" class="divide-y divide-gray-200 -mt-3">
              <li v-for="(job, jobIdx) in jobs" :key="jobIdx" class="p-3">
                <p class="text-lg font-bold mb-2">
                  {{ job.name }}
                </p>
                <p>{{ job.description }}</p>
                <p class="flex justify-end text-xs mt-2">
                  {{ job.period }}
                </p>
              </li>
            </ul>
          </dd>
        </div>
        <div class="py-5 grid grid-cols-3 gap-4 ba-always bi-avoid">
          <dt class="text-sm font-medium text-gray-500">
            Education
          </dt>
          <dd class="text-sm text-gray-900 col-span-2">
            <ul role="list" class="divide-y divide-gray-200 -mt-3">
              <li v-for="(institute, instituteIdx) in institutes" :key="instituteIdx" class="p-3">
                <p class="text-lg font-bold mb-2">
                  {{ institute.name }}
                </p>
                <p>{{ institute.diploma }}</p>
                <p class="flex justify-end text-xs mt-2">
                  {{ institute.period }}
                </p>
              </li>
            </ul>
          </dd>
        </div>
        <div class="py-5 grid grid-cols-3 gap-4 ba-always bi-avoid">
          <dt class="text-sm font-medium text-gray-500">
            Skills
          </dt>
          <dd class="text-sm text-gray-900 col-span-2">
            <ul role="list" class="divide-y divide-gray-200 -mt-3">
              <li v-for="(skill, skillIdx) in skills" :key="skillIdx" class="p-3">
                <p class="text-lg font-bold mb-2">
                  {{ skill.title }}
                </p>
                <p>{{ skill.description }}</p>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'plain',

  async asyncData ({ $content }) {
    const jobs = await $content('jobs').fetch()
    const institutes = await $content('education').fetch()
    const skills = await $content('skills').fetch()
    const tools = await $content('tools').sortBy('name').fetch()

    return {
      jobs,
      institutes,
      skills,
      tools
    }
  },

  data: () => ({
    web: [
      { label: 'Twitter', link: 'https://twitter.com/gpanos00' },
      { label: 'GitHub', link: 'https://github.com/gpanos' },
      { label: 'Website', link: 'https://www.dimikara.com/' }
    ]
  })
}
</script>
