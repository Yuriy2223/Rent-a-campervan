import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const DeveloperPage = lazy(() => import("./pages/DeveloperPage/DeveloperPage"));
const Layout = lazy(() => import("./components/Layout/Layout"));

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/developer" element={<DeveloperPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
      <Toaster />
    </Suspense>
  );
};

export default App;
