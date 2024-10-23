import ProductForm from './CrearProducForm'
import ProductTable from './ProductTable';

function AdminView() {
    return (
        <div>

            
            <ProductTable />
            <ProductForm />
        </div>
    );
}

export default AdminView;