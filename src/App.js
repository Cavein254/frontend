import Topbar from "./components/Header/Navbar";
import Subsection from "./components/Content/Subsection/Subsection";
import Hero from "./components/Content/Hero/Hero";
import Questions from "./components/Questions/Questions";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Questions />
      <Questions />
      <Questions />
    </div>
  );
}

export default App;
