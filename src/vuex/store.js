import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state
const state = {
  user: null,
  success: null,
  projections: [{fake: 'news'}, {fake: 'news'}, {fake: 'news'}],
  activeProjection: {
    name: null,
    success: null,
    type: null,
    generalData: null,
    calcSteps: [{
      comp: 'development',
      name: 'Development'
    },
    {
      comp: 'data-integrity',
      name: 'Data Integrity'
    }]
  }
}

const getters = {
  projLength: state => {
    return state.projections.length
  },
  activeFinDrivers: state => {
    return (state.activeProjection.generalData) ? state.activeProjection.generalData.financialDrivers : {}
  },
  activeCalcSettings: state => {
    console.log(state.activeProjection)
    return state.activeProjection.calcSteps
  }
}

// mutations
const mutations = {
  ADD_PROJECTION (state, data) {
    console.log('adding projection', data)
    const newProj = {
      name: data.name,
      success: data.success,
      type: data.type,
      generalData: data,
      calcSteps: [{
        comp: 'development',
        name: 'Development'
      },
      {
        comp: 'data-integrity',
        name: 'Data Integrity'
      }]
    }
    state.projections.push(newProj)
    state.activeProjection = newProj
  },
  SET_ACTIVE_PROJECTION (state, proj) {
    state.activeProjection = proj
  },
  SET_CALC_STRUCTURE (state) {
    let drivers = state.activeProjection.generalData.financialDrivers
    let componentMap = {
      dev: {
        comp: 'development',
        name: 'Development'
      },
      training: {
        comp: 'training',
        name: 'Training Time'
      },
      support: {
        comp: 'support-deflection',
        name: 'Support Deflection'
      },
      dataInt: {
        comp: 'data-integrity',
        name: 'Data Integrity'
      }
    }
    let steps = []
    Object.keys(drivers).forEach(function (key) {
      steps.push(componentMap[drivers[key]])
    })
    state.activeProjection.calcSteps = steps
  }
}

const actions = {
  addProjection ({ commit }, data) {
    commit('ADD_PROJECTION', data)
  },
  setSteps ({ commit }) {
    commit('SET_CALC_STRUCTURE')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
