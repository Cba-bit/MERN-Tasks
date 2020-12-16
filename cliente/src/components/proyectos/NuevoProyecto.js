import { Fragment, useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario } = proyectosContext;

    const [proyecto, setProyecto] = useState({
        nombre: '',
    });

    const { nombre } = proyecto;

    // Lee los contenidos de los inputs
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value,
        });
    };

    // Cuando el usuario envia un proyecto

    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar

        // Agregar al state

        // Reiniciar el form
    };

    const onClickFormulario = () => {
        mostrarFormulario();
    };

    return (
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={onClickFormulario}>
                Nuevo Proyecto
            </button>

            {formulario ? (
                <form
                    className='formulario-nuevo-proyecto'
                    onSubmit={onSubmitProyecto}>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre Proyecto'
                        name='nombre'
                        onChange={onChangeProyecto}
                        value={nombre}
                    />

                    <input
                        type='submit'
                        className='btn btn-block btn-primario'
                        value='Agregar Proyecto'
                    />
                </form>
            ) : null}
        </Fragment>
    );
};

export default NuevoProyecto;
