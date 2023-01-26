import { useNavigate } from "react-router-dom";
import { MainAccData } from "../../Data/Data";

function MainAcc() {
  const navigate = useNavigate();
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {MainAccData &&
            MainAccData.map((el, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => navigate(`${el.ID}`)}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full mb-40"
                >
                  <img
                    alt="ecommerce"
                    className="object-contain object-center w-full h-full block"
                    src={el.IMG}
                  />

                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {el.CATEGORY}
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      {el.NAME}
                    </h2>
                    <p className="mt-1">₩{el.PRICE}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default MainAcc;
