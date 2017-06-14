<template>
  <div>
    <table class="table is-stripped">
      <thead>
        <tr>
          <th v-for="(column, index) in this.columns">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cenas</td>
          <td>Cenas</td>
        </tr>
        <tr>
          <td>Cenas</td>
          <td>Cenas</td>
        </tr>
        <tr>
          <td>Cenas</td>
          <td>Cenas</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableClass: ''
      }
    },
    mounted () {
      console.log(this.columns)
    },
    props: [
      'columns'
    ]
  }
</script>
