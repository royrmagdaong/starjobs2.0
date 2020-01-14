<template>
  <div>
      <v-app-bar dark elevation="1" fixed app dense >

        <v-btn text class="primary--text title" router-link to="/">STARJOBS</v-btn>
        <v-divider class="mx-4 hidden-sm-and-down" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text class="caption font-weight-bold hidden-sm-and-down" router-link to="/search-jobs" color="primary">Search Jobs</v-btn>
          <v-btn text class="caption font-weight-bold hidden-sm-and-down" router-link to="/search-company" color="primary">Search Company</v-btn>
          <v-btn text class="caption font-weight-bold hidden-sm-and-down" router-link to="/search-applicant" color="primary">Search Applicant</v-btn>
          <v-btn text router-link to="/login" color="primary" class="hidden-sm-and-down caption font-weight-bold">LOG IN</v-btn>
          <v-btn text router-link to="/sign-up" color="primary" class="hidden-sm-and-down caption font-weight-bold">SIGN UP</v-btn>

          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" icon class="hidden-sm-and-down caption font-weight-bold">
                <v-avatar size="35" class="grey"></v-avatar>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                router-link
                to="/home"
              >
                <v-list-item-title class="caption">Home</v-list-item-title>
              </v-list-item>

              <v-list-item
                router-link
                to="/search-jobs"
              >
                <v-list-item-title class="caption" >Search Jobs</v-list-item-title>
              </v-list-item>

              <v-list-item
                router-link
                to="/post-job"
              >
                <v-list-item-title class="caption" >Post a Job</v-list-item-title>
              </v-list-item>

              <v-list-item
                router-link
                to="/profile"
              >
                <v-list-item-title class="caption" >Profile</v-list-item-title>
              </v-list-item>

              <v-list-item
                router-link
                to="/company-profile"
              >
                <v-list-item-title class="caption" >Company Profile</v-list-item-title>
              </v-list-item>

              <v-list-item
                @click.prevent="logout()"
              >
                <v-list-item-title class="caption">Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

        </v-toolbar-items>
        <v-app-bar-nav-icon  class="hidden-md-and-up primary--text" @click.prevent="drawer=!drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    

    <v-navigation-drawer v-model="drawer" fixed temporary dark>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title >John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>

        <v-list-item router-link to="/home">
          <v-list-item-content>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router-link to="/profile">
          <v-list-item-content>
            <v-list-item-title >Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router-link to="/company-profile">
          <v-list-item-content>
            <v-list-item-title >Company Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router-link to="/post-job">
          <v-list-item-content>
            <v-list-item-title >Post A Job</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router-link to="/search-jobs">
          <v-list-item-content>
            <v-list-item-title >Search Job</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router-link to="/search-Company">
          <v-list-item-content>
            <v-list-item-title >Search Company</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        

        <v-list-item router-link to="/login">
          <v-list-item-content>
            <v-list-item-title >Log in</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router-link to="/sign-up">
          <v-list-item-content>
            <v-list-item-title >Sign Up</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click.prevent="logout()">
          <v-list-item-content>
            <v-list-item-title >Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {db} from '../firebasedb'

export default {
  data:()=>({
    drawer:false,
    isLogin:false
  }),
  created(){
  },
  methods:{
    logout(){
      db.auth().signOut();
      window.console.log('Logged Out');
    }
  },
  computed: {
  }
}
</script>

<style>

</style>