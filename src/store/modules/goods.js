import {Commit, Dispatch} from 'vuex'

import {getLogin, getGoods} from '../../server/api'


const state = {
  goodsMsg: {}
}

const mutations = {
  saveInfo(state, data) {
    state.goodsMsg = data || {}
  }
}

const actions = {
  async toGetGoods(context, params) {
    try {
      const response = await getGoods(params)
      const data = response.data;
      context.commit('saveInfo', data);
      return data;
    } catch (error) {
      throw error
    }
  },


}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
