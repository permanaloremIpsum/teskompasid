export default function Modal({ modal, children }) {
  return (
    modal && (
      <div
        style={{ backgroundColor: '#00000040' }}
        className="fixed top-0 left-0 h-screen w-screen z-50 overflow-auto"
      >
        <div className="min-h-full w-full flex items-center justify-center px-4">
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      </div>
    )
  )
}
