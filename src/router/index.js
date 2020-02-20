import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import App from '../app/index'
import Lazy from './lazy.jsx'

import Shop from '../pages/welcome/shop/index.jsx'

const Welcome = Lazy(() => import('../pages/welcome/index.jsx'))
// const Shop = Lazy(() => import('../pages/welcome/shop/index.jsx'))



function BrowserRouter() {
  return (
    <Router basename="/">
      <App>
        <Switch>
          {/* <Route path="/" exact component={() => {
            return <Redirect to="/welcome/shop" />
          }}></Route> */}
          <Route path="/welcome" component={Welcome}></Route>
        </Switch>
      </App>
    </Router>
  )
}

// function WelcomeChildRouter() {
//   return (
//     <Welcome>
//       <Switch>
//         <Route path="/welcome/shop" component={Shop}></Route>
//       </Switch>
//     </Welcome>
//   )
// }

export default BrowserRouter
