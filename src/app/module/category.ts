/**
 Copie unu la unu a clasei Event din BackEnd
 */

export class Category {
  id: number | null;
  name: string | null;

  constructor(id: number | null, name: string | null) {
    this.id = id;
    this.name = name;
  }
}
