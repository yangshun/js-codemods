class Foo extends Component {
  render() {
    return (
      <div>
        {this.state.showAlert ? <Alert /> : null}
        {this.state.showAlert ? <Alert /> : false}
        {this.state.hideAlert ? null : <Alert />}
        {this.state.hideAlert ? false : <Alert />}
        {this.state.showAlert ?
          <Alert /> : (this.state.showAlert ? <Alert /> : null)
        }
        {this.state.showAlert ?
          <Alert /> : (this.state.hideAlert ? null : <Alert />)
        }
        {this.state.hideAlert ?
          null : (this.state.showAlert ? <Alert /> : null)
        }
        {this.state.hideAlert ?
          null : (this.state.hideAlert ? null : <Alert />)
        }
      </div>
    )
  }
}
