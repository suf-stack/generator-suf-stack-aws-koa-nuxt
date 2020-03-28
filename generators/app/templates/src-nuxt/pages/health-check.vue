<template>
  <div>
    Status: {{ status }}
  </div>
</template>

<script>
import axios_factory from '~/lib/axios_factory'

export default {
  asyncData () {
    const axios = axios_factory()

    return axios
      .get('/api/health-check')
      .then((response) => {
        const data = response.data || {}
        return data
      })
      .catch((err) => {
        console.error(err)
      })
  },
  data () {
    return {
      status: 'Failed backend call'
    }
  }
}
</script>
