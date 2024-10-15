import { Estudiante } from './Estudiante';
export const insertarEstudiante = function(estudiante: Estudiante,  arregloEstudiantes: Estudiante[]){
             arregloEstudiantes.push(estudiante);
}


export const actualizarEstudiantes = function ( indice : number , listaEstudiante: Estudiante[], nombre: string, apellido : string ){
    // //Intrucciones para actualizar el estudiante 
    // que se encuentre en el indice 
    // indicado en el parametro
}

export const borrarEstudiantes = function(indice: number, listaEstudiantes: Estudiante[]) {
        listaEstudiantes.splice(indice, 1);
};