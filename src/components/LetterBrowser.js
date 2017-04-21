import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class LetterBrowser extends Component {
  state = {
    active: []
  }

  componentDidMount () {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=example'
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        active: data
      })
    })
  }

  render () {
    const filtered = this.state.active.filter(item => {
      if (this.props.match.params.letter === 'numbers') {
        return item.term.match(/^\d/)
      } else {
        return item.term[0].toLowerCase() === this.props.match.params.letter
      }
    })

    const words = filtered.map(word => {
      if (filtered) {
        return <li key={word.id}>
          <NavLink to={`/entry/${word.slug}`}>{word.term}</NavLink>
        </li>
      } else {
        return <div>something</div>
      }
    })

    return <div>
      Words that start with <strong>{this.props.match.params.letter.toUpperCase()}</strong>
      <ul className='LetterBrowser'>
        {words}
      </ul>
    </div>
  }
}

export default LetterBrowser
