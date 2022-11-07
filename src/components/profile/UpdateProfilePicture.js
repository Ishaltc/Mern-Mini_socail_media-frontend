import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage } from "../functions/uploadImage";
import { newProfilePicture } from "../functions/user";
import getCroppedImg from "../../helpers/getCroppedImg";
import { useState } from "react";
import Cookies from "js-cookie";
import Header from "../header";

export default function UpdateProfilePicture({
  image,
  setOpenModal,
  setImage,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      
      const updated_picture = await newProfilePicture(image, user.token);
      if (updated_picture === "okay") {
        setLoading(false);
        Cookies.set(
          "user",
          JSON.stringify({
            ...user,
            picture: image,
          })
        );
        dispatch({
          type: "UPDATE_PICTURE",
          payload: image,
        });
        setOpenModal(false);
      } else {
        setLoading(false);
        setError(updated_picture);
      }
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <>

 
    <div className="modalBackground " style={{ marginTop: "10px" }}>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title"></div>
        <div className="body_image">
          <img src={image} alt="" />
        </div>
        <div className="footer">
            
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>

          <button type="submit" onClick={onSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
