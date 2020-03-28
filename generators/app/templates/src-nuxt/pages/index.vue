<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        {{ pkg_name }}
      </h1>
      <h2 class="subtitle">
        {{ pkg_description }}
      </h2>
      <div class="links">
        <a
          href="https://serverless.com/framework/docs/providers/aws/guide/intro/"
          target="_blank"
          class="button--red"
        >
          Serverless Framework
        </a>
        <a
          href="https://koajs.com/"
          target="_blank"
          class="button--grey"
        >
          Koa.js Backend
        </a>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Nuxt.js (Vue) Universal Frontend
        </a>
      </div>
      <div style="padding-top:20px">
        <nuxt-link to="/health-check">
          health-check
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import pkg from '~~/package.json'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      pkg_name: pkg.name,
      pkg_description: pkg.description
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
