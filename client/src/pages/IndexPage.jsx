/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from "../Image";
export default function indexPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces([...response.data]);
    });
  }, []);
  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-col-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((place, index) => (
          <Link to={"/place/" + place._id} key={index}>
            <div className="bg-gray-500 rounded-2xl flex mb-2">
              {place.photos?.[0] && (
                <Image
                  className="rounded-2xl object-cover aspect-square "
                  src={place.photos?.[0]}
                  alt=""
                />
              )}
            </div>

            <h1 className="text-sm font-bold truncate "> {place.title}</h1>
            <h2 className="my-1 text-gray-600 leading-4">{place.address}</h2>

            <div>
              <span className="my-1 text-black-500 font-semibold text-sm">
                {" "}
                ₹{place.price} night
              </span>
            </div>
          </Link>
        ))}
    </div>
  );
}
