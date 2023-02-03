import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteBaskets } from "../../Store/BasketsSlice";
import { ErrorModal } from "../Modal/ErrorModal";

function MainBasket() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basketsData = useSelector((state) => state.basketsSlice);

  const [dataItem, setDataItem] = useState(basketsData);

  const [erropenModal, setErrOpenModal] = useState(false);

  const onClickCloseModal = () => {
    setErrOpenModal(false);
  };
  const onClickHome = () => {
    setErrOpenModal(false);
    navigate("/");
  };

  const onClickBasket = () => {
    const deleteBaskets = localStorage.removeItem("baskets");
    setDataItem(deleteBaskets);
    dispatch(DeleteBaskets(dataItem));
  };

  const onClickBuyBaskets = () => {
    if (dataItem === null || dataItem === false) {
      setErrOpenModal(true);
    } else {
      navigate("/basketsbuyitem");
    }
  };

  useEffect(() => {
    const newDataItem = () => {
      if (!localStorage.getItem("baskets")) {
        setErrOpenModal(true);
      }
    };
    newDataItem();
  }, [dataItem]);

  return (
    <section className="text-gray-400 bg-gray-900 body-font min-h-full pb-24">
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
        {dataItem ? (
          <button
            onClick={onClickBuyBaskets}
            className="flex ml-auto mr-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            구매하기
          </button>
        ) : (
          <span className="flex items-center justify-center font-bold text-3xl m-auto">
            장바구니에 담긴 상품이 없습니다!
          </span>
        )}
      </div>
      <ErrorModal
        open={erropenModal}
        close={onClickCloseModal}
        header="장바구니 알림"
        body="장바구니에 담긴 상품이 없어요! 장바구니를 등록해주세요!"
        buttonbody1="담으러가기"
        buttonbody2="닫기"
        onClick={onClickHome}
      ></ErrorModal>
    </section>
  );
}

export default MainBasket;
