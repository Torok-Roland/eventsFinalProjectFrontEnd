/**
 Copie unu la unu a clasei Event din BackEnd
 */

export class Event {
  id: number | null;
  name: string | null;
  startDate: Date | null;
  endDate: Date | null;
  description: string | null;
  location: string | null;
  imgUrl : string | null
  constructor(id:number | null, name:string | null, startDate: Date | null, endDate: Date | null, description:string | null,
              location:string | null, imgUrl:string | null){
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description =description;
    this.location = location;
    this.imgUrl = imgUrl;
  }
}
