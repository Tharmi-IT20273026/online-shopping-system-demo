import React from "react";
import Navebar from "../components/Navebar";
import Slider from "../components/Slider"
import Categories from "../components/Categories";

const Home= () => {
    return (
        <div>
            <Navebar />
          <Slider />
            <Categories />
        </div>
    )
}

export default Home