import React, { useState, useEffect } from 'react';
import ProductoService from '../services/ProductoService'; 
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const AddProductoComponent = () => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateProducto = (e) => {
        e.preventDefault();
        const producto = { nombre, cantidad, precio };

        if (id) {
            ProductoService.updateProducto(id, producto).then(() => {
                navigate('/productos');
            }).catch(error => console.log(error));
        } else {
            ProductoService.createProducto(producto).then(() => {
                navigate('/productos');
            }).catch(error => console.log(error));
        }
    };

    useEffect(() => {
        if (id) {
            ProductoService.getProductoById(id).then(response => {
                setNombre(response.data.nombre);
                setCantidad(response.data.cantidad);
                setPrecio(response.data.precio);
            }).catch(error => console.log(error));
        }
    }, [id]);

    const titulo = () => {
        return id ? <h2 className='text-center'>Actualizar Producto</h2> : <h2 className='text-center'>Registrar Producto</h2>;
    };

    return (
        <div className='container' style={{ marginTop: "80px" }}>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    {titulo()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Nombre:</label>
                                <input
                                    type='text'
                                    placeholder='Escriba el nombre del producto'
                                    className='form-control'
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Cantidad:</label>
                                <input
                                    type='number'
                                    placeholder='Escriba la cantidad'
                                    className='form-control'
                                    value={cantidad}
                                    onChange={(e) => setCantidad(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Precio:</label>
                                <input
                                    type='number'
                                    step='0.01'
                                    placeholder='Escriba el precio'
                                    className='form-control'
                                    value={precio}
                                    onChange={(e) => setPrecio(e.target.value)}
                                />
                            </div>
                            <div className='botones'>
                                <button className='btn btn-danger' onClick={saveOrUpdateProducto}>Guardar</button>
                                <Link to='/productos' className='btn btn-primary' style={{ marginLeft: "10px" }}>Cancelar</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductoComponent;
