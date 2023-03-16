const state = () => ({
  items: []
})

// getters
const getters = {
  cartProducts: (state) => {
    return state.items;
  }
}

// actions
const actions = {
  addItemToStandards ({ state, commit }, standard) {
        commit('addItemToStandards', { standard })
    },
    removeStandardItem({commit}, standard) {
      commit('REMOVE_ITEM_FROM_STANDARDS', standard);
    },
    removeAStandard({commit}, index) {
      commit('REMOVE_STANDARD', index);
    },
    clearAllStandards({commit}) {
      commit('CLEAR_ALL_STANDARDS');
    },
}

// mutations
const mutations = {
    addItemToStandards (state, { standard }) {
        state.items.push(standard)
    },
    REMOVE_STANDARD(state, index) {
        state.items.splice(index, 1)
    },
    CLEAR_ALL_STANDARDS(state) {
        state.items = [];
    },
    REMOVE_ITEM_FROM_STANDARDS(state, standard) {
        const itemIndex = state.items.findIndex(item => item.code === standard.code);
        if (itemIndex > -1) {
            state.items.splice(itemIndex, 1)
        }
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
