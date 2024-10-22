import { useState, useEffect } from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [genderMap, setGenderMap] = useState({});
  const [categoryMap, setCategoryMap] = useState({});
  const [subcategoryMap, setSubcategoryMap] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/auth/admin/product?page=${page}&size=${size}`);
        const data = await response.json();
        setProducts(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };


    const fetchGenders = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/genders');
        const data = await response.json();
        const genderMap = {};
        const categoryMap = {};
        const subcategoryMap = {};
        data.forEach(gender => {
          genderMap[gender.id] = gender.name;
          gender.categories.forEach(category => {
            categoryMap[category.id] = category.name;
            category.subcategories.forEach(subcategory => {
              subcategoryMap[subcategory.id] = subcategory.name;
            });
          });
        });

        setGenderMap(genderMap);
        setCategoryMap(categoryMap);
        setSubcategoryMap(subcategoryMap);
      } catch (error) {
        console.error('Error fetching genders:', error);
      }
    };
    fetchProducts();
    fetchGenders();

  }, [page, size]);

  const handleEdit = (id) => {
    console.log(`Editando producto con ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Eliminando producto con ID: ${id}`);
  };

  const handlePrevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handleSizeChange = (e) => {
    setSize(Number(e.target.value));
    setPage(0);
  };

  return (
    <>
      <div className="pagination-controls">
        <label htmlFor="size-select">Elementos por página:</label>
        <select id="size-select" value={size} onChange={handleSizeChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Cantidad de Imágenes</th>
            <th>Main Image URL</th>
            <th>Género</th>
            <th>Categoría</th>
            <th>Subcategoría</th>
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
              genderMap={genderMap}
              categoryMap={categoryMap}
              subcategoryMap={subcategoryMap}
            />
          ))}
        </tbody>
      </table>

      <div className="pagination-wrapper">
        <button onClick={handlePrevPage} disabled={page === 0}>Anterior</button>
        <span>Página {page + 1} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={page === totalPages - 1}>Siguiente</button>
      </div>
    </>
  );
};

export default ProductTable;
