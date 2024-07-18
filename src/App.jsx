import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestroMenupage from "./components/RestroMenupage";
// import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";


const User = lazy(() => import('./components/Grocery'))

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/restaurant/:resId',
        element: <RestroMenupage />
      },
      {
        path: '/user',
        element: (
          <Suspense>
            <User />
          </Suspense>
        )
      }
    ],
    errorElement: <Error />
  },

]);

export default App;
