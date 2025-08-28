import Link from "next/link";

const productos = [
  { id: "1", nombre: "Laptop" },
  { id: "2", nombre: "Smartphone" },
  { id: "3", nombre: "Tablet" },
];

export default function ProductosPage() {
  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map((p) => (
          <li key={p.id}>
            <Link href={`/productos/${p.id}`}>{p.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
