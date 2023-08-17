import "./globals.css";
import NavBar from "../components/NavBar";
import { orbitron, exo2 } from "./fonts";

export const metadata = {
  title: {
    default: "TechAdvizo",
    template: "%s | TechAdvizo",
  },
  description: "TechAdvizo",
};

export default function rootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <body className="flex min-h-screen flex-col bg-green-100 px-4 py-2">
        <header>
          <NavBar></NavBar>
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center  text-xs text-slate-500">
          Game data and images
        </footer>
      </body>
    </html>
  );
}
