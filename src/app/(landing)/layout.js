import Footer from "@/components/landingPage/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function LandingLayout({ children }) {
  return (
    <section className="h-screen relative">
      {children}
      <Footer />
      <Toaster />
    </section>
  );
}
