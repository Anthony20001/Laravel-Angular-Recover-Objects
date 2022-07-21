export interface BodyResponse {
    status: boolean;
    Response: BodyPetition[];
}

export interface BodyPetition {
    id:            number;
    cedula:        string;
    nombre_objeto: string;
    color:         string;
    precio:        string;
    detalles:      string;
    tipo_objeto:   string;
    created_at:    Date;
    updated_at:    Date;
}
    
