import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { router } from "./Components/Routes/Route";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

      <Toaster />
    </div>
  );
}

export default App;
