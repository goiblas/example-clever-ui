import Card from "./components/Card";
import Button from "./components/Button";
import Heading from "./components/Heading";

function App() {
  return (
    <Card>
      <Heading as="h1" size="4xl">
        Header Level 1
      </Heading>
      <Heading as="h2" size="3xl">
        Header Level 2
      </Heading>
      <Heading as="h3" size="2xl">
        Header Level 3
      </Heading>
      <Heading as="h4" size="xl">
        Header Level 4
      </Heading>
      <Heading as="h5" size="lg">
        Header Level 5
      </Heading>

      <Button>Button styled</Button>
    </Card>
  );
}

export default App;
