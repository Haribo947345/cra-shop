import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Store/MemberSlice";

function MainHeader() {
  // 네비게이션
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn.user);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="text-gray-400 bg-slate-800 body-font top-0 w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div
          onClick={() => navigate("/")}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer"
        >
          <span className="ml-3 text-xl">동글쇼핑</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <span
            onClick={() => navigate("/iphone")}
            className="mr-5 hover:text-white cursor-pointer"
          >
            아이폰
          </span>
          <span
            onClick={() => navigate("ipad")}
            className="mr-5 hover:text-white cursor-pointer"
          >
            아이패드
          </span>
          <span
            onClick={() => navigate("mac")}
            className="mr-5 hover:text-white cursor-pointer"
          >
            맥
          </span>
          <span
            onClick={() => navigate("acc")}
            className="mr-5 hover:text-white cursor-pointer"
          >
            악세사리
          </span>
          {isLoggedIn ? (
            <span
              onClick={() => navigate("baskets")}
              className="mr-5 hover:text-white cursor-pointer"
            >
              장바구니
            </span>
          ) : null}
        </nav>
        {isLoggedIn ? (
          <button
            onClick={logoutHandler}
            className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 cursor-pointer"
          >
            로그아웃
          </button>
        ) : (
          <button
            onClick={() => navigate("login")}
            className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 cursor-pointer"
          >
            로그인
          </button>
        )}
      </div>
    </header>
  );
}

export default MainHeader;
