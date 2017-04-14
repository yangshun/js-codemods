class Foo extends Component {
  render() {
    return (
      <div>
        <Foo
          header="Lorem Ipsum"
          message="dolor sit amet"
        />
        <Foo header="Lorem Ipsum" message="dolor sit amet" />
      </div>
    );
  }
}
