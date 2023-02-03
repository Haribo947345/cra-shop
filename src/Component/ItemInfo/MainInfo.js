import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { MainHomeData } from "../../Data/Data";
import { ChangeBaskets } from "../../Store/BasketsSlice";
import { ErrorModal } from "../Modal/ErrorModal";

function MainInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 로그인 확인하기
  const isLoggedIn = useSelector((state) => state.isLoggedIn.user);

  // URL주소 ID값 가져오기
  const { id } = useParams();

  // 더미데이터 ID Number로 감싸기 -> 감싸지 않을경우 string 타입으로 false 출력
  const DataID = Number(id);

  // 더미데이터 Filter
  const Info = MainHomeData.filter((Data) => Data.ID === DataID);

  // 모달 관련
  const [erropenModal, setOpenErrModal] = useState(false);

  const onClickOpenModal = () => {
    setOpenErrModal(true);
  };
  const onClickCloseModal = () => {
    setOpenErrModal(false);
  };
  const onClickLogin = () => {
    setOpenErrModal(false);
    navigate("/login");
  };

  // 장바구니 추가하기
  const onClickBasket = (el) => () => {
    if (isLoggedIn) {
      const Baskets = JSON.parse(localStorage.getItem("baskets")) || [];
      let boolean = false;
      Baskets.forEach((BasketsEl) => {
        if (el.ID === BasketsEl.ID) boolean = true;
      });
      if (boolean) {
        return;
      }
      Baskets.push(el);
      localStorage.setItem("baskets", JSON.stringify(Baskets));
      dispatch(ChangeBaskets(Baskets));
      navigate("/baskets");
    }
  };

  const onClickBuyItem = () => {
    if (isLoggedIn) {
      navigate(`/buyitem/${id}`);
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden min-h-full pb-24">
      <div className="container px-5 py-24 mx-auto">
        {Info &&
          Info.map((el, key) => {
            return (
              <div key={key} className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded"
                  src={el.IMG}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {el.CATEGORY}
                  </h2>
                  <h1 className="text-white text-3xl title-font font-medium mb-1">
                    {el.NAME}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="ml-3">5개의 리뷰</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                      <div>
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </div>
                      <div>
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </div>
                      <div>
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </div>
                    </span>
                  </div>
                  <p className="leading-relaxed">
                    미개봉 상품으로 개봉시 환불이 불가능 하며, 환불은 배송완료일
                    기준 7일 이내 신청시 환불이 가능합니다.
                  </p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"></div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-white">
                      ₩{el.PRICE}
                    </span>
                    {isLoggedIn ? (
                      <>
                        <button
                          onClick={onClickBasket(el, key)}
                          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                        >
                          장바구니
                        </button>
                        <button
                          onClick={onClickBuyItem}
                          className="flex ml-3  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                        >
                          주문하기
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                          onClick={onClickOpenModal}
                        >
                          장바구니
                        </button>
                        <button
                          className="flex ml-3  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                          onClick={onClickOpenModal}
                        >
                          주문하기
                        </button>
                      </>
                    )}
                    <ErrorModal
                      open={erropenModal}
                      close={onClickCloseModal}
                      header="접근오류!"
                      body="로그인은 필수 입니다!"
                      buttonbody1="로그인하기"
                      buttonbody2="닫기"
                      onClick={onClickLogin}
                    ></ErrorModal>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default MainInfo;
