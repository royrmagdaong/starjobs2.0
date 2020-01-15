import {db,dbFirestore} from '../../firebasedb'

var store = {
    namespaced: true,
    state: {
        companyJobs: null
    },
    getters: {
        getCompanyJobs: state => state.companyJobs
    },
    actions: {
        initCompanyJobs: (context) => {
            
            if(store.state.companyJobs != null){
                window.console.log('company jobs already populated, it should be done once')
            }else{
                var jobPostDocs = dbFirestore.collection("JobPosts").where("uid", "==", db.auth().currentUser.uid);

                var docArr = [];

                jobPostDocs.get()
                .then((querySnapshot) => {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        docArr.push(doc.data());
                    });

                    context.commit('setCompanyJobs',docArr);
                })
                .catch(function(error) {
                    window.console.log("Error getting documents: ", error);
                });
            }
        }

    },
    mutations: {
        setCompanyJobs(state,data){
            state.companyJobs = data;
        }
    }
};

export default store;