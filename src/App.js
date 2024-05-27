import "./App.css";
import { ContextProvider } from "./Component/Crud/Context";
import List from "./Component/Crud/List";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <List />
      </ContextProvider>
    </div>
  );
}

export default App;
