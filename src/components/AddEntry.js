import React, { Component } from 'react'

class AddEntry extends Component {
  state = {
    active: {}
  }

  addWord = (newTerm, newDef) => {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=example'
    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'entry': {
          'term': newTerm,
          'definition': newDef
        }
      })
    })
  }

  _submit = e => {
    e.preventDefault()
    this.addWord(this.refs.newTerm.value, this.refs.newDef.value)
    // this.refs.newTerm.value = 'New Term'
    // this.refs.newDef.value = 'New Definition'
    this.props.history.push('/')
  }

  _focus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  render () {
    return <form onSubmit={this._submit}>
      <h3> Add your own word...</h3>
      <input onFocus={this._focus} type='text' ref='newTerm' placeholder='New Term' />
      <textarea onFocus={this._focus} type='text' ref='newDef' placeholder='New Definition' />
      <input type='submit' value='Add a new word' />
    </form>
  }
}

export default AddEntry
