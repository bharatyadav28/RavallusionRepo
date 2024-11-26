import Navbar from "@/components/common/Navbar";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
