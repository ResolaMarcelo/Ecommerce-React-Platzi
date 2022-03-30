import React from 'react'
import  {BrowserRouter, Switch, Route} from "react-router-dom"



//Components
import Home from "../container/Home"
import Checkout from  "../container/Checkout"
import Information from "../container/Information"
import Payment  from  "../container/Payment"
import Success from  "../container/Success"
import NotFound from "../container/NotFound"
import Layout from '../components/Layout'
import AppContext from "../context/AppContext"
import useInitialState from '../hooks/useInitalState'

export default function App() {

  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter>
    <Layout>
    <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/checkout" component={Checkout} />

        <Route exact path="/checkout/information" component={Information} />

        <Route exact path="/checkout/payment" component={Payment} />

        <Route exact path="/checkout/success" component={Success} />

        <Route component={NotFound} />

        {/* Categoria */}

         {/* <Route exact path="/categoria/:categoriaId"></Route> */}

    </Switch>
    </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  )
}
