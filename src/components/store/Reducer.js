import { STORE_DATA_ITEM_DETAIL } from "./Actions";

const initialState = {
    dataItemDetail: []
}

export default function ItemDetailReducer(state = initialState, action) {
    switch (action.type) {
      case STORE_DATA_ITEM_DETAIL:
        return {
          ...state,
          dataItemDetail: action.payload.item
        }
      default:
        return state
    }
  }