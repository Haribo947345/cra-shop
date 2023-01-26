import { useSelector } from "react-redux";

function MainBasket() {
  const a = useSelector((state) => state.baskets);
  console.log(a);
  return (
    <div className="container text-center text-red-50">
      <h1>장바구니</h1>
    </div>
  );
}

export default MainBasket;
