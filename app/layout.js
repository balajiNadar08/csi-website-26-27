import "./globals.css";

export const metadata = {
  title: "CSI 2026-27",
  description: "CSI 2026-27",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
