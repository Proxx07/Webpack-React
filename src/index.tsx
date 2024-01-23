import {Suspense} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {App} from "@/App";
import AboutLazy from "@/pages/about/About.lazy";
import ShopLazy from "@/pages/shop/Shop.lazy";

const root = document.querySelector('#root')

const app = createRoot(root)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/about',
        element: <Suspense fallback='Loading...'> <AboutLazy/> </Suspense>
      },

      {
        path: '/shop',
        element: <Suspense fallback='Loading...'> <ShopLazy/> </Suspense>
      }
    ]
  },
]);

app.render(
  <RouterProvider router={router}/>
)