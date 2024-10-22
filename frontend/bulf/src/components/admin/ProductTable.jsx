import { useState, useEffect } from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css'; // Importar el archivo CSS

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0); 
  const [size, setSize] = useState(5); 
  const [totalPages, setTotalPages] = useState(0); 

  useEffect(() => {
    // Fetch de productos con paginación
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/auth/admin/product?page=${page}&size=${size}`);
        const data = await response.json();
        setProducts(data.content); // Asume que los productos están en `content`
        setTotalPages(data.totalPages); // Asume que el total de páginas está en `totalPages`
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [page, size]); // Vuelve a hacer fetch si `page` o `size` cambian

  const handleEdit = (id) => {
    console.log(`Editando producto con ID: ${id}`);
    // Lógica de edición
  };

  const handleDelete = (id) => {
    console.log(`Eliminando producto con ID: ${id}`);
    // Lógica de eliminación
  };

  const handlePrevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handleSizeChange = (e) => {
    setSize(Number(e.target.value)); // Cambiar el tamaño de la página
    setPage(0); // Reiniciar a la primera página cuando se cambia el tamaño
  };

  return (
    <>
      <div className="pagination-controls">
        <label htmlFor="size-select">Elementos por página:</label>
        <select id="size-select" value={size} onChange={handleSizeChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>

      <div className="pagination-controls">
        <button onClick={handlePrevPage} disabled={page === 0}>Anterior</button>
        <span>Página {page + 1} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={page === totalPages - 1}>Siguiente</button>
      </div>
    </>
  );
};

export default ProductTable;
