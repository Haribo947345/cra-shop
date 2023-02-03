import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteBaskets } from "../../Store/BasketsSlice";
import { SuccessModal } from "../Modal/SuccessModal";

function BasketsBuyItem() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // 성공 모달 관련
  const [openModal, setOpenModal] = useState(false);

  const onClickCloseModal = () => {
    setOpenModal(false);
    localStorage.removeItem("baskets");
    dispatch(DeleteBaskets());
    navigate("/");
  };

  const onClickBuyNow = () => {
    setOpenModal(true);
  };
  return (
    <section className="flex text-gray-400 bg-gray-900 body-font min-h-full pb-24">
      <div className="lg:w-1/3 md:w-1/2 bg-gray-700 shadow-md rounded-2xl  p-8 flex flex-col m-auto w-3/4 justify-center">
        <h1 className="text-white text-3xl title-font font-medium mb-7">
          주문하기
        </h1>
        <div className="mb-4">
          <label className="leading-7 text-sm text-gray-400">이름</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label className="leading-7 text-sm text-gray-400">연락처</label>
          <input
            type="tel"
            id="usercontact"
            name="usercontact"
            placeholder="숫자만 입력해 주세요 하이픈 - 작성불가"
            pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
            className="w-full appearance-none bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label className="leading-7 text-sm text-gray-400">이메일</label>
          <input
            type="email"
            id="useremail"
            name="useremail"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label className="leading-7 text-sm text-gray-400">
            배송받을 주소
          </label>
          <input
            type="text"
            id="useraddress"
            name="useraddress"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          onClick={onClickBuyNow}
          className="mt-5 flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          주문완료
        </button>
      </div>
      <SuccessModal
        open={openModal}
        close={onClickCloseModal}
        header="성공!"
        body="전체상품 주문이 완료되었습니다 빠른 시일 내에 배송해드릴게요!"
        buttonbody="완료"
      ></SuccessModal>
    </section>
  );
}

export default BasketsBuyItem;
