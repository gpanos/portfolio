<template>
  <div>
    <PageHeading>
      <template #title>
        Dimitris Karapanos
      </template>
      <template #description>
        Web developer living in Paris, France.
      </template>
    </PageHeading>

    <Content>
      <p class="text-xl dark:text-white leading-loose">
        I'm a mid-thirty web developer from Greece living in beautiful Paris.
        My core programming languages are PHP and Javascript.
        Currently in love with Laravel and Vue.
      </p>

      <Article>
        <template #title>
          Skills
        </template>
        <p>
          I have been translating business requirements into code for almost a decade now.
          Some of the skills that I picked along the way are:
        </p>
        <dl class="space-y-6 pt-4">
          <div v-for="(skill, skillIdx) in skills" :key="skillIdx">
            <dt class="text-lg font-semibold mb-2">
              {{ skill.title }}
            </dt>
            <dd>{{ skill.description }}</dd>
          </div>
        </dl>
      </Article>

      <Article>
        <template #title>
          Stack
        </template>
        <p>
          In my career I had the chance to work with multiple tools and technologies.
          Some I enjoyed, some I still try to forget.
        </p>
        <p>Having said that, currently I rock with:</p>
        <div class="flex flex-wrap pt-2">
          <Badge v-for="(tool, toolIdx) in tools" :key="toolIdx" class="mr-1 mb-2">
            {{ tool.name }}
          </Badge>
        </div>
      </Article>

      <Article>
        <template #title>
          Interests
        </template>
        <p>
          I love martial arts. From a young age I have been practicing boxing and participated in several competitions.
        </p>
        <p>
          I try to find some time to train, to compensate sitting at a desk all day long and starring on a screen.
        </p>
        <p>
          I also like to ride my bike in the city for my every day commute and for longer rides.
        </p>
        <p>
          Love to travel and I try to do at least two big trips each year.
        </p>
      </Article>
    </Content>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content }) {
    const tools = await $content('tools')
      .sortBy('name')
      .fetch()

    const skills = await $content('skills')
      .fetch()

    return { tools, skills }
  }
}
</script>
