class Foo extends Component {
  render() {
    return (
      <div>
        <Foo
          prop1="Lorem Ipsum"
          prop2="Lorem Ipsum"
          prop3="Lorem 'Ipsum"
          prop4={'Lorem "Ipsum'}
          prop5="Lorem 'Ipsum"
          prop6={"Lorem \"Ipsum"}
        />
      </div>
    );
  }
}
