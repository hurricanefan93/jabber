import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return <div className='Home'>
      <img src='https://img.clipartfest.com/710a9bbe70753134edbfc5e2cd712e09_no-background-clipart-story-story-book-clipart-transparent-background_2400-2257.png' />
      <h3>Random Entries</h3>
      <ul>
        <li><Link to='/entry/foo'>Foo</Link></li>
        <li><Link to='/entry/talk-to-the-duck'>Talk To The Duck</Link></li>
        <li><Link to='/entry/under-the-hood'>Under The Hood</Link></li>
      </ul>
    </div>
  }
}

export default Home
