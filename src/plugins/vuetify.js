import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify, {
  options: {
    customProperties: true,
  },
})
/*
--main-body-bg-color: #ffebd6;
  --main-prim-color: #966dd0;
  --main-prim-trans-color: #966dd091;
  --main-second-color: #d1f5dc;
  --main-second-trans-color: #D9FFE3;
*/
export default new Vuetify({
  theme: {
    light: true,
    themes: {
      light: {
        primary: '#966dd0',
        primaryTrans: '#966dd0',
        secondary: '#d1f5dc',
        secondaryTrans: '#D9FFE3',
        accent: '#D1AE82',
        error: '#FF0000',
        success: '#00ff66',
        text: '#000000',
      },
    },
  },
})
