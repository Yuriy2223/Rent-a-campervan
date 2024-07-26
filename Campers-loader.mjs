import fs from "fs";
import axios from "axios";

const loadData = async () => {
  const data = JSON.parse(fs.readFileSync("adverts.json", "utf8"));

  // // Видалення поля _id з кожного об'єкта
  // data.forEach(item => {
  //   delete item._id;
  // });

  for (const item of data) {
    try {
      const response = await axios.post(
        "https://669b8060276e45187d35aac9.mockapi.io/adverts",
        item
      );
      console.log(`Uploaded item with ID: ${response.data.id}`);
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else {
        console.error("Error uploading item:", error.message);
      }
    }
  }
};

loadData();

// для запуска node Campers-loader.mjs
// https://mockapi.io/
//https://www.figma.com/design/fnMWH0eBB7NnoqdAiiKWsQ/Test?node-id=0-1&t=sdcwvgkuKwNYjulj-0