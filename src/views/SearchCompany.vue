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
                v-for="(company, index) in getCompanies"
                :key="index"
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="title mb-1 ">{{ company.companyName }}</v-list-item-title>
                        <v-list-item-subtitle class="caption">Location: Pasig City</v-list-item-subtitle>
                        <v-list-item-subtitle class="caption">Employee count: 40-50 employees</v-list-item-subtitle>
                        <v-list-item-subtitle>Company Summary, contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</v-list-item-subtitle>
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
                <v-btn text color="primary" small @click.prevent="setCompanyProfileContent(company)">See More</v-btn>
                <v-btn text color="primary" small @click.prevent="setCompanyProfileContent(company)">Apply</v-btn>
                </v-card-actions>
            </v-card>
          </v-col>

      </v-row>

      
  </v-container>
</template>

<script>
import {dbFirestore} from '../firebasedb'

export default {
    components:{
        
    },
    data:()=>({
    }),
    created(){
        this.$store.dispatch('getCompanies/initCompanies');
    },
    computed:{
        getCompanies(){
            return this.$store.getters['getCompanies/getCompanies'];
        },
        getCompanyIds(){
            return this.$store.getters['getCompanies/getCompanyIds'];
        }
    },
    methods:{
        setCompanyProfileContent(content){
            this.$store.dispatch('companyProfile/setCompanyProfileInfo', content);

            const companyId = this.getCompanyIds.find(companyId => {
                return (companyId.companyName === content.companyName && companyId.companyEmail === content.companyEmail);
            });


            var jobPostDocs = dbFirestore.collection("JobPosts").where("uid", "==", companyId.id);
            var docArr = [];
            jobPostDocs.get()
            .then((querySnapshot) => {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    docArr.push(doc.data());
                });

                this.$store.dispatch('companyProfile/setCompanyJobs', docArr);
            })
            .catch(function(error) {
                window.console.log("Error getting documents: ", error);
            });
            
            // route to company profile view
            this.$router.push('/view-company')
        }
    }
}

</script>

<style>

</style>