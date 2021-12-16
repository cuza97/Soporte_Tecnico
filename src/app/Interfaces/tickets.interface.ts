export interface ticket_Interface {
  id_user: String;
  asunto: String;
  //1-Pendiente,2-Poresponder,3-Resuelto
  estatus: number;
  //id_delasignado
  Asignado: String;
  fecha: Date;
}
