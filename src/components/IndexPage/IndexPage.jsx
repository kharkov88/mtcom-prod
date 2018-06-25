import React, { PropTypes, Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

class IndexPage extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let {url} = this.props.match
    return (
      <div className='index-page bg-1'>

        <Header url={this.props.match.url} />
        <main className='container main'>
          <h1 className='animated zoomIn'>We make fast Google AMP pages</h1>
          <div className='description animated zoomIn'>
            <ul>
              <li>Extend your web presence by adding AMP</li>
              <li>Get higher speed web content</li>
              <li>Obtain privileged view in Google search</li>
            </ul>
          </div>
          <div className='actions row'>
            <div className='grid'>
              <figure className='effect-chico animated zoomInLeft'>
                <Link to='/learn'>
                  <img src='/assets/img/block-image/learn.svg' alt='Not sure I need AMP' />
                  <figcaption>
                    <h2>Not sure you need AMP?</h2>
                  </figcaption>
                </Link>
              </figure>

              <figure className='effect-chico animated zoomInUp'>
                <Link to='/portfolio'>
                  <img src='/assets/img/block-image/portfolio.svg' alt='See portfolio' />
                  <figcaption>
                    <h2>See portfolio</h2>
                  </figcaption>
                </Link>
              </figure>
              <figure className='effect-chico animated zoomInDown'>
                <Link to='/for-free'>
                  <img src='/assets/img/block-image/for-free.svg' alt='Looking for free options' />
                  <figcaption>
                    <h2>Looking for free options</h2>
                  </figcaption>
                </Link>
              </figure>
              <figure className='effect-chico animated zoomInRight'>
                <Link to='/contact-us'>
                  <img src='/assets/img/block-image/contact-us.svg' alt='Contact us' />
                  <figcaption>
                    <h2>Contact us</h2>
                  </figcaption>
                </Link>
              </figure>
            </div>
          </div>
        </main>
        <Footer url={this.props.match.url} />
      </div>
    )
  }
}

export default IndexPage

/*
      <div classNameName='content'>
        <div><h1>We make fast Google AMP pages</h1></div>
        <div classNameName='content-text'>
          <ul>
            <li>Extend your web presence by adding AMP</li>
            <li>Get higher speed web content</li>
            <li>Obtain privileged view in Google search</li>
          </ul>
        </div>
        <div classNameName='content-links'>
          <Link to='/learn'>learn</Link>
          <Link to='/order'>order</Link>
          <Link to='/for-free'>for-free</Link>
          <Link to='/contact-us'>contact-us</Link>
        </div>

      </div>
      */
