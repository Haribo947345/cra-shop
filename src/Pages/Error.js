function ErrorPage() {
  return (
    <section className="flex justify-center items-center last:text-gray-400 bg-gray-900 body-font min-h-full pb-24">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="flex justify-center text-2xl text-white mb-7">
          잘못된 방식으로 접근하셨습니다!
          <br />
          로그인이 필요해요!
        </h1>
      </div>
    </section>
  );
}

export default ErrorPage;
