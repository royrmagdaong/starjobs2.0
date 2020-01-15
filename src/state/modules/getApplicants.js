import {dbFirestore} from '../../firebasedb'


var store = {
    namespaced: true,
    state: {
        applicants: null
    },
    getters: {
        getApplicants: (state) => state.applicants
    },
    actions: {
        
        // initStore here are auto run once the webpage loads
        initApplicants: (context) => {

            // check if applicants is already populated
            if(store.state.applicants != null){
                window.console.log('applicants already initialized, it should be done once')
            }else{
                var applicantsDocs = dbFirestore.collection("applicant");
    
                var docArr = [];
        
                applicantsDocs.limit(3).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        docArr.push(doc.data());
                    });
        
                    context.commit('setApplicants',docArr);
                })
                .catch(function(error) {
                    window.console.log("Error getting documents: ", error);
                });
            }
        },
        
    },
    mutations: {
        setApplicants: (state, applicants) => (state.applicants = applicants),
    }
};

export default store;