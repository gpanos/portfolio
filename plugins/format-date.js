import Vue from 'vue'

Vue.filter('formatDate', date =>
  Intl.DateTimeFormat('us-EN').format(new Date(date))
)
