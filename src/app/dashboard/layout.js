import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function DashboardLayout({ children }) {
  return <section className="md:pt-16 md:px-32 min-h-screen bg-[var(--Surface, #040C19)]">
    <DashboardNavbar/>
    {children}
  </section>;
}
