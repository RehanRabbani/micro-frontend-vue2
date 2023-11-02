// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// const state = {
//   comments: [],
// };

// const mutations = {
//   addComment(state, comment) {
//     state.comments.push(comment);
//   },
// };

// const actions = {
//   postComment({ commit }, comment) {
//     commit("addComment", comment);
//   },
// };

// const getters = {
//   comments: (state) => {
//     return state.comments;
//   },
// };

// export default new Vuex.Store({
//   state,
//   mutations,
//   actions,
//   getters,
// });

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    comments: [],
  },

  mutations: {
    addComment(state, comment) {
      state.comments.push(comment);
    },
  },

  actions: {
    postComment({ commit }, comment) {
      commit("addComment", comment);
    },
  },

  getters: {
    comments: (state) => {
      return state.comments;
    },
  },
});

export default store;
