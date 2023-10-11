import "./App.css";
import PlayBackground from "./components/PlayBackground";
import FilterOne from "./components/FilterOne";
import FilterTwo from "./components/FilterTwo";
import Content from "./components/Content";

function App() {
  return (
    <div className="main-container">
      <div className="background-container">
        <PlayBackground />
        <FilterOne />
        <FilterTwo />
        <div className="video-background3"></div>
        <div className="video-background4"></div>
      </div>
      <Content />
    </div>
  );
}

export default App;
