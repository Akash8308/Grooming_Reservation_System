export class Appointment {
    constructor(
    public appointmentId:number,
    public appointmentDate: Date,
    public appointmentStartTime: string,
    public appointmentEndTime: string,
    public appointmentStatus: string,
    public appointmentType: string,
    public salonid,
    public stylistid,
    public userid,
    public servicesid
    ){}
}
