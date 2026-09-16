import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';

const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
