import XButton from './components/button/XButton.vue'
import XInput from './components/input/XInput.vue'

import type { App } from 'vue'

export { XButton, XInput }

const UIComponents = {
  install: (app: App) => {
    app.component('XButton', XButton)
    app.component('XInput', XInput)
  }
}
export default UIComponents
