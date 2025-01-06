import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { name, email, username, password, confirmPassword, gander, profilePicture } =
      req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
        return res.status(400).json({ error: "Username already exists" });
    }

    // https://avatar-placeholder.iran.liara.run/document

    const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      name,
      email,
      username,
      password,
      gander,
      profilePicture: gander === "male" ? boyProfilePicture : girlProfilePicture,

        })

    await newUser.save();
    res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        gander: newUser.gander,
        profilePicture: newUser.profilePicture,
        
    });

  } catch (error) {
    console.log(
        `Error in register controller: ${error.message}`
    );
    res.status(500).json({error: "Internal server error"});
  }
};



export const login = (req, res) => {
  res.send("Login");
};



export const logout = (req, res) => {
  res.send("Logout successfully");
};
