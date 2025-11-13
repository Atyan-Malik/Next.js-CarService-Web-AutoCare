import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  carModel: String,
  serviceType: String,
  date: String,
  message: String,
});

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;

