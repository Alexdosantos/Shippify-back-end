import { DriveEnumStatus } from "../../../enums/drive.enum";

export interface DriverDto {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar_url: string;
  status: DriveEnumStatus;
  company_Id: number;
}
