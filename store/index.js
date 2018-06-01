import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      coverImage: 'https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/16716181_681429478727658_4106396203323969024_o.jpg?_nc_cat=0&oh=16cc263eb7ab724f5ad20b35ea971621&oe=5B764174'
    },
    actions: {},
    mutations: {},
    getters: {
      getCoverImage(state) {
        return state.coverImage
      }
    }
  })
}

export default createStore


