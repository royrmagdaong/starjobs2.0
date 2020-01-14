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
                v-for="i in 5"
                :key="i"
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">Applicant Name</div>
                        <v-list-item-title class="title mb-1 ">Applicant Job Title</v-list-item-title>
                        <v-list-item-subtitle class="caption">Location: Pasig City</v-list-item-subtitle>
                        <v-list-item-subtitle class="caption mb-2">Expected Salary: P15,000.00 - P20,000.00</v-list-item-subtitle>
                        
                        <v-list-item-subtitle>Applicant Summary, contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="100"
                        color="grey"
                        v-if="!$vuetify.breakpoint.xsOnly"
                        
                    >
                        <v-img src="../assets/no_profile_pic.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-avatar
                        tile
                        size="60"
                        color="grey"
                        v-else
                    >
                        <v-img src="../assets/no_profile_pic.jpg"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                <v-btn text color="primary" small>See More</v-btn>
                <v-btn text color="primary" small>Hire</v-btn>
                </v-card-actions>
            </v-card>
          </v-col>

      </v-row>

      
  </v-container>
</template>

<script>

export default {
    components:{
        
    },
    data:()=>({
    }),
    computed:{
    },
}

</script>

<style>

</style>