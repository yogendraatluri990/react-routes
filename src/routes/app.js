import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <div>
      <div className="tile-container">
        <h1 className="text-muted">Welcome to React Routes</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
