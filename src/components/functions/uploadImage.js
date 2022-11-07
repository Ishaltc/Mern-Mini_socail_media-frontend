import axios from "axios";

export const uploadImage = async (formData, path, token) => {
   
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/uploadImage`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "content-type": "multipart/form-data",
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
