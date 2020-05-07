import { Address } from './address';
import { PhoneNumber } from './phoneNumber';

export interface Customer {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  address: Address;
  phoneNumber: PhoneNumber;
}
