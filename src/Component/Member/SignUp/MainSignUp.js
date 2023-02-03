import axios from "axios";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorModal } from "../../Modal/ErrorModal";
import { SuccessModal } from "../../Modal/SuccessModal";

function MainSignUp() {
  // 네비게이션
  const navigate = useNavigate();

  // 이메일, 비밀번호 저장 State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 이메일, 비밀번호 에러메시지 State
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 이메일 비밀번호 입력확인 State
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [ispasswordConfirm, setIsPasswordConfirm] = useState(false);

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

  // 비밀번호 관련 유효성 검사 및 비밀번호 저장
  const onChangePassword = useCallback((e) => {
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("영문, 숫자 8자리 이상 입력해주세요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("올바른 비밀번호 형식입니다!");
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호가 일치합니다.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 맞지 않습니다.");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  // 성공 모달 관련
  const [openModal, setOpenModal] = useState(false);

  const onClickCloseModal = () => {
    setOpenModal(false);
    navigate("/login");
  };

  // 실패 모달 관련
  const [erropenModal, setErrOpenModal] = useState(false);

  const onClickCloseErrModal = () => {
    setErrOpenModal(false);
  };
  const onClickLogin = () => {
    setErrOpenModal(false);
    navigate("/login");
  };

  // 회원가입 관련 Axios
  const PostSignUp = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_SIGNUP}${process.env.REACT_APP_API_KEY}`,
        { email: email, password: password }
      );
      setOpenModal(true);
    } catch (e) {
      setErrOpenModal(true);
    }
  };

  // 엔터키 입력 이벤트
  const handlerOnKeyDown = (e) => {
    if (isEmail && isPassword && ispasswordConfirm && e.key === "Enter") {
      PostSignUp();
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 mt-10 body-font min-h-full pb-24">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-1/2 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg font-medium title-font mb-5">
            회원가입
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
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={onChangePassword}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {password.length > 0 && (
              <span
                className={`opacity-70 ${
                  isPassword ? "text-green-700" : "text-red-800"
                }`}
              >
                {passwordMessage}
              </span>
            )}
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">
              비밀번호 확인
            </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              onChange={onChangePasswordConfirm}
              onKeyDown={handlerOnKeyDown}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {passwordConfirm.length > 0 && (
              <span
                className={`opacity-70 ${
                  ispasswordConfirm ? "text-green-700" : "text-red-800"
                }`}
              >
                {passwordConfirmMessage}
              </span>
            )}
          </div>
          <button
            onClick={PostSignUp}
            className={`mt-5 ${
              !(isEmail && isPassword && ispasswordConfirm)
                ? "text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none rounded text-lg"
                : "text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            }`}
            disabled={!(isEmail && isPassword && ispasswordConfirm)}
          >
            회원가입
          </button>
          <p className="text-xs font-medium mt-7 text-center">
            회원가입 양식을 반드시 지켜주세요!
          </p>
        </div>
      </div>
      <SuccessModal
        open={openModal}
        close={onClickCloseModal}
        header="성공!"
        body="회원가입이 완료되었습니다. 로그인 창으로 이동합니다!"
        buttonbody="이동"
      ></SuccessModal>
      <ErrorModal
        open={erropenModal}
        close={onClickCloseErrModal}
        header="실패!"
        body="회원가입이 정상적으로 이루어지지 않았습니다."
        buttonbody1="뒤로가기"
        buttonbody2="닫기"
        onClick={onClickLogin}
      ></ErrorModal>
    </section>
  );
}

export default MainSignUp;
