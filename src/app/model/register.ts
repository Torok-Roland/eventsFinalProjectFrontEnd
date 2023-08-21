export class Register {
  id: number | null;
  userName: string | null;
  password: string | null;

  constructor(id: number | null, userName: string | null, password: string | null) {
    this.id = id;
    this.userName = userName;
    this.password = password;
  }
}
