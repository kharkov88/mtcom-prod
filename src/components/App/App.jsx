import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'

import Footer from 'components/Footer'
import Header from 'components/Header'

import NotFound from 'components/NotFound'
import IndexPage from 'components/IndexPage'
import LearnPage from 'components/LearnPage'
import OrderPage from 'components/OrderPage'
import ContactUsPage from 'components/ContactUsPage'
import PortfolioPage from 'components/SharePages/PortfolioPage'
import ForFreePage from 'components/ForFreePage'

import TermsOfService from 'components/Footer/TermsOfService'
import PrivacyPolicy from 'components/Footer/PrivacyPolicy'

import './App.css'

class App extends Component {
  componentDidMount () {
    let pre = document.querySelector('#preloader')
    if(pre) {
      setTimeout(() => {
        document.body.removeChild(pre)
      }, 600)
    }
    ReactGA.initialize('UA-121315535-1', {
      debug: true,
      titleCase: false
    })
    ReactGA.event({
      category: 'spa-mtcom',
      action: 'view',
      label: 'path:'+location.pathname,
      nonInteraction: true
    })
  }
  render () {
    let { url } = this.props
    console.log(this.props)
    return (
      <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='/learn' component={LearnPage} />
        <Route path='/portfolio' component={PortfolioPage} />
        <Route path='/public-offer' component={TermsOfService} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Route path='/order' component={OrderPage} />
        <Route path='/contact-us' component={ContactUsPage} />
        <Route path='/for-free' component={ForFreePage} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default App
// <Route path='/portfolio' component={PortfolioPage} />
