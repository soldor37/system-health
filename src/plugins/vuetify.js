import Vue from 'vue'
import Vuetify from 'vuetify/lib'

// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#48BBC8', 
        secondary: '#F3F8FD', 
        error: '#F44336',
        success: '#27AE60',
        warning: '#F2994A',
      },
    },
  },
})