import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorModal } from "../Component/Modal/ErrorModal";

function ErrorPage() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const onClickOpenModal = () => {
    setOpenModal(true);
  };
  const onClickCloseModal = () => {
    setOpenModal(false);
  };
  const onClickLogin = () => {
    setOpenModal(false);
    navigate("/login");
  };
  return (
    <div className="flex min-h-full">
      <button
        className="flex m-auto p-7 bg-orange-800 text-white font-medium text-lg uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg transition duration-150 ease-in-out"
        onClick={onClickOpenModal}
      >
        접근할 수 없습니다!
      </button>
      <ErrorModal
        open={openModal}
        close={onClickCloseModal}
        header="접근오류!"
        body="알 수 없는 경로로 진입하셨습니다! 홈페이지로 돌아가 로그인 해주세요!"
        buttonbody1="로그인하기"
        buttonbody2="닫기"
        onClick={onClickLogin}
      ></ErrorModal>
    </div>
  );
}

export default ErrorPage;
