import {dbFirestore} from '../../firebasedb'


var store = {
    namespaced: true,
    state: {
        companies: null,
        companyIds: null
    },
    getters: {
        getCompanies: (state) => state.companies,
        getCompanyIds: state => state.companyIds
    },
    actions: {
        
        initCompanies: (context) => {

            // check if applicants is already populated
            if(store.state.companies != null){
                window.console.log('companies already initialized, it should be done once')
            }else{
                var companiesDocs = dbFirestore.collection("company");
    
                var docArr = [];
                var ids = [];
        
                companiesDocs.limit(3).get()
                .then((querySnapshot) => {
                    
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        docArr.push(doc.data());
                        ids.push({companyName: doc.data().companyName, id: doc.id, companyEmail:doc.data().companyEmail});
                    });
        
                    context.commit('setCompanies',docArr);
                    context.commit('setCompanyIds',ids);
                })
                .catch(function(error) {
                    window.console.log("Error getting documents: ", error);
                });
            }
        },
        
    },
    mutations: {
        setCompanies: (state, companies) => (state.companies = companies),
        setCompanyIds: (state, ids) => (state.companyIds = ids)
    }
};

export default store;