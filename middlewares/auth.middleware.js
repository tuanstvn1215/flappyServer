export default {
  auth: async (req, res) => {
    try {
      if (req.signedCookies._id) {
        let user = await UserModel.findById(req.signedCookies._id);
        res.locals.user = user;
        next();
        return;
      } else {
        res.json({ code: 0, message: "Không có signed cookie" });
      }
      return;
    } catch (error) {
      res.json({ code: 0, message: error.message });
    }
  },
};
