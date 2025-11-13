import connectDB from "@/utils/db";
import Booking from "@/models/Booking";

connectDB();

// Create booking
export async function POST(req) {
  try {
    const data = await req.json();
    const booking = await Booking.create(data);
    return new Response(JSON.stringify({ message: "Booking saved", booking }), { status: 201, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}

// Get all bookings
export async function GET(req) {
  try {
    const bookings = await Booking.find();
    return new Response(JSON.stringify(bookings), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}

// Update booking
export async function PUT(req) {
  try {
    const { id, ...updateData } = await req.json();
    if (!id) return new Response(JSON.stringify({ message: "Booking ID required" }), { status: 400 });

    const updatedBooking = await Booking.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedBooking) return new Response(JSON.stringify({ message: "Booking not found" }), { status: 404 });

    return new Response(JSON.stringify({ message: "Booking updated", booking: updatedBooking }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}

// Delete booking
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    if (!id) return new Response(JSON.stringify({ message: "Booking ID required" }), { status: 400 });

    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (!deletedBooking) return new Response(JSON.stringify({ message: "Booking not found" }), { status: 404 });

    return new Response(JSON.stringify({ message: "Booking deleted" }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
