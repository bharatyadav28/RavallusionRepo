import Footer from "@/components/landingPage/Footer";

export default function LandingLayout({ children }) {
  return (
    <section className="h-screen relative">
      {children}
      <Footer />
    </section>
  );
}
