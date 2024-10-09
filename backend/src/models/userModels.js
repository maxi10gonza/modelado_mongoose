import { Schema, model } from "mongoose";

// Esquema de Empleado
const employeeSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
}, {
    timestamps: true
});

// Esquema de Producto
const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
}, {
    timestamps: true
});

// Esquema de Venta
const saleSchema = new Schema({
    employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
}, {
    timestamps: true
});

// Esquema de Autenticación de Empleados
const employeeAuthSchema = new Schema({
    employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

// Creación de Modelos
const Employee = model('Employee', employeeSchema);
const Product = model('Product', productSchema);
const Sale = model('Sale', saleSchema);
const EmployeeAuth = model('EmployeeAuth', employeeAuthSchema);

export { Employee, Product, Sale, EmployeeAuth };
