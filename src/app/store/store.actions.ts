import { Action } from "@ngrx/store";
import { myStockItems } from "../build-pc/filer.service.service";

export const ADD_ITEM_TO_ORDER = 'Add item to Order';
export const REMOVE_ITEM_FROM_ORDER = 'Remove item from Order';
export const REDUCE_ITEM_COUNT_IN_ORDER = 'Reduce item count in Order';
export const REMOVE_ITEM_BATCH_FROM_ORDER = 'Remove item batcgh from Order';

export class AddItemToOrder implements Action {
  readonly type = ADD_ITEM_TO_ORDER;

  constructor(public payload: myStockItems){}
}

export class RemoveItemFromOrder implements Action {
  readonly type = REMOVE_ITEM_FROM_ORDER;

  constructor(public payload: number){}
}

export class RemoveItemBatchFromOrder implements Action {
  readonly type = REMOVE_ITEM_BATCH_FROM_ORDER;

  constructor(public payload: number){}
}

export type StoreActions = AddItemToOrder | RemoveItemBatchFromOrder | RemoveItemFromOrder;
