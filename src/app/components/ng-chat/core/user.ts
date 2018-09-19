import {UserStatus} from './user-status.enum';

export class User {
  public id: any;
  public user_name: string;
  public user_last_name: string;
  public status: UserStatus;
  public user_photo: string;
}
