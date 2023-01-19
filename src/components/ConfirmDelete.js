export default function ConfirmDelete({setModal, date, deleteItem}) {
  return (
    <div
      style={{
        boxShadow: '0px 8px 16px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05)'
      }}
      className="bg-white rounded-md overflow-hidden p-6 space-y-3 w-[22rem] md:w-[400px]"
    >
      <h4 className="text-xl font-semibold">Hapus Item</h4>
      <p className="text-[#092540] text-sm">
        {`Apakah Anda yakin akan menghapus semua item di tanggal ${date} ini?`}
      </p>
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
          onClick={deleteItem}
          style={{
            boxShadow:
              '0px 0.5px 2px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05);'
          }}
          className="text-sm text-white bg-[#3630a3] px-5 py-3 rounded-sm mt-3"
        >
          YA
        </button>
      </div>
    </div>
  )
}
