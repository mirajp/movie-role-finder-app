import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'director/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Director = require('./containers/DirectorContainer').default
      const reducer = require('./modules/director').default

      /*  Add the reducer to the store on key 'director'  */
      injectReducer(store, { key: 'director', reducer })

      /*  Return getComponent   */
      cb(null, Director)

    /* Webpack named bundle   */
    }, 'director')
  }
})
