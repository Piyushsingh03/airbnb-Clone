import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddressLink from "../AddressLink";
import PhotoGallery from "../PhotoGallery";
import BookingsDate from "../BookingsDate";

export default function BookingPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return "";
  }

  return (
    <div className="my-8 ">
      <h1 className="text-3xl">{booking.place.title}</h1>
      <AddressLink className="my-2 ">{booking.place.address}</AddressLink>

      <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-4">Your Booking Information</h2>
          <BookingsDate booking={booking} />
        </div>

        <div className="bg-primary p-6 text-white rounded-2xl">
          Total Bill Amount:
          <div className="text-3xl"> ₹{booking.price}</div>
        </div>
      </div>

      <PhotoGallery place={booking.place} />
    </div>
  );
}
