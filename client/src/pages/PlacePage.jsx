/* eslint-disable react/jsx-no-target-blank */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PhotoGallery from "../PhotoGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8">
      <h1 className="text-3xl">{place.title}</h1>
      <AddressLink>{place.address}</AddressLink>
      <PhotoGallery place={place} />

      <div className=" mt-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4 ">
            <h1 className="text-2xl font-semibold my-2 font-style">
              About this place
            </h1>
            {place.description}
          </div>
          Check-in: {place.checkIn}
          <br />
          Check-out: {place.checkOut}
          <br />
          Maximum Guests: {place.maxGuests}
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white border rounded-2xl p-4 mt-2">
        <div>
          <h2 className="text-2xl mt-1 font-semibold font-style">
            More to know
          </h2>
        </div>
        <div className="mt-1 mb-4 text-sm text-gray-800 leading-4">
          {place.extraInfo}
        </div>
      </div>
    </div>
  );
}
