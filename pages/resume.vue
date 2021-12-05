<template>
  <div>
    <PageHeading>
      <template #title>
        Jobs and Education
      </template>
      <template #description>
        <span class="flex items-center">
          Want a print version? Download it here
          <IconLink href="/downloads/resume.pdf" download label="Download Resume" class="ml-1">
            <IconsDownload />
          </IconLink>
        </span>
      </template>
    </PageHeading>

    <Content>
      <Section>
        <template #title>
          Jobs
        </template>
        <Article v-for="(job, jobIdx) in jobs" :key="jobIdx">
          <template #title>
            <TextLink v-if="job.url" :href="job.url">
              {{ job.name }}
            </TextLink>
            <span v-else>{{ job.name }}</span>
          </template>
          <p class="font-medium">
            {{ job.role }}
          </p>
          <p class="text-sm">
            {{ job.description }}
          </p>
          <div class="flex items-center pt-4">
            <Badge v-for="(tool, toolIdx) in job.stack" :key="toolIdx" class="mr-1">
              {{ tool.name }}
            </Badge>
          </div>
          <div class="flex justify-end text-xs mt-4">
            {{ job.period }}
          </div>
        </Article>
      </Section>
      <Section>
        <template #title>
          Education
        </template>
        <Article v-for="(institute, instituteIdx) in institutes" :key="instituteIdx">
          <template #title>
            {{ institute.name }}
          </template>
          <p class="text-sm">
            {{ institute.diploma }}
          </p>
          <div class="flex justify-end text-xs mt-4">
            {{ institute.period }}
          </div>
        </Article>
      </Section>
    </Content>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content }) {
    const jobs = await $content('jobs')
      .fetch()

    const institutes = await $content('education')
      .fetch()

    return { jobs, institutes }
  },

  head () {
    return {
      title: 'Jobs & Education'
    }
  }
}
</script>
