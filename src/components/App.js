import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route } from 'react-router-dom'
import Entry from './Entry.js'
import Home from './Home.js'
import AddEntry from './AddEntry.js'
import LetterBlock from './LetterBlock.js'
import LetterBrowser from './LetterBrowser.js'

class App extends Component {
  render () {
    return <Router>
      <div>
        <h1><Link to='/'>The Jabberdexicon</Link></h1>
        <LetterBlock />
        <form action='#'>
          <input type='search' />
        </form>
        <AddEntry />
        <Route exact path='/' component={Home} />
        <Route path='/entry/:slug' render={(props) => (
          <Entry term='' defintion='' {...props} />
      )} />
        <Route path='/browse/:letter' component={LetterBrowser} />
      </div>
    </Router>
  }
}

export default App
