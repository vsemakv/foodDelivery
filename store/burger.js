export const state = () => ({
    isShowBurger: false,
    isScrolled: false,
    switch: true,
    isEndPage: false
  })
  
  export const mutations = {
    open(state) {
        state.isShowBurger = true
        document.body.style.cssText=`
            overflow:hidden;
            top:-${this.scrollPosition}px;
            left:0'
            height:100%;
            width:100%;
        `;
        document.documentElement.style.scrollBehavior="unset";
    },
    close(state) {
        state.isShowBurger = false
        document.body.style.cssText=``;
        window.scroll({top: this.scrollPosition})
        document.documentElement.style.scrollBehavior="";
    },
    scroll(state) { 
        state.isScrolled = true
    },
    scrollBack(state) { 
        state.isScrolled = false
    },
    switchOn(state) { 
      state.switch = true
      localStorage.setItem('switch', state.switch)
    },
    switchOff(state) { 
      state.switch = false
      localStorage.setItem('switch', state.switch)
    },
    switchInfo(state, payload){
      state.switch = payload
      localStorage.setItem('switch', JSON.parse(state.switch))
    },
    toEndPage(state){
      state.isEndPage = true
    },
    fromEndPage(state){
      state.isEndPage = false
    }
  }
  
  export const getters = {
    getBurger: (state) => { 
      return state.isShowBurger;
    },
    getScroll: (state) => { 
      return state.isScrolled;
    },
    getSwitch: (state) => { 
      return state.switch;
    },
    getEnd: (state) => { 
      return state.isEndPage;
    },
  }
  
  export const actions = {
    toggle({ commit, state }) {
      if (state.isShowBurger === true) {
        commit('close')
      } else {
        commit('open')
      }
    },
    close({ commit }) {
        commit('close')
    },
    initSwitch({commit}){ 
      const switchInfo = localStorage.getItem('switch')
      if (switchInfo) {
        commit('switchInfo', JSON.parse(switchInfo))
      }
    }
  }