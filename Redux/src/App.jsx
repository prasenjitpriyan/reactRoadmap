import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  return (
    <div className="p-2">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
