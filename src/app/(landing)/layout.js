import Footer from "@/components/common/Footer";

export default function LandingLayout({ children }) {
  return (
    <section>
      {children}
      <Footer />
    </section>
  );
}
