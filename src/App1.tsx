import { Component } from "react"

export default class extends Component<{ date: Date }, { clickCount: number }> {
  constructor(props: { date: Date }) {
    super(props);
    console.log("App component class")
    this.state = {
      clickCount: 0,
    }
  }

  render() {
    return <h1 onClick={() => this.setState(state => ({ clickCount: state.clickCount + 1 }))}>App1</h1>
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
}