<template>
  <v-container>
      <v-row no-gutters>
          <!-- col 1 -->
          <v-col  cols="4" v-if="!$vuetify.breakpoint.xsOnly">
              <v-card height="100%" tile outlined class="my-1">

              </v-card>
          </v-col>

          <!-- col 2 -->
          <v-col class="" cols="12" sm="8">
            <v-card
                class="ma-1"
                outlined
                tile
                v-for="(job,index) in getAllJobs"
                :key="index"
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">{{job.companyName}}</div>
                        <v-list-item-title class="title mb-1 ">{{job.positionTitle}}</v-list-item-title>
                        <v-list-item-subtitle class="caption">Location: {{job.location}}</v-list-item-subtitle>
                        <v-list-item-subtitle class="caption mb-2">Expected Salary: {{job.expectedSalary}}</v-list-item-subtitle>
                        
                        <v-list-item-subtitle>{{job.jobDescriptions}}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="100"
                        color="grey"
                        v-if="!$vuetify.breakpoint.xsOnly"
                    >
                        <v-img src="../assets/no_company_profile_img.png"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-avatar
                        tile
                        size="60"
                        color="grey"
                        v-else
                    >
                        <v-img src="../assets/no_company_profile_img.png"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                <v-btn text color="primary" small @click.prevent="setJobViewContent(job)">See More</v-btn>
                <v-btn text color="primary" small @click.prevent="setJobViewContent(job)">Apply</v-btn>
                </v-card-actions>
            </v-card>
          </v-col>

      </v-row>

      
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('getJobs')

export default {
    components:{
        
    },
    data:()=>({
    }),
    computed: mapGetters(['getAllJobs']),
    methods:{
        setJobViewContent(content){
            this.$store.dispatch('jobInfo/setJobInfo', content);
            this.$router.push('/view-job')
        }
    }
}

</script>

<style>

</style>