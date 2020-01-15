<template>
  <v-container>

      <!-- Applicant Profile -->
      <!-- v-if here is just to ensure if application information will not be displayed if null -->
      <v-row no-gutters v-if="getApplicantProfileContent">
          <v-col cols="12" md="4">
              <v-card outlined tile class="my-1">
                <v-container>
                  <v-row class="">
                    <v-col cols="4" class="pb-0">
                        <v-img
                            src="https://myjobstreet.jobstreet.com.ph/myjs11-static/responsive/common/image/resume-no-photo.png"
                            width="100"
                            style="border: 1px solid #ccc;"
                        ></v-img>
                    </v-col>
                    <v-col cols="8" class="pb-0">
                        <p class="title ma-0">{{getApplicantProfileContent.aboutMe.name}}</p>
                        <p class="caption ma-0">{{getApplicantProfileContent.aboutMe.title}}</p>
                    </v-col>
                  </v-row>
                </v-container>
                <v-divider class=" ma-1"></v-divider>
                <v-list>
                    <v-list-item-group v-model="model" mandatory color="primary">
                        <v-list-item
                          v-for="(item, i) in items"
                          :key="i"
                        >
                          <v-list-item-icon>
                              <v-icon v-text="item.icon"></v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                              <v-list-item-title v-text="item.text"></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
              </v-card>
          </v-col>
          <v-col cols="12" md="8" style="height:85%">
            <v-card outlined tile class="ma-1">
              <v-container class="pt-0">







                <!-- EDUCATION -->
                <v-row v-if="items[model].text=='Education'">
                  <v-col cols="12">
                    <span class="title">Education </span>

                    <!-- Education View -->
                    <v-divider></v-divider>
                    <div v-for="(education,index) in getApplicantProfileContent.education" :key="index">
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="3">
                            <div style="position:relative; height:100%;">
                              <p class="body-1 font-weight-bold ma-0">{{education.educationLevel}}</p>
                              <v-divider vertical style="position:absolute; top:0; right:0;" class="hidden-xs-only primary"></v-divider>
                              <v-divider class="hidden-sm-and-up primary"></v-divider>
                            </div>
                          </v-col>
                          <v-col cols="12" sm="9">
                            <p class="body-1 font-weight-medium ma-0">{{education.schoolName}}</p>
                            <p class="ma-0 body-2">{{education.program}}</p>
                            <p class="ma-0 caption">{{education.timeline}}</p>
                          </v-col>
                        </v-row>
                      </v-container>
                      <v-divider></v-divider>
                    </div>
                  </v-col>
                </v-row>









                <!-- EXPERIENCE -->
                <v-row v-if="items[model].text=='Experience'">
                  <v-col cols="12">
                    <span class="title">Experience </span>
                    
                    <v-divider></v-divider>

                    <!-- Experience View -->
                    <div v-for="(experience,index) in getApplicantProfileContent.experience" :key="index">
                      <v-row no-gutters class="pt-2">
                        <v-col cols="4"><p>{{getApplicantProfileContent.experience[index].timeline}}</p></v-col>
                        <v-col cols="8">
                          <p class="title mb-1">{{getApplicantProfileContent.experience[index].companyName}}</p>
                          <p class="caption mb-1 font-italic">{{getApplicantProfileContent.experience[index].jobPosition}}</p>
                          <ul v-for="(responsibility,index2) in getApplicantProfileContent.experience[index].responsibilities" :key="index2">
                            <li><p class="caption mb-1 font-italic">{{responsibility}}</p></li>
                          </ul>
                        </v-col>
                      </v-row>
                      <v-divider class="my-2"></v-divider>
                    </div>
                    
                  </v-col>
                </v-row>







                
                <!-- SKILLS -->
                <v-row v-if="items[model].text=='Skills'">
                  <v-col cols="12">
                    <div>
                      <span class="title">Skills </span>
                    </div>
                    <v-divider></v-divider>
                    <ul class="pt-2" v-for="(skill, index) in getApplicantProfileContent.skills" :key="index">
                      <li>{{skill}}</li>
                    </ul>
                  </v-col>
                </v-row>









                <!-- ABOUT ME -->
                <v-row v-if="items[model].text=='About Me'">
                  <v-col cols="12">
                    <div>
                      <span class="title">About Me </span>
                    </div>

                    <v-divider></v-divider>
                    <v-row no-gutters class="pt-2">
                      <v-col cols="4"><p>Name:</p></v-col>
                      <v-col cols="8"><p>{{getApplicantProfileContent.aboutMe.name}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4"><p>Title:</p></v-col>
                      <v-col cols="8"><p>{{getApplicantProfileContent.aboutMe.title}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Gender:</p></v-col>
                      <v-col cols="8"><p>{{getApplicantProfileContent.aboutMe.gender}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Contact No.</p></v-col>
                      <v-col cols="8"><p>{{getApplicantProfileContent.aboutMe.contact}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Email</p></v-col>
                      <v-col cols="8"><p>{{getApplicantProfileContent.aboutMe.email}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Date of Birth</p></v-col>
                      <v-col cols="8"><p>{{getApplicantProfileContent.aboutMe.dateOfBirth}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Address</p></v-col>
                      <v-col cols="8"><p>{{getApplicantProfileContent.aboutMe.address}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Nationality</p></v-col>
                      <v-col cols="8"><p>{{getApplicantProfileContent.aboutMe.nationality}}</p></v-col>
                    </v-row>
                  </v-col>
                </v-row>







                <!-- RESUME -->
                <v-row v-if="items[model].text=='Resume'">
                  <v-col cols="12">
                    <p class="title">Resume</p>
                    <v-divider></v-divider>
                  </v-col>
                  <v-col cols="12" class="text-center">
                    <v-btn color="primary">Download Resume <v-icon>mdi-download</v-icon></v-btn>
                  </v-col>
                </v-row>

              </v-container>
            </v-card>
          </v-col>

      </v-row>

  </v-container>
</template>

<script>
export default {
    data:()=>({
        items: [
          {
            icon: 'mdi-inbox',
            text: 'Education',
          },
          {
            icon: 'mdi-star',
            text: 'Experience',
          },
          {
            icon: 'mdi-send',
            text: 'Skills', 
          },
          {
            icon: 'mdi-email-open',
            text: 'About Me',
          },
          {
            icon: 'mdi-download',
            text: 'Resume',
          },
        ],
        model: 0,
    }),
    computed: {
      getApplicantProfileContent(){
        return this.$store.getters['applicantProfile/getApplicantProfileInfo'];
      }
    },
    methods:{
      getItem(val){
        if(val==0){
          return 'Education';
        }else if(val==1){
          return 'Experience';
        }else if(val==2){
          return 'Skills';
        }else if(val==3){
          return 'About Me';
        }else if(val==4){
          return 'Resume';
        }
      },
    }
}
</script>

<style>

</style>