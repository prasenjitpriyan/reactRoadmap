import React from "react";

const Home = (props) => {
  //console.log("Home", props);
  return (
    <div>
      <div className="p-3 text-2xl text-white text-center font-bold">
        <h1>Home Component</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="container text-center bg-slate-300 p-2 rounded">
          <img
            className="object-contain hover:object-scale-down"
            src="https://images.pexels.com/photos/1983035/pexels-photo-1983035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/"
          />
          <span>Photo</span>
          <div>Price: $300</div>
          <div>
            <button
              onClick={() =>
                props.addToCartHandler({ pice: 3000, name: "Photo" })
              }
              className="bg-green-500 text-white p-1 rounded m-2"
            >
              Add to Cart
            </button>
            <button
              onClick={() => props.removeFromCartHandler()}
              className="bg-red-500 text-white p-1 rounded"
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
