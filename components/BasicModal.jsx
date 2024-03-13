'use client'


export function BasicModal({ className, children }) {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
      <dialog id="my_modal_1" className="modal border border-primary p-0">
        <div className={`modal-box ${className} border max-w-none w-3/5 m-0`}>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
          {children}
        </div>
      </dialog>
    </>
  )
}