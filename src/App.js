import Card from "./components/Card";
import Button from "./components/Button";
import Heading from "./components/Heading";

// heading props as="h1" size="4xl"
function App() {
  return (
    <Card>
      <Heading>Header Level 1</Heading>
      <Heading>Header Level 2</Heading>
      <Heading>Header Level 3</Heading>
      <Heading>Header Level 4</Heading>
      <Heading>Header Level 5</Heading>

      <Button>Button styled</Button>
    </Card>
  );
}

export default App;
