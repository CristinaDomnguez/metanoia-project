import { Home } from "./pages/Home/Home";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Resources from "./pages/Resources/Resources.jsx";
import { Centers } from "./pages/Centers/Centers.jsx";
import { Events } from "./pages/Events/Events.jsx";
import { Helps } from "./pages/Helps/Helps.jsx";
import { Admin } from "./pages/Admin/Admin.jsx";
import { NavBarLogin } from "./components/NavBarLogin/NavBarLogin.jsx";
import { IntroResources } from "./pages/Admin/ResourcesForm/IntroResources.jsx";
import { IntroCenters } from "./pages/Admin/CentersForm/IntroCenters.jsx";
import { IntroEvents } from "./pages/Admin/EventsForm/IntroEvents.jsx";

// Configuración del enrutador
const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: "/admin",
        element: (
          <>
            <NavBarLogin />
            <Outlet />
          </>
        ),
        children: [
          {
            path: "/admin",
            element: <Admin />,
          },
          {
            path: "/admin/recursos",
            element: <IntroResources />,
          },
          {
            path: "/admin/centros",
            element: <IntroCenters />,
          },
          {
            path: "/admin/eventos",
            element: <IntroEvents />,
          },
        ],
      },
      {
        element: (
          <>
            <NavBar />
            <Outlet />
            <Footer />
          </>
        ),
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/recursos",
            element: <Resources />,
          },
          {
            path: "/centros",
            element: <Centers />,
          },
          {
            path: "/eventos",
            element: <Events />,
          },
          {
            path: "/ayudas",
            element: <Helps />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    /* Contenedor principal de la aplicación */
    <div className="app">
      <RouterProvider router={router}>ooo</RouterProvider>
    </div>
  );
}
export default App;
