export const state = () => {
  return {
    list_category: []
  };
};

export const mutations = {
  SET_LIST_CATEGORY: (state, payload) => {
    state.list_category = payload;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    const { data } = await $axios.get("/ListCategory/");
    commit("SET_LIST_CATEGORY", data);
  }
};
