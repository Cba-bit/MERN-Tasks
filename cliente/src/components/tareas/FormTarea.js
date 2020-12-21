import { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {
        tareaseleccionada,
        errortarea,
        agregarTarea,
        validarTarea,
        obtenerTareas,
        actualizarTarea,
        limpiarTarea,
    } = tareasContext;

    // State que detecta si hay una tarea seleccionada
    useEffect(() => {
        if (tareaseleccionada !== null) {
            setTarea(tareaseleccionada);
        } else {
            setTarea({
                nombre: '',
            });
        }
    }, [tareaseleccionada]);

    // State del formulario
    const [tarea, setTarea] = useState({
        nombre: '',
    });

    const { nombre } = tarea;

    // Si no hay proyecto actual
    if (!proyecto) return null;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // Leer los valores del formulario
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = e => {
        e.preventDefault();

        // validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        // Si es edicion o si es nueva tarea
        if (tareaseleccionada === null) {
            // Agregar nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            // Actualizar tarea existente
            actualizarTarea(tarea);

            // Elimina tareaseleccionada del state
            limpiarTarea();
        }

        // Obtener y fitlrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        // Reiniciar form
        setTarea({
            nombre: '',
        });
    };

    return (
        <div className='formulario'>
            <form onSubmit={onSubmit}>
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre Tarea...'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={
                            tareaseleccionada ? 'Editar tarea' : 'Agregar Tarea'
                        }
                    />
                </div>
            </form>

            {errortarea ? (
                <p className='mensaje error'>
                    El nombre de la tarea es obligatorio
                </p>
            ) : null}
        </div>
    );
};

export default FormTarea;
