import Navbar from "@/components/landingPage/Navbar";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
