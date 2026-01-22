import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deep Dev Solutions",
  description:
    "A hybrid digital agency bridging the gap between rapid deployment and enterprise-grade engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
