import axios from "axios";
import { useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Store/AuthContext";

function MainLogin() {
  // 네비게이션
  const navigate = useNavigate();

  // 컨텍스트 관련
  const authCtx = useContext(AuthContext);

  // 이메일, 비밀번호 저장 State
  const [email, setEmail] = useState("");

  // 이메일, 비밀번호 에러메시지 State
  const [emailMessage, setEmailMessage] = useState("");

  // 이메일 비밀번호 입력확인 State
  const [isEmail, setIsEmail] = useState(false);

  // 이메일 관련 유효성 검사 및 이메일 저장
  const onChangeEmail = useCallback((e) => {
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식을 확인해주세요!");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다!");
      setIsEmail(true);
    }
  }, []);

  // 이메일 전송 관련 Axios
  const PostLogin = async () => {
    try {
      const req = await axios.post(
        `${process.env.REACT_APP_FINDPASSWORD}${process.env.REACT_APP_API_KEY}`,
        { requestType: "PASSWORD_RESET", email: email }
      );
      authCtx.login(req.data.idToken);
      alert("이메일 전송에 성공하였습니다.");
    } catch (e) {
      console.log(e);
      alert("이메일 전송에 실패하였습니다.");
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 mt-10 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-1/2 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg font-medium title-font mb-5">
            비밀번호 재설정
          </h2>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">이메일</label>
            <input
              type="email"
              id="text"
              name="email"
              onChange={onChangeEmail}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {email.length > 0 && (
              <span
                className={`opacity-70 ${
                  isEmail ? "text-green-700" : "text-red-800"
                }`}
              >
                {emailMessage}
              </span>
            )}
          </div>
          <button
            onClick={PostLogin}
            className={`mt-5 ${
              !isEmail
                ? "text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none rounded text-lg"
                : "text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            }`}
            disabled={!isEmail}
          >
            이메일 전송
          </button>
          <p className="text-xs font-medium mt-7 text-center">
            이메일 작성 후, 전송 버튼 클릭시 재설정 이메일이 전송됩니다!
          </p>
          <button
            onClick={() => navigate("/login")}
            className="mt-5 text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none rounded text-sm"
          >
            로그인하기
          </button>
        </div>
      </div>
    </section>
  );
}

export default MainLogin;
