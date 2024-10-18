import "./globals.css";

//COMPONENTS
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Acme</title>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body className={`antialiased bg-black`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
