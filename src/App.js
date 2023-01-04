import { RouterProvider } from "react-router-dom";
import "./App.css";

import { router } from "./Components/Routes/Route";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

      <h1>hello</h1>
    </div>
  );
}

export default App;
