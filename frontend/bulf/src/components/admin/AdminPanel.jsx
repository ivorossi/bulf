import { useState } from 'react';
import './AdminPanel.css';
import Modal from 'react-modal';
import ProductForm from './ProductForm';
import GenderForm from './GenderForm';
import CategoryForm from './CategoryForm';
import SubcategoryForm from './SubcategoryForm';

const AdminPanel = () => {
    const [isProductFormOpen, setIsProductFormOpen] = useState(false);
    const [isGenderFormOpen, setIsGenderFormOpen] = useState(false);
    const [isCategoryFormOpen, setIsCategoryFormOpen] = useState(false);
    const [isSubcategoryFormOpen, setIsSubcategoryFormOpen] = useState(false);

    const toggleProductFormModal = () => {
        setIsProductFormOpen(!isProductFormOpen);
    };

    const toggleGenderFormModal = () => {
        setIsGenderFormOpen(!isGenderFormOpen);
    };

    const toggleCategoryFormModal = () => {
        setIsCategoryFormOpen(!isCategoryFormOpen);
    };

    const toggleSubcategoryFormModal = () => {
        setIsSubcategoryFormOpen(!isSubcategoryFormOpen);
    };

    const closeModal = () => {
        setIsProductFormOpen(false);
        setIsGenderFormOpen(false);
        setIsCategoryFormOpen(false);
        setIsSubcategoryFormOpen(false);
    };

    return (
        <div className="admin-panel">
            <h1 className="admin-title">Admin Panel</h1>
            <div className="admin-buttons">
                <button className="admin-button" onClick={toggleGenderFormModal}>Crear Género</button>
                <button className="admin-button" onClick={toggleCategoryFormModal}>Crear Categoría</button>
                <button className="admin-button" onClick={toggleSubcategoryFormModal}>Crear Subcategoría</button>
                <button className="admin-button" onClick={toggleProductFormModal}>Crear Producto</button>
            </div>

            {/* Modal para Crear Género */}
            <Modal
                isOpen={isGenderFormOpen}
                onRequestClose={toggleGenderFormModal}
                contentLabel="Gender Modal"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <button onClick={toggleGenderFormModal} className="close-modal">X</button>
                <GenderForm closeModal={closeModal} />
            </Modal>

            {/* Modal para Crear Categoría */}
            <Modal
                isOpen={isCategoryFormOpen}
                onRequestClose={toggleCategoryFormModal}
                contentLabel="Category Modal"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <button onClick={toggleCategoryFormModal} className="close-modal">X</button>
                <CategoryForm closeModal={closeModal} />
            </Modal>

            {/* Modal para Crear Subcategoría */}
            <Modal
                isOpen={isSubcategoryFormOpen}
                onRequestClose={toggleSubcategoryFormModal}
                contentLabel="Subcategory Modal"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <button onClick={toggleSubcategoryFormModal} className="close-modal">X</button>
                <SubcategoryForm closeModal={closeModal} />
            </Modal>

            {/* Modal para Crear Producto */}
            <Modal
                isOpen={isProductFormOpen}
                onRequestClose={toggleProductFormModal}
                contentLabel="Product Modal"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <button onClick={toggleProductFormModal} className="close-modal">X</button>
                <ProductForm closeModal={closeModal} />
            </Modal>
        </div>
    );
};

export default AdminPanel;
