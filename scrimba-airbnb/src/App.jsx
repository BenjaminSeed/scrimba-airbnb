import "./App.css";
import Card from "./components/Card";
import "../src/styles/Card.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./Data";

function App() {
  const newData = data.map((info) => {
    return <Card key={info.id} {...info} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards--list">{newData}</section>
    </>
  );
}

export default App;
