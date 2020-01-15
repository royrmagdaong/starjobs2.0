<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-if="getJobInfo">
        <h1>Job Position: {{ getJobInfo.positionTitle }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

    computed: {
      getJobInfo(){
        return this.$store.getters['jobInfo/getJobInfo'];
      }
    }
}
</script>

<style>

</style>