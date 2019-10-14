import { Card } from './card';
import { Terminal } from './terminal';

export interface Transaction {
   type?: number;
   amount?: string;
   inst?: number;
   inst_mode?: number;
   datetime?: string;
   entry?: number;
   term?: Terminal;
   card?: Card;
}
