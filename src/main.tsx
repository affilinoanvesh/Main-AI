import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import About from './pages/About.tsx';
import CaseStudies from './pages/CaseStudies.tsx';
import CaseStudy from './pages/CaseStudy.tsx';
import Industries from './pages/Industries.tsx';
import Industry from './pages/Industry.tsx';
import Contact from './pages/Contact.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';
import FAQ from './pages/FAQ.tsx';
import NotFound from './pages/NotFound.tsx';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <ScrollToTop />
        <About />
      </>
    ),
  },
  {
    path: "/case-studies",
    element: (
      <>
        <ScrollToTop />
        <CaseStudies />
      </>
    ),
  },
  {
    path: "/case-studies/:id",
    element: (
      <>
        <ScrollToTop />
        <CaseStudy />
      </>
    ),
  },
  {
    path: "/industries",
    element: (
      <>
        <ScrollToTop />
        <Industries />
      </>
    ),
  },
  {
    path: "/industries/:id",
    element: (
      <>
        <ScrollToTop />
        <Industry />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <ScrollToTop />
        <Contact />
      </>
    ),
  },
  {
    path: "/privacy",
    element: (
      <>
        <ScrollToTop />
        <Privacy />
      </>
    ),
  },
  {
    path: "/terms",
    element: (
      <>
        <ScrollToTop />
        <Terms />
      </>
    ),
  },
  {
    path: "/faq",
    element: (
      <>
        <ScrollToTop />
        <FAQ />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <ScrollToTop />
        <NotFound />
      </>
    ),
  },
]);

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </StrictMode>
  );
}