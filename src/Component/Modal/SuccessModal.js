export const SuccessModal = (props) => {
  const { open, close, header, body, buttonbody } = props;
  return (
    <>
      {open ? (
        <div
          className={open ? "relative z-50 animate-blackbgshow" : null}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-slate-900 bg-opacity-75"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-2xl text-left sm:my-8 sm:w-full sm:max-w-lg">
                <div className=" bg-slate-500 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-200 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      ></svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg font-medium leading-6 text-white"
                        id="modal-title"
                      >
                        {header}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-slate-300">{body}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-600 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={close}
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:bg-indigo-900 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    {buttonbody}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
