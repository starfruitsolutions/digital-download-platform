import Vue from 'vue'
// mixins
import validationRules from '@/mixins/validationRules'
// Register global components
const requireComponent = require.context(
  // The relative path of the global components folder
  '@/components/global',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get name of component
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1') // Strip the leading `./` and extension from the filename

  // Register component globally
  Vue.component(
    componentName,
    componentConfig.default
  )
})

// mixins
Vue.mixin(validationRules)
