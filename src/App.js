import './styles/styles.css'
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import Drawer from "./components/Drawer/Drawer";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
