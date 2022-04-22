import { Outlet } from "react-router-dom";

// Importing local components
import Nav from "./headers/nav";

const App = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
