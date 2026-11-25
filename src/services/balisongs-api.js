import axios from "axios";

//? змінна з головною частиною посилання на сервер
const BASE_URL = "http://localhost:3001/";

const ENDPOINT_BALISONGS = "balisongs";

export async function fetchBaliosngs() {
    const url = `${BASE_URL}${ENDPOINT_BALISONGS}`;

    try {
        const response = await axios.get(`${url}`);
        console.log("🅰️xios==>✅response:", response);

        return response.data;
    } catch (err) {
        console.log("🅰️xios==>❌error-(інша помилка):", err);
        throw err;
    }
}
