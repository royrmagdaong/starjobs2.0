
export default{
    namespaced: true,
    state: {
        companyProfileInfo: null,
        companyJobs: null
    },
    getters: {
        getCompanyProfileInfo: state => state.companyProfileInfo,
        getCompanyJobs: state => state.companyJobs
    },
    actions: {
        setCompanyProfileInfo: (context,payload) => {
            context.commit('setCompanyProfileInfo', payload);
        },
        setCompanyJobs: (context,payload) => {
            context.commit('setCompanyJobs', payload);
        }
    },
    mutations: {
        setCompanyProfileInfo(state,data){
            state.companyProfileInfo = data;
        },
        setCompanyJobs(state,data){
            state.companyJobs = data;
        }
    }
};