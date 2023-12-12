import type { App } from 'vue'
import ExampleApp from './components/cn.oxywen/ExampleApp.vue'

export { ExampleApp }

const VegaDesktopApplications = {
  install: (app: App) => {
    app.component('ExampleApp', ExampleApp)
  }
}
export default VegaDesktopApplications
