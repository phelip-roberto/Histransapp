import { PageControl } from './page-control';
import { Transaction } from './transaction';

export interface SearchTrans {
   pageControl?: PageControl;
   transactions?: Transaction;
}
