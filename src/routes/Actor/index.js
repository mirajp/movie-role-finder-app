import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'actor/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Actor = require('./containers/ActorContainer').default
      const reducer = require('./modules/actor').default

      /*  Add the reducer to the store on key 'actor'  */
      injectReducer(store, { key: 'actor', reducer })

      /*  Return getComponent   */
      cb(null, Actor)

    /* Webpack named bundle   */
    }, 'actor')
  }
})
