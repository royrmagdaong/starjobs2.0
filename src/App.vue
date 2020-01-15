<template>
  <v-app>
    <app-bar></app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
import {db, dbFirestore} from './firebasedb'

export default {
  components: {
    'app-bar':AppBar,
  },
  data: () => ({
    //
  }),
  created(){
    db.auth().onAuthStateChanged(() => {
      var curUser = db.auth().currentUser;
      if(curUser == null){

        // clear applicant or company information in vuex when logged out
        this.$store.dispatch('applicantInfo/setApplicantInfo',null);
        this.$store.dispatch('companyInfo/setCompanyInfo',null);
        // clear company jobs once logged out
        this.$store.commit('companyJobs/setCompanyJobs',null);
        // clear search applicants once logged out
        this.$store.commit('getApplicants/setApplicants',null);


        // route to home if the user logged out
        this.$router.push('/home').then(() => {
          // route successfully
        }).catch(() => {
          // error catched navigation duplicated, most common error here...
          // window.console.log(e.name);
        });
        
      }else{

        // populate applicant or company information in vuex depending on who is logged in
        if(curUser.displayName == 'true'){
          var userDoc = dbFirestore.collection("applicant").doc(curUser.uid);
          userDoc.get().then((doc) => {
              if (doc.exists) {
                  //store applicant info in vuex
                  this.$store.dispatch('applicantInfo/setApplicantInfo',doc.data());
              } else {
                  window.console.log("No such document!");
              }
          }).catch((error) => {
              window.console.log("Error getting document:", error);
          });
        }else{
          var companyDoc = dbFirestore.collection("company").doc(curUser.uid);
          companyDoc.get().then((doc) => {
              if (doc.exists) {
                  //store company info in vuex
                  this.$store.dispatch('companyInfo/setCompanyInfo',doc.data());
              } else {
                  window.console.log("No such document!");
              }
          }).catch((error) => {
              window.console.log("Error getting document:", error);
          });
        }

      }
    });
  }
};
</script>
