import "./globals.css";
import NavBar from "../components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">

        <aside className="flex w-64 border-r border-cornflower p-4">
          <NavBar />
        </aside>
        
        <main className="flex-1 p-8">
          {children}
        </main>
        
      </body>
    </html>
  );
}
