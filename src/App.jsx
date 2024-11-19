import Exercises from "./components/Exercises.jsx";
import Exercises2 from "./components/Exercises2.jsx";
import Header from "./components/header.jsx";

function App() {
  const data = [
    {img: "./src/images/html.png", 
      title: "Title1", 
      description: "Lorem1"
    },
    {img: "./src/images/html.png", 
      title: "Title2", 
      description: "Lorem2"
    },
    {img: "./src/images/html.png", 
      title: "Title3", 
      description: "Lorem3"
    }
  ];
  return (
    <>
      {/* <Exercises /> */}
      {/* <Exercises2 /> */}
      <Header 
      img={data[0].img} 
      title={data[0].title} 
      description={data[0].description}/>
      <Header 
      img={data[1].img}
      title={data[1].title}
      description={data[1].description}/>
      <Header 
      img={data[2].img}
      title={data[2].title}
      description={data[2].description}/>
    </>
  );
}

export default App;
