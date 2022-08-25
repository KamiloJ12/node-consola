import { v4 as uuidv4 } from 'uuid';

class Tarea{

    /**
     * Constructora para crear una nueva tarea
     * @param {string} desc Descripcion de la tarea 
     */
    constructor ( desc = '' ) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }
}

export default Tarea;