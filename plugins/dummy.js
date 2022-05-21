export default {
   install: (app, options) => {
      // read from defined options when using plugins
      const { dataFromOption } = options

      // inject method
      app.config.globalProperties.log = (message) => {
         // if the message is empty then dataFromOption is displayed
         console.log('global method : '+ (message || dataFromOption))
      }

      // inject directive
      app.directive('focus', {
         // applied when hooks mounted
         mounted (el, binding, vnode, oldVnode) {
            console.log('global directive : set focus')
            el.focus()
         }
      })
      
      // inject mixins
      app.mixin({
         // inject hooks created
         created() {
            console.log('mixin created : '+ dataFromOption)
         }
      })
   }
}