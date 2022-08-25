import Tarea from "./tarea.js";

export default class Tareas {

    constructor () {
        this._listado = {};
    }

    /**
     * Metodo para crear una nueva tarea
     * @param { string } desc Descripcion de la tarea
     */
    crearTarea( desc = '' ) {
        const tarea = new Tarea( desc );
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray( tareas = [] ) {
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
        console.log(this._listado);
    }

    listadoCompleto() {
        this.listadoArray.forEach( (tarea, i) => {
            console.log(`${ ((i + 1).toString() + '.').green } ${ tarea.desc } :: ${ tarea.completadoEn ? 'Completado'.green : 'Pendiente'.red }`);
        });
    }

    listarPendientesCompletadas( completadas = true) {
        let contador = 0;
        this.listadoArray.forEach( (tarea, i) => {
            if( completadas && tarea.completadoEn){
                contador += 1;
                console.log(`${ (contador.toString() + '.').green } ${ tarea.desc } :: ${ 'Completado'.green } - ${ tarea.completadoEn }`);
            }else if ( !completadas && !tarea.completadoEn){
                contador += 1;
                console.log(`${ (contador.toString() + '.').green } ${ tarea.desc } :: ${ 'Pendiente'.red }`);
            }
        });
    }

    borrarTarea( id = '' ) {
        if( this._listado[id] ) {
            delete this._listado[id];
        }
    }

    toogleCompletadas( ids = [] ) {

        ids.forEach( id => {
            const tarea = this._listado[id];
            if( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArray.forEach( tarea => {
            if( !ids.includes(tarea.id) ){
                this._listado[tarea.id].completadoEn = null;
            }
        });

    }
 
    get listadoArray() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });
        return listado;
    }

}