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
		const { fullName, email, username, password, confirmPassword, gender } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		// HASH PASSWORD HERE
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// https://avatar-placeholder.iran.liara.run/

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

		const newUser = new User({
			fullName,
			username,
      email,
			password: hashedPassword,
			gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});

		if (newUser) {
			// Generate JWT token here
			// generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				email: newUser.email,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};


export const login = (req, res) => {
  res.send("Login");
};



export const logout = (req, res) => {
  res.send("Logout successfully");
};
