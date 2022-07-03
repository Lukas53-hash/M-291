import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const baseURL = "https://swapi.dev/api/";
export default new Vuex.Store({
    state: {
        iphones: [],
        abos: []
    },
    mutations: {
        setIphones(state, iphones) {
            state.iphones = iphones;
        },
        setAbos(state, abos) {
            state.abos = abos;
        }
    },
    actions: {
        loadIphones(context) {
            fetch(baseURL + "Iphones")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                context.commit('setIphones', data.results);
            }).catch(error => {
                console.error(error);
            });
        },
        loadAbos(context) {
            fetch(baseURL + "starships")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                context.commit('setAbos', data.results);
            }).catch(error => {
                console.error(error);
            });
        }
    },
    modules: {}
})
