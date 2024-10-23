import './AdminPanel.css';

const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <h1 className="admin-title">Admin Panel</h1>
            <div className="admin-buttons">
                <button className="admin-button" onClick={() => {/* Lógica para crear género */}}>Crear Género</button>
                <button className="admin-button" onClick={() => {/* Lógica para crear categoría */}}>Crear Categoría</button>
                <button className="admin-button" onClick={() => {/* Lógica para crear subcategoría */}}>Crear Subcategoría</button>
                <button className="admin-button" onClick={() => {/* Lógica para crear producto */}}>Crear Producto</button>
            </div>
        </div>
    );
}

export default AdminPanel;
