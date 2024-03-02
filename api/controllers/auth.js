export const register = async (req, res, next) => {

    try {
        const newUser = new User(req.body);
    } catch (err) {
        next(err);   
    }    

};

