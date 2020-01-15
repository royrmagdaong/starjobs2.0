
export default{
    namespaced: true,
    state: {
        jobInfo: null
    },
    getters: {
        getJobInfo: state => state.jobInfo
    },
    actions: {
        setJobInfo: (context,payload) => {
            context.commit('setJobInfo', payload);
        }
    },
    mutations: {
        setJobInfo(state,data){
            state.jobInfo = data;
        }
    }
};