import { useParams } from "react-router-dom";
import { MainHomeData } from "../../Data/Data";

function MainBuyItem() {
  const { id } = useParams();

  // 더미데이터 ID Number로 감싸기 -> 감싸지 않을경우 string 타입으로 false 출력
  const DataID = Number(id);

  // 더미데이터 Filter
  const Info = MainHomeData.filter((Data) => Data.ID === DataID);

  // 필터된 더미데이터 정보 MAP
  const InfoCATEGORY = Info.map((el) => el.CATEGORY);
  const InfoNAME = Info.map((el) => el.NAME);
  const InfoPRICE = Info.map((el) => el.PRICE);
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="lg:w-1/3 md:w-1/2 bg-gray-700 shadow-md rounded-2xl  p-8 flex flex-col m-auto w-3/4 mt-20 mb-20">
        <h1 className="text-white text-3xl title-font font-medium mb-7">
          구매하기
        </h1>
        <div className="mb-4">
          <label className="leading-7 text-sm text-gray-400">카테고리</label>
          <input
            type="text"
            id="itemcategory"
            name="itemcategory"
            placeholder={InfoCATEGORY}
            disabled="disabled"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label className="leading-7 text-sm text-gray-400">상품명</label>
          <input
            type="text"
            id="itemname"
            name="itemname"
            placeholder={InfoNAME}
            disabled="disabled"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label className="leading-7 text-sm text-gray-400">가격</label>
          <input
            type="text"
            id="itemprice"
            name="itemprice"
            placeholder={InfoPRICE}
            disabled="disabled"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
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
        <button className="mt-5 flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          구매완료
        </button>
      </div>
    </section>
  );
}
export default MainBuyItem;
