const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dekasashimi:dekkasashimi@test.aadkksn.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("データベース接続に成功しました"))
.catch((err) => console.log(err));

app.listen(3000, () => {
console.log("サーバが起動しました。")
})
