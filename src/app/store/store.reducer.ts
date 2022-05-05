import { myStockItems } from '../build-pc/filer.service.service';
import * as StoreActions from '../store/store.actions';

export interface State {
  order: myStockItems[];
  editedOrder: myStockItems;
  editedOrderIndex: number;
}

const initialSte: State = {
  order: [],
  editedOrder: {
    itemCategory: '',
    itemName: '',
    itemFilterName: '',
    itemImageUrl: '',
    itemPrice: 0,
    itemInStock: false,
    itemId: 0,
  },
  editedOrderIndex: -1,
};

export function storeReducer(
  state: State = initialSte,
  action: StoreActions.StoreActions
) {
  switch (action.type) {
    case StoreActions.ADD_ITEM_TO_ORDER:
      return {
        ...state,
      };
    case StoreActions.REMOVE_ITEM_FROM_ORDER:
      return {
        ...state,
      };
    case StoreActions.REMOVE_ITEM_BATCH_FROM_ORDER:
      return {
        ...state,
      };
  }
}
