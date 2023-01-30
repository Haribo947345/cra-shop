import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteBaskets } from "../../Store/store";

function MainBasket() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basketsData = useSelector((state) => state.baskets);

  const [dataItem, setDataItem] = useState(basketsData);

  const onClickBasket = () => {
    const deleteBaskets = localStorage.removeItem("baskets");
    setDataItem(deleteBaskets);
    dispatch(DeleteBaskets(dataItem));
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="flex justify-center text-2xl text-white mb-7">
          장바구니
        </h1>
        {basketsData ? (
          <button
            onClick={onClickBasket}
            className="flex ml-auto mb-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            전체 삭제하기
          </button>
        ) : null}
        <div className="flex items-center mx-auto justify-center">
          <div className="flex sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-lg mb-2">
              {basketsData &&
                basketsData.map((el, key) => {
                  return (
                    <div key={key}>
                      <div className="flex">
                        <span className="mr-5">{el.NAME}</span>
                      </div>
                      <div>{el.PRICE}</div>
                      <div className="flex items-center  mx-auto border-b pb-5 mb-10 border-gray-800 sm:flex-row flex-col justify-center"></div>
                    </div>
                  );
                })}
            </h2>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/basketsbuyitem");
          }}
          className="flex ml-auto mr-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          구매하기
        </button>
      </div>
    </section>
  );
}

export default MainBasket;
