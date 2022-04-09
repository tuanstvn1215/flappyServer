const url =
  process.env.dbUrl ||
  "mongodb+srv://tuanstvn1214:f2Yldb4X1INJz9Yx@cluster0.4hiz7.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require("mongoose");

mongoose.connect(
  url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      console.log(`không thể kết nối Mongodb, lỗi:${err}`);
    } else {
      console.log("kết nối Mongodb thành công");
    }
  }
);
module.exports = mongoose;
