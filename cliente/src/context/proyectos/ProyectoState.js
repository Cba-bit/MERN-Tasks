import React, { useReducer } from 'react';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {
    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de sitio web' },
        { id: 4, nombre: 'Presupuestar el proyecto' },
    ];
    const initialState = {
        proyectos: [],
        formulario: false,
    };

    // Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO,
        });
    };

    //Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({ type: OBTENER_PROYECTOS, payload: proyectos });
    };

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos,
            }}>
            {props.children}
        </proyectoContext.Provider>
    );
};

export default ProyectoState;
