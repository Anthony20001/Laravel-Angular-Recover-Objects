export interface BodyResponse {
    status: boolean;
    objects: BodyObjets[];
}

interface BodyObjets {
    color: string;
    nombre_objeto: string;
    tipo_objeto: string;
    casillero: string;
    precio: string;
    detalles: string;
    url_img: string;
    estado: string;
}