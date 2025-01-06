export const register = async(req, res) => {
    try {
        const { name, email, password, gander, profilePicture } = req.body;
    }catch (error) {
        res.status(500).send({ message: error.message });
    }
};
export const login = (req, res) => {
    res.send('Login');
};
export const logout = (req, res) => {
    res.send('Logout successfully');
};