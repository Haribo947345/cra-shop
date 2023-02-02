import { useNavigate } from "react-router-dom";
import MainModal from "../Component/Modal/MainModal";

function ErrorPage() {
  const navigate = useNavigate();
  const navigateButton = () => {
    navigate("/login");
  };
  return (
    <div className="flex min-h-full">
      <button
        className="flex m-auto p-7 bg-orange-800 text-white font-medium text-lg uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        접근할 수 없습니다!
      </button>
      <div>
        <MainModal
          title="접근 오류 알림"
          body="비정상적인 경로로 접근하셨습니다!"
          close="닫기"
          navigateButton={navigateButton}
          message="로그인하기"
        />
      </div>
    </div>
  );
}

export default ErrorPage;
