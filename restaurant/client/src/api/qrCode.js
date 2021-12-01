const axios = require("axios")

const api_url = process.env.REACT_APP_NGROK_URL

const qrCode = async (id) => {
  const qrObject = {
    data: `${api_url}/?table=${id}`,
    size: 300,
    download: true,
    file: 'svg'
  };

  const qrUrl = "https://cors-anywhere.herokuapp.com/https://api.qrcode-monkey.com//qr/custom";

  try {
    const { data } = await axios.post(qrUrl, qrObject);
    return data.imageUrl;
  } catch(e) {
    console.log(e.message);
  }
};

export default qrCode;
