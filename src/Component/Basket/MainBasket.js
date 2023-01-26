import { useSelector } from "react-redux";

function MainBasket() {
  const a = useSelector((state) => state.baskets);
  console.log(a);
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-medium mb-2">
              {a[0].NAME}
            </h2>
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
            <div className="mt-3">
              <button className="text-white bg-indigo-500 py-2 px-6 border-0 focus:outline-none rounded hover:bg-indigo-600 flex ml-auto">
                바로구매
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBasket;
