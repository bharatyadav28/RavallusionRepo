import Footer from "@/components/Footer";

export default function LandingLayout({ children }) {
  return (
    <section className="h-screen relative">
      {children}
      <Footer />
    </section>
  );
}
