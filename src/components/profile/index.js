import "./style.css";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import UpdateProfilePicture from "./UpdateProfilePicture";
import Header from "../header";

const styles = {
  largeIcon: {
    width: 100,
    height: 100,
  },
};
export default function UpdateProfile({ setOpenModal }) {
  
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const refInput = useRef(null);
  
  const handleImage = (pic) => {
    // setLoading(true);
    if (pic === undefined) {
    }

    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "upload");
      fetch("https://api.cloudinary.com/v1_1/dnjk3wwxu/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url.toString());
          // setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          // setLoading(false);
        });
      }
  };





  return (
    <>
  
    <div className="modalBackground" style={{ marginTop: "10px" }}>
      {!image && (
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
          <div className="title">
            <h1>Upload Profile Picture</h1>
          </div>
          <div className="body">
            <input
              type="file"
              ref={refInput}
              hidden
              onChange={(e) => handleImage(e.target.files[0])}
              accept="image/jpeg,image/png,image/webp,image/gif,image/jpg"
            />
           
              <Button
              style={{marginTop:"50px"}}
                variant="contained"
                onClick={() => refInput.current.click()}
              >
                Upload
              </Button>
            

            {/* {error && (
              <div className="post_error comment_error">
                <div className="postError_error">{error}</div>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setError("")}
                >
                  Try Again
                </Button>
              </div>
            )} */}

            <div iconStyle={styles.largeIcon}>{/* <FileUploadIcon /> */}</div>
          </div>
          <div className="footer"></div>
        </div>
      )}
      {image && (
        <UpdateProfilePicture
          setImage={setImage}
          image={image}
          setError={setError}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
    </>
  );
}
