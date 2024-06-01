import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["goku", "vegetta", "piccolo"];
  return (
    <Card>
      <CardBody title="hola mundo" text="canchito" />
      <List data={list} />
    </Card>
  );
}

export default App;
