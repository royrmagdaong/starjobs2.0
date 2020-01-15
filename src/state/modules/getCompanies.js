import {dbFirestore} from '../../firebasedb'


var store = {
    namespaced: true,
    state: {
        companies: null
    },
    getters: {
        getCompanies: (state) => state.companies
    },
    actions: {
        
        initCompanies: (context) => {

            // check if applicants is already populated
            if(store.state.companies != null){
                window.console.log('companies already initialized, it should be done once')
            }else{
                var companiesDocs = dbFirestore.collection("company");
    
                var docArr = [];
        
                companiesDocs.limit(3).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        docArr.push(doc.data());
                    });
        
                    context.commit('setCompanies',docArr);
                })
                .catch(function(error) {
                    window.console.log("Error getting documents: ", error);
                });
            }
        },
        
    },
    mutations: {
        setCompanies: (state, companies) => (state.companies = companies),
    }
};

export default store;