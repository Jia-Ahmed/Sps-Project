// src/routes/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import ServiceRoutes  from "../components/ServiceRoutes";
import Layout from "../Layout";
import { ComplianceLinks} from "../components/ComplianceRoutes";

// 🔹 Lazy load helper
const lazyImport = (path) => lazy(() => import(path));

// 🔹 Pages (lazy-loaded)
const Home = lazyImport("../pages/Home");

// About
const Contact_Us = lazyImport("../pages/About/Contact_Us");
const AboutUs = lazyImport("../pages/About/AboutUs");


// Pricing
const BasicPlan = lazyImport("../pages/Pricing/BasicPlan");
const StandardPlan = lazyImport("../pages/Pricing/StandardPlan");
const PremiumPlan = lazyImport("../pages/Pricing/PremiumPlan");

// 🔹 Suspense Wrapper (common loader)
const withSuspense = (Component) => (
  <Suspense fallback={<div className="min-h-screen grid place-items-center">Loading...</div>}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: withSuspense(Home) },
      // About
      { path: "/about/contact_us", element: withSuspense(Contact_Us) },
      { path: "/about/about_us", element: withSuspense(AboutUs) },
      
      
      // Pricing
      { path: "/pricing/basic-plan", element: withSuspense(BasicPlan) },
      { path: "/pricing/standard-plan", element: withSuspense(StandardPlan) },
      { path: "/pricing/premium-plan", element: withSuspense(PremiumPlan) },
      // Services
     ...ServiceRoutes,
     //Compliance
     ...ComplianceLinks.map((link) => ({
        path: link.path,
        element: withSuspense(link.component),
      })),
    ],
  },
  {
    path: "*",
    element: (
      <div className="min-h-screen grid place-items-center">
        <div>
          <h1 className="text-3xl font-bold">404</h1>
          <p className="text-gray-600">Page not found</p>
        </div>
      </div>
    ),
  },
]);
