import Navbar from "@/components/layouts/public";

export default function PublicLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "de" | "en" }>;
}>) {
  return (
    <>
      <Navbar params={params} />
      <main className="flex-grow">{children}</main>
    </>
  );
}
