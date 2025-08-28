import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Demo App Router",
  description: "Ejemplo de rutas con Next.js 13+",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
          <Link href="/" style={{ marginRight: "10px" }}>Inicio</Link>
          <Link href="/productos" style={{ marginRight: "10px" }}>Productos</Link>
          <Link href="/blog" style={{ marginRight: "10px" }}>Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
