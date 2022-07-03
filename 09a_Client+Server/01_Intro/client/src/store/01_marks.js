import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const baseURL = "http://localhost:8080/";
export default new Vuex.Store({
    state: {
        sid: 0,
        avg: 0,
        moduleList: []
    },
    mutations: {
        setMarks(state, data) {
            state.sid = data.sid;
            state.moduleList = data.moduleList;
            state.avg = data.average;
        },
        updateMark(state,obj) {
            let index = state.moduleList.findIndex(p => p.mid === obj.mid);
            console.log(`index: ${index}, mid: ${obj.mid} mark: ${obj.mark}`);
            if (index !== -1) {
                console.log(`mark updated: ${index}, mid: ${obj.mid} mark: ${obj.mark}`);
                state.moduleList[index].mark = obj.mark;
                //compute new average
                let sum = 0, counter = 0;
                state.moduleList.forEach(mod => {
                    sum += parseFloat(mod.mark); counter++;
                })
                state.avg = (sum/counter).toFixed(2);
            } else {
                console.log("Wrong index!")
            }
        }
    },
    actions: {

        loadMarks(context) {
            fetch(baseURL+'v1/marks/101',
                {
                    method: "GET",
                    headers: {'Content-Type': 'application/json'}
                }).then(data => {
                    return data.json()
                }).then(res => {
                    context.commit('setMarks', res);
                });
        }
    },
    modules: {}
})
