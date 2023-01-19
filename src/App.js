import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'

import Modal from "./components/Modal";
import Card from "./components/Card";
import AddItem from "./components/AddItem";

import { convertRupiah } from "./utils/convertRupiah";
import { getListAllItemService } from "./services/ItemServices";
import { storeDataItemDetail } from "./components/store/Actions";
import { getNameMonth } from "./utils/getNameMonth";

function App() {
  const dispatch = useDispatch()
  const [modal, setModal] = useState('')
  const [listDate, setListDate] = useState([])
  const [grandTotal, setGrandTotal] = useState(0)

  const getDataItem = async () => {
    try {
      const res = await getListAllItemService()
      const uniqueDate = [...new Set(res.map(item => item.tanggal))]

      let total = 0
      res.map((item) => total += item.pengeluaraan)

      setGrandTotal(total)
      setListDate(uniqueDate)
      dispatch(storeDataItemDetail(res))
    } catch (error) {
      alert('Gagal Mengambil Data, Silahkan Muat Ulang!!')
    }
  }

  useEffect(() => {
    getDataItem()
    document.title = 'Daily Expenses'
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <Modal modal={modal} setModal={setModal}>
        {modal === 'addItem' && <AddItem setModal={setModal} getDataItem={getDataItem} />}
      </Modal>
      <div className="w-full md:w-11/12 md:mx-auto bg-white p-5">
        <div className="block text-center">
          <h2 className="text-3xl">Diari Jajan {`${getNameMonth(new Date().getMonth())} ${new Date().getFullYear()}`}</h2>
          <p>Pengeluaran Bulan ini {convertRupiah(grandTotal)}</p>
          <button onClick={() => setModal('addItem')} className="mt-3 px-4 py-2 bg-[#3630a3] text-white text-sm rounded-sm">TAMBAH ITEM</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-4">
          {listDate.length !== 0 && (
            listDate.map((date, i) => (
              <Card key={i} date={date} getDataItem={getDataItem}/>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
