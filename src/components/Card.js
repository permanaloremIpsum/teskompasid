import { convertRupiah } from '../utils/convertRupiah'
import { deleteItemService } from '../services/ItemServices';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import Trash from './Trash';
import Modal from './Modal';
import ConfirmDelete from './ConfirmDelete';

export default function Card({date, getDataItem}) {
  const [modal, setModal] = useState('')
  const [itemByDate, setItemByDate] = useState([])
  const [totalCostByDate, setTotalCostByDate] = useState(0)

  const listItemDetail = useSelector((state) => state.ItemDetail.dataItemDetail)

  const getItemByDate = async () => {
    try {
      if(listItemDetail.length !== 0){
        const filteredItem = listItemDetail.filter((item) => item.tanggal === date)
        let total = 0
        filteredItem.map((item) => total += item.pengeluaraan)
        setItemByDate(filteredItem)
        setTotalCostByDate(total)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const deleteItem = async () => {
    try {
      for (let i = 0; i < itemByDate.length; i++) {
        await deleteItemService(itemByDate[i].id)
      }
      alert(`Berhasil menghapus item pada tanggal ${date}`)
      getDataItem()
      setModal('')
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    getItemByDate()
    // eslint-disable-next-line
  }, [date, listItemDetail])
  
  return (
    <>
      <Modal modal={modal} setModal={setModal}>
        {modal === 'confirmDelete' && <ConfirmDelete setModal={setModal} date={date} deleteItem={deleteItem} />}
      </Modal>
      <div className='border rounded-md px-3 py-4 shadow-md'>
        <div className='flex items-center justify-between mb-2'>
          <h4 className='text-md font-bold'>{date}</h4>
          <div onClick={() => setModal('confirmDelete')}>
            <Trash className="w-5 h-5 ml-1 cursor-pointer" />
          </div>
        </div>
        <div className='h-[300px] overflow-y-auto'>
          {itemByDate.length !== 0 && (itemByDate.map((item, i) => (
            <div key={i} className='flex items-center justify-between py-2 border-t border-t-[#E4E7EB]'>
              <div className='flex items-center text-sm'>
                <div className='mr-3'>{item.jam}</div>
                <div>{item.nama}</div>
              </div>
              <div className='text-sm'>{item.pengeluaraan ? convertRupiah(item.pengeluaraan) : '-'}</div>
            </div>
          )))}
          <div className='flex items-center justify-end py-2 border-t-2 border-t-[#E4E7EB]'>
            <div className='flex items-center text-sm font-bold'>
              <div className=''>Total</div>
              <div className='ml-6'>{totalCostByDate ? convertRupiah(totalCostByDate) : '-'}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
