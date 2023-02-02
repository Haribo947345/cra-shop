import "tw-elements";

function MainModal(props) {
  const { title, body, close, navigateButton, message } = props;
  return (
    <div
      className="modal fade fixed top-0 hidden left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalCenter"
      tabIndex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-slate-800 bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-white"
              id="exampleModalScrollableLabel"
            >
              {title}
            </h5>
          </div>
          <div className="modal-body relative p-4 text-white">
            <p>{body}</p>
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
            >
              {close}
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out ml-1"
              onClick={navigateButton}
            >
              {message}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainModal;
