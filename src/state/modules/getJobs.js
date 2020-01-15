import {dbFirestore} from '../../firebasedb'


export default{
    namespaced: true,
    state: {
        jobs: []
    },
    getters: {
        getAllJobs: (state) => state.jobs
    },
    actions: {
        
        // initStore here are auto run once the webpage loads
        initStore: (context) => {

            var jobPostDocs = dbFirestore.collection("JobPosts");
    
            var docArr = [];
    
            jobPostDocs.get()
            .then((querySnapshot) => {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    docArr.push(doc.data());
                });
    
                context.commit('setJobs',docArr);
            })
            .catch(function(error) {
                window.console.log("Error getting documents: ", error);
            });
        },
        
    },
    mutations: {
        setJobs: (state, jobs) => (state.jobs = jobs),
    }
};