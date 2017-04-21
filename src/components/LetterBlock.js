import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class LetterBlock extends Component {
  letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  render () {
    const searchLetters = this.letters.map((letter, i) => {
      return <li key={i}>
        <NavLink to={`/browse/${letter}`}>
          {letter.toUpperCase()}
        </NavLink>
      </li>
    })

    return <ul>
      {searchLetters}
      <li>
        <NavLink to={`/browse/numbers`}>
          #
        </NavLink>
      </li>
    </ul>
  }
}

export default LetterBlock
