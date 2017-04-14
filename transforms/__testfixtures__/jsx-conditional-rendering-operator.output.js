class Foo extends Component {
  render() {
    return (
      <div>
        {this.state.showAlert && <Alert />}
        {this.state.showAlert && <Alert />}
        {!this.state.hideAlert && <Alert />}
        {!this.state.hideAlert && <Alert />}
        {this.state.showAlert ?
          <Alert /> : (this.state.showAlert && <Alert />)
        }
        {this.state.showAlert ?
          <Alert /> : (!this.state.hideAlert && <Alert />)
        }
        {!this.state.hideAlert && (this.state.showAlert && <Alert />)
        }
        {!this.state.hideAlert && (!this.state.hideAlert && <Alert />)
        }
      </div>
    );
  }
}
