
export default{
    namespaced: true,
    state: {
        applicantProfileInfo: null
    },
    getters: {
        getApplicantProfileInfo: state => state.applicantProfileInfo
    },
    actions: {
        setApplicantProfileInfo: (context,payload) => {
            context.commit('setApplicantProfileInfo', payload);
        }
    },
    mutations: {
        setApplicantProfileInfo(state,data){
            state.applicantProfileInfo = data;
        }
    }
};