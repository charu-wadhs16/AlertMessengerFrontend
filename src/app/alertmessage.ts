// export interface Alertmessage {
// id: number;
// AC_Reg: string;
// Flight:string,
// Desk:string,
// Desk_Ctg:string,
// Escalated:string,
// Ack:string,
// Ack_By:string,
// Recieved:string,
// Priority:string
//  }
// export interface Alertmessage {
//   messageId: number;
//   aircraftRegistration: string;
//   flight:string,
//   desk:string,
//   deskCategory:string,
//   escalated:string,
//   acknowledge:string,
//   acknowledgedBy:string,
//   received:string,
//   priority:string
// }

export interface Alertmessage {
    messageId: number;
    aircraftRegistration: string;
    flight:string,
    desk:string,
    deskCategory:string,
    escalated:string,
    acknowledge:string,
    acknowledgedBy:string,
    received:string,
    priority:string,
    isPublished:number;
    }