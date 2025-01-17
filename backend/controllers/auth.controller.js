import User from "../models/user.model.js";

// export const register = async (req, res) => {

//   res.send("Register");

//   try {
//     const { fullName, email, username, password, confirmPassword, gander, profilePic } =
//       req.body;

//       if (password !== confirmPassword) {
//         return res.status(400).json({ error: "Passwords don't match" });
//     }

//     const user = await User.findOne({ username });

//     if (user) {
//         return res.status(400).json({ error: "Username already exists" });
//     }

//     // https://avatar-placeholder.iran.liara.run/document

//     const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
//     const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

//     const newUser = new User({
//       fullName,
//       email,
//       username,
//       password,
//       gander,
//       profilePic: gander === "male" ? boyProfilePicture : girlProfilePicture,

//         })

//     await newUser.save();
//     res.status(201).json({
//         _id: newUser._id,
//         fullName: newUser.fullName,
//         email: newUser.email,
//         gander: newUser.gander,
//         profilePicture: newUser.profilePic,
        
//     });

//   } catch (error) {
//     console.log(
//         `Error in register controller: ${error.message}`
//     );
//     res.status(500).json({error: "Internal server error"});
//   }
// };


export const register = async (req, res) => {
  try {
    const { fullName, email, username, password, confirmPassword, gander } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    // Check if the username already exists
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // URLs for profile pictures based on gender
    const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // Create a new user
    const newUser = new User({
      fullName,
      email,
      username,
      password,
      gander,
      profilePic: gander === "male" ? boyProfilePicture : girlProfilePicture,
    });

    // Save the user to the database
    await newUser.save();

    // Send success response
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      username: newUser.username,
      gander: newUser.gander,
      profilePicture: newUser.profilePic,
    });
  } catch (error) {
    console.error(`Error in register controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const login = (req, res) => {
  res.send("Login");
};



export const logout = (req, res) => {
  res.send("Logout successfully");
};
