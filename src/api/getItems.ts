import axios from "axios";

export const getItems = async () => {
  try {
    const response = await axios.get("http://localhost:3001/items");
    console.log("getItems successful");
    return response.data; // 성공적으로 아이템을 가져온 경우 true 반환
  } catch (error) {
    console.error("Error:", error);
    throw new Error();
  }
};
