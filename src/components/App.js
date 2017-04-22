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
      <div className='App'>
        <header>
          <h1 className='Title'><Link to='/'>The Jabberdexicon</Link></h1>
          <form action='#'>
            <input type='search' placeholder='Search' />
          </form>
        </header>
        <LetterBlock className='Nav' />
        <AddEntry />
        <Route exact path='/' component={Home} />
        <Route path='/entry/:slug' render={(props) => (
          <Entry term='' defintion='' {...props} />
      )} />
        <Route path='/browse/:letter' component={LetterBrowser} />
        {/* <Route path='/addentry' component={AddEntry} /> */}

        <footer>
          <p> Built with React, at the Iron Yard. By Garret Morales </p>
        </footer>
      </div>
    </Router>
  }
}

export default App
