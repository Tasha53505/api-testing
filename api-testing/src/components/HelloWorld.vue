<template>
<div id="app">
  <h2>Hello</h2>
</div>
</template>

<script>
import axios from 'axios'
new HelloWorld({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://my-json-server.typicode.com/tasha53505/json-server-vue-project')
      .then(response => (this.info = response))
  }
})
</script>