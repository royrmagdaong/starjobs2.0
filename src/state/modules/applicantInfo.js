
export default{
    namespaced: true,
    state: {
        applicantInfo: null
    },
    getters: {
        getApplicantInfo: state => state.applicantInfo
    },
    actions: {
        setApplicantInfo: (context,payload) => {
            context.commit('setApplicantInfo', payload);
        }
    },
    mutations: {
        setApplicantInfo(state,data){
            state.applicantInfo = data;
        }
    }
};