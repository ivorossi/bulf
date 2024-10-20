import { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import './ProductsList.css'; 
import { getApiUrl } from '../config';
import { ProductFilterContext } from './ProductFilterContext';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { selectedGenderId, selectedCategoryId } = useContext(ProductFilterContext);

  useEffect(() => {
    const fetchProducts = async () => {
      let productsListUrl = getApiUrl(`/product?page=${currentPage - 1}`);

      // Agregar filtros de género y categoría a la URL
      if (selectedGenderId) {
        productsListUrl += `&gender=${selectedGenderId}`;
      }
      if (selectedCategoryId) {
        productsListUrl += `&category=${selectedCategoryId}`;
      }

      try {
        const response = await fetch(productsListUrl);
        const data = await response.json();
        setProducts(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage, selectedGenderId, selectedCategoryId]); // Dependencias que desencadenan la actualización

  useEffect(() => {
    // Resetear la página actual a 1 cuando se cambie el género o la categoría
    setCurrentPage(1);
  }, [selectedGenderId, selectedCategoryId]);

  return (
    <div>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductsList;
