export class UserModel {
  id: number;
  name: string;
  email: string;
  createdAt: number = Date.now();
}