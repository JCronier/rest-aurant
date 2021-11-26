// import axios from "axios";
const axios = require("axios")

const qrCode = async (id) => {
  const qrObject = {
    data: `http://localhost:3000/?table=${id}`,
    size: 300,
    download: true,
    file: 'svg'
  };

  const qrUrl = "https://cors-anywhere.herokuapp.com/https://api.qrcode-monkey.com//qr/custom";

  try {
    const { data } = await axios.post(qrUrl, qrObject);
    return data.imageUrl;
  } catch (e) {
    console.log(e.message);
  }
};

export default qrCode;
// (async () => {console.log(await qrCode(1));})();
