import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
