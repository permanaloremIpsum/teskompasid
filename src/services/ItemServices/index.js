import reqClient from "../requestClient";

export const getListAllItemService = async () => {
    try {
        const getData = await reqClient.get(`http://localhost:3000/items?_sort=tanggal&_order=desc`)

        return getData.data
    } catch (error) {
        const errMessage =
            error.response.data.message || 'invalid credential';
        throw new Error(errMessage);
    }
}

export const AddItemService = async (time, date, name, cost) => {
    let params = {
        jam: time,
        tanggal: date,
        nama: name,
        pengeluaraan: cost
    }

    try {
        const getData = await reqClient.post(`http://localhost:3000/items`, params )

        return getData.data
    } catch (error) {
        const errMessage =
            error.response.data.message || 'invalid credential';
        throw new Error(errMessage);
    }
}

export const deleteItemService = async (id) => {
    try {
        const getData = await reqClient.delete(`http://localhost:3000/items/${id}`)

        return getData.data
    } catch (error) {
        const errMessage =
            error.response.data.message || 'invalid credential';
        throw new Error(errMessage);
    }
}