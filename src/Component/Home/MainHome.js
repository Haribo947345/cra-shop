import MainFooter from "./MainFooter";
import { MainHomeData } from "../../Data/Data";

function MainHome() {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {MainHomeData &&
              MainHomeData.map((el) => {
                return (
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-40">
                    <img
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full block"
                      src={el.IMG}
                    />

                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {el.CATEGORY}
                      </h3>
                      <h2 className="text-black title-font text-lg font-medium">
                        {el.NAME}
                      </h2>
                      <p className="mt-1">{el.PRICE}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <MainFooter />
    </>
  );
}

export default MainHome;
