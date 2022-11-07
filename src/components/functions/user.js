import axios from "axios";

export const newProfilePicture = async (url, token) => {
    console.log(url);
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/updateProfilePicture`,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "okay";
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

//add friend
export const addFriend = async (id, token) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/addFriend/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      return "ok";
    } catch (error) {
      //console.log(error.response.data.message);
      return error.response.data.message;
    }
  };
  
//cancel request
  export const cancelRequest = async (id, token) => {

    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/cancelRequest/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return "ok";
    } catch (error) {
      return error.response.data.message;
    }
  };

  export const acceptRequest = async (id, token) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/acceptRequest/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return "ok";
    } catch (error) {
      return error.response.data.message;
    }
  };

  export const unfriend = async (id, token) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/unfriend/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return "ok";
    } catch (error) {
      return error.response.data.message;
    }
  };
  
  export const deleteRequest = async (id, token) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/deleteRequest/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return "ok";
    } catch (error) {
      return error.response.data.message;
    }
  };


  // finding user's friends,requests and sent requests
export const getFriendsPageInfos = async (token) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/getFriendsPageInfos`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return {status:"ok",data}
    } catch (error) {
      return error.response.data.message;
    }
  };

  //for home page
  export const getAllUsers = async (token) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/getAllUsers`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return {status:"ok",data}
    } catch (error) {
      return error.response.data.message;
    }
  };

  