import AuthGuard from "@/components/AuthGuard";
import Header from "@/components/Header";

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <section>
        <Header />
        {children}
      </section>
    </AuthGuard>
  );
}
