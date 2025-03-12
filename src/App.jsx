import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/about/AboutUs";
import Background from "./components/about/Background";
import Resources from "./components/resources/Resources";
import SupportUs from "./components/support/SupportUs";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Navbar from "./components/constant/Navbar";
import Footer from "./components/constant/Footer";
import Hero from "./components/home/Hero";
import Funding from "./components/funding/Funding";
import ProductsAndService from "./components/productandservice/ProductsAndService";
import AdminLogin from './components/admin/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPanel from './components/admin/AdminPanel';
import ProductList from './components/admin/ProductList';
import GalleryList from './components/admin/GalleryList';
import ProductForm from "./components/admin/forms/ProductForm";
import GalleryForm from "./components/admin/forms/GalleryForm";
import ResourceForm from './components/admin/forms/ResourceForm';
import ResourceList from './components/admin/ResourceList';
import SupportForm from './components/admin/forms/SupportForm';
import SupportersView from './components/admin/SupportersView';
import AddMember from './components/admin/pages/AddMember';
import AdminMemberList from './components/admin/MemberList';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/background" element={<Background />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/products" element={<ProductsAndService />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/add-product" element={<ProtectedRoute><ProductForm /></ProtectedRoute>} />
          <Route path="/add-gallery" element={<ProtectedRoute><GalleryForm /></ProtectedRoute>} />
          <Route path="/add-resource" element={<ProtectedRoute><ResourceForm /></ProtectedRoute>} />
          <Route path="/add-supporter" element={<ProtectedRoute><SupportForm /></ProtectedRoute>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/adminpanel" element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          } />
          <Route path="/admin/products" element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          } />
          <Route path="/admin/gallery" element={
            <ProtectedRoute>
              <GalleryList />
            </ProtectedRoute>
          } />
          <Route path="/admin/resources" element={
            <ProtectedRoute>
              <ResourceList />
            </ProtectedRoute>
          } />
          <Route path="/admin/supporters" element={
            <ProtectedRoute>
              <SupportersView />
            </ProtectedRoute>
          } />
          <Route path="/add-member" element={<ProtectedRoute><AddMember /></ProtectedRoute>} />
          <Route path="/admin/members" element={<ProtectedRoute><AdminMemberList /></ProtectedRoute>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
