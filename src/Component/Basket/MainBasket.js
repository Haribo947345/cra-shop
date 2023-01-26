import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function MainBasket() {
  const basketsData = useSelector((state) => state.baskets);
  const [data, setData] = useState(basketsData);

  useEffect(() => {
    setData(basketsData);
  }, [basketsData]);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="flex justify-center text-2xl text-white mb-7">
          장바구니
        </h1>
        <div className="flex items-center mx-auto justify-center">
          <div className="flex sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-lg mb-2">
              {data &&
                data.map((el, key) => {
                  return (
                    <div key={key}>
                      <div className="flex">
                        <span className="mr-5">{el.NAME}</span>
                        <button className="ml-auto text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded">
                          삭제
                        </button>
                      </div>
                      <div>{el.PRICE}</div>
                      <div className="flex items-center  mx-auto border-b pb-5 mb-10 border-gray-800 sm:flex-row flex-col justify-center"></div>
                    </div>
                  );
                })}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBasket;
