import AdminPanel from './AdminPanel';
import ProductForm from './CrearProducForm'
import ProductTable from './ProductTable';

function AdminView() {
    return (
        <div>
            <AdminPanel />
            <ProductTable />
            <ProductForm />
        </div>
    );
}

export default AdminView;