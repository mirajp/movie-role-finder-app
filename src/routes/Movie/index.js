import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'movie/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Movie = require('./containers/MovieContainer').default
      const reducer = require('./modules/movie').default

      /*  Add the reducer to the store on key 'movie'  */
      injectReducer(store, { key: 'movie', reducer })

      /*  Return getComponent   */
      cb(null, Movie)

    /* Webpack named bundle   */
    }, 'movie')
  }
})
