function MainLogin() {
  return (
    <section className="text-gray-400 bg-gray-900 mt-10 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-1/2 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg font-medium title-font mb-5">
            로그인
          </h2>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            로그인
          </button>
          <p className="text-xs mt-7 text-center">
            이메일 형식을 반드시 확인해 주세요!
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainLogin;