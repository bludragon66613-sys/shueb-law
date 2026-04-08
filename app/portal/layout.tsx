export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Portal uses its own header (PortalHeader), not the main site header/footer
  return <div className="min-h-screen bg-bg-primary">{children}</div>;
}
