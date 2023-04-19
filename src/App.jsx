import "src/index.css";
import Menu from "components/Menu";
import Dashboard from "components/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Dashboard/>
    </div>
  );
};

export default App;
