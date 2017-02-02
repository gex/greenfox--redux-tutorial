import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions'

class App extends Component {
  onClick() {
    const { increment } = this.props.actions
    increment(1)
  }

  render() {
    const { title, counter } = this.props
    return (
      <div>
        <h1>{title}</h1>
        <p>
          Counter: {counter}
        </p>
        <p>
          <button onClick={this.onClick.bind(this)}>
            ++
          </button>
        </p>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  counter: state.counter.value
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
