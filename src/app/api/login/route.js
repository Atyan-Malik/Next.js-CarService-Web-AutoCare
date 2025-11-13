import connectDB from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

connectDB();

export async function POST(req) {
  // Create Register User
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: "All fields required" }), {
        status: 400,
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 409,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const { password: pwd, ...userData } = newUser._doc;

    return new Response(
      JSON.stringify({ message: "User created", user: userData }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}

export async function GET(req) {
  // Get all users
  try {
    const users = await User.find().select("-password");
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}

export async function PUT(req) {
  // Update user
  try {
    const { id, name, email, password } = await req.json();

    if (!id)
      return new Response(JSON.stringify({ message: "User ID required" }), {
        status: 400,
      });

    const updateData = { name, email };
    if (password) updateData.password = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    }).select("-password");

    if (!updatedUser)
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });

    return new Response(
      JSON.stringify({ message: "User updated", user: updatedUser }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}

export async function DELETE(req) {
  // Delete user
  try {
    const { id } = await req.json();
    if (!id)
      return new Response(JSON.stringify({ message: "User ID required" }), {
        status: 400,
      });

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser)
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });

    return new Response(JSON.stringify({ message: "User deleted" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}
