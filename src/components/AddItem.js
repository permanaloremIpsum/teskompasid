import { useState } from "react"
import { AddItemService } from "../services/ItemServices"
import { getNameMonth } from "../utils/getNameMonth"

export default function AddItem({setModal, getDataItem}) {
  const [form, setForm] = useState({
    nama: '',
    harga: '',
  })

  const addItemDetail = async () => {
    if(form.nama === '' || form.harga === ''){
      alert('Inputan tidak boleh kosong!!')
    }else{
      try {
        const d = new Date()
        const time = `${d.getHours()<10? '0'+d.getHours() : d.getHours()}:${d.getMinutes()<10 ? '0'+d.getMinutes() : d.getMinutes()}`
        const date = `${d.getDate()} ${getNameMonth(d.getMonth())} ${d.getFullYear()}`
        await AddItemService(time, date, form.nama, parseInt(form.harga))
        getDataItem()
        alert('Sukses menambahkan item')
        setModal('')
      } catch (error) {
       alert(error.message) 
      }
    }
  }

  return (
    <div
      style={{
        boxShadow: '0px 8px 16px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05)'
      }}
      className="bg-white rounded-md overflow-hidden p-6 space-y-3 w-[22rem] md:w-[400px]"
    >
      <h4 className="text-xl font-semibold">Tambah Entri</h4>
      <div>
        <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900">Nama</label>
        <input 
          type="text" 
          id="nama" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          value={form.nama} 
          onChange={(e) => setForm({...form, nama: e.target.value})}
        />
      </div>
      <div>
        <label htmlFor="harga" className="block mb-2 text-sm font-medium text-gray-900">Harga</label>
        <input 
          type="number" 
          id="harga" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          value={form.harga}
          onChange={(e) => setForm({...form, harga: e.target.value})}
        />
      </div>
      <div className="flex items-center justify-end space-x-2">
        <button
          type="button"
          onClick={() => setModal('')}
          style={{
            boxShadow:
              '0px 0.5px 2px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05);'
          }}
          className="text-sm text-white bg-[#6b7280] px-5 py-3 rounded-sm mt-3"
        >
          BATAL
        </button>
        <button
          type="buton"
          onClick={addItemDetail}
          style={{
            boxShadow:
              '0px 0.5px 2px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05);'
          }}
          className="text-sm text-white bg-[#3630a3] px-5 py-3 rounded-sm mt-3"
        >
          KIRIM
        </button>
      </div>
    </div>
  )
}
