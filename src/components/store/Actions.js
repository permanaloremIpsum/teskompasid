export const STORE_DATA_ITEM_DETAIL = "STORE_DATA_ITEM_DETAIL"

export const storeDataItemDetail = item => ({
    type: STORE_DATA_ITEM_DETAIL,
    payload: {item}
})