import { useState } from 'react';
import './AdminPanel.css';
import Modal from 'react-modal';
import ProductForm from './ProductForm';

const AdminPanel = () => {
    const [isProductFormOpen, setIsProductFormOpen] = useState(false);
    const toggleProductFormModal = () => {
        setIsProductFormOpen(!isProductFormOpen);
    };

    const closeModal = () => {
        isProductFormOpen(false);
    };
    return (
        <div className="admin-panel">
            <h1 className="admin-title">Admin Panel</h1>
            <div className="admin-buttons">
                <button className="admin-button" onClick={() => {/* Lógica para crear género */ }}>Crear Género</button>
                <button className="admin-button" onClick={() => {/* Lógica para crear categoría */ }}>Crear Categoría</button>
                <button className="admin-button" onClick={() => {/* Lógica para crear subcategoría */ }}>Crear Subcategoría</button>
                <button className="admin-button" onClick={toggleProductFormModal}>Crear Producto</button>
            </div>
            <Modal
                isOpen={isProductFormOpen}
                onRequestClose={toggleProductFormModal}
                contentLabel="Login Modal"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <button onClick={toggleProductFormModal} className="close-modal">X</button>
                <ProductForm closeModal={closeModal} />
            </Modal>
        </div>
    );
}

export default AdminPanel;
