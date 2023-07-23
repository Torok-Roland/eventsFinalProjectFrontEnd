/**
 Copie unu la unu a clasei Event din BackEnd
 */

export class Event {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location: string;
  constructor(id:number, name:string, startDate: Date, endDate: Date, description:string, location:string){
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description =description;
    this.location = location;
  }
}
