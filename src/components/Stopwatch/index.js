import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeInSeconds: 0,
  }

  onClickStartButton = () => {
    this.timerId = setInterval(this.tick, 1000)
    this.setState({
      isTimerRunning: true,
    })
  }

  onClickStopButton = () => {
    clearInterval(this.timerId)
    this.setState({
      isTimerRunning: false,
    })
  }

  onClickResetButton = () => {
    clearInterval(this.timerId)
    this.setState({
      isTimerRunning: false,
      timeInSeconds: 0,
    })
  }

  tick = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="card-container">
          <div className="flex-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-image"
            />
            <p>Timer</p>
          </div>
          <p className="time">{time}</p>
          <div className="button-container">
            <button
              type="button"
              className="start-button"
              onClick={this.onClickStartButton}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-button"
              onClick={this.onClickStopButton}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.onClickResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
