import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import PackagesPage from "./pages/PackagesPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import PlatinumTeamPage from "./pages/PlatinumTeamPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rolam" element={<AboutPage />} />
          <Route path="termekek" element={<ProductsPage />} />
          <Route path="csomagok" element={<PackagesPage />} />
          <Route path="sikertortenetek" element={<SuccessStoriesPage />} />
          <Route path="platinum-team" element={<PlatinumTeamPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="kapcsolat" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="kategoria/:slug" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
