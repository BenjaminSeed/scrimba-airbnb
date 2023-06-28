import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./Data";

function App() {
  const newData = data.map((info) => {
    return (
      <Card
        title={info.title}
        description={info.description}
        coverImg={info.coverImg}
        rating={info.stats.rating}
        price={info.price}
        reviewCount={info.stats.reviewCount}
        location={info.location}
        openSpots={info.openSpots}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      {newData}
      {/* <Card
        img={"../src/assets/image 12.png"}
        rating="5.0"
        reviewCount={6}
        location="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      /> */}
    </>
  );
}

export default App;
