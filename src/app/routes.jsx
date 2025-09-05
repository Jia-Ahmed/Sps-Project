// src/routes/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import ServiceRoutes from "../components/ServiceRoutes.jsx";
import Layout from "../Layout.jsx";
import { ComplianceLinks } from "../components/ComplianceRoutes.jsx";

// 🔹 Pages (lazy-loaded, direct import)
const Home = lazy(() => import("../pages/Home.jsx"));

// About
const Contact_Us = lazy(() => import("../pages/About/Contact_Us.jsx"));
const AboutUs = lazy(() => import("../pages/About/AboutUs.jsx"));

// Pricing
const BasicPlan = lazy(() => import("../pages/Pricing/BasicPlan.jsx"));
const StandardPlan = lazy(() => import("../pages/Pricing/StandardPlan.jsx"));
const PremiumPlan = lazy(() => import("../pages/Pricing/PremiumPlan.jsx"));

// 🔹 Suspense Wrapper
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

      // Compliance
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
