
export default{
    namespaced: true,
    state: {
        companyInfo: null
    },
    getters: {
        getCompanyInfo: state => state.companyInfo
    },
    actions: {
        setCompanyInfo: (context,payload) => {
            context.commit('setCompanyInfo', payload);
        }
    },
    mutations: {
        setCompanyInfo(state,data){
            state.companyInfo = data;
        }
    }
};