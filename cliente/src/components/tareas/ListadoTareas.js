import { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Si no hay proyecto actual
    if (!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataforma de Pago', estado: false },
        { nombre: 'Elegir Hosting', estado: true },
    ];

    //Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    };

    return (
        <Fragment>
            <h2>Tu proyecto: {proyectoActual.nombre}</h2>

            <ul className='listado-tareas'>
                {tareasProyecto.length === 0 ? (
                    <li className='tarea'>
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    tareasProyecto.map(tarea => <Tarea tarea={tarea} />)
                )}

                <button
                    type='button'
                    className='btn btn-eliminar'
                    onClick={onClickEliminar}>
                    Eliminar Proyecto &times;
                </button>
            </ul>
        </Fragment>
    );
};

export default ListadoTareas;
