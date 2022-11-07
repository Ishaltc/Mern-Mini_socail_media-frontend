import { Link, useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Header from "../../components/header";
import {
  acceptRequest,
  addFriend,
  cancelRequest,
  deleteRequest,
  unfriend,
} from "../../components/functions/user";

export default function HomeModel() {
  const [friendShip, setFriendShip] = useState("");

  const { user } = useSelector((state) => ({ ...state }));
  const { name } = useParams();

  useEffect(() => {
    datas();
  }, [name,friendShip]);

  const getProfile = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/getProfile/${name}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      return data;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  };

  const datas = async () => {
    const res = await getProfile();

    setFriendShip(res);
  };

  const deleteRequestHandler = async () => {
    setFriendShip({ ...friendShip, requestSent: false });
    await deleteRequest(friendShip._id, user.token);
  };

  const acceptRequestHandler = async () => {
    setFriendShip({
      ...friendShip,
      friends: true,
      requestSent: false,
      requestReceived: false,
    });
    await acceptRequest(friendShip._id, user.token);
  };

  const addFriendHandler = async () => {
    setFriendShip({ ...friendShip, requestSent: true });
    await addFriend(friendShip._id, user.token);
  };

  const cancelRequestHandler = async () => {
    setFriendShip({ ...friendShip, requestSent: false });
    await cancelRequest(friendShip._id, user.token);
  };
  const unfriendHandler = async () => {
    setFriendShip({
      ...setFriendShip,
      friends: false,
      requestSent: false,
      requestReceived: false,
    });
    await unfriend(friendShip._id, user.token);
  };

  //  console.log(friendShip._id)
  return (
    <>
      <Header />
      <div className="modalBackgroundd">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <Link to="/">
              <button>X</button>
            </Link>
          </div>
          <div className="title">
            <div className="img_container">
              <img src={friendShip?.picture} alt="" />
            </div>
          </div>
          <div className="body">
            <p>{friendShip?.name}</p>
          </div>
          <div className="details">
            <span>{friendShip?.email}</span>
          </div>

          <div className="footer1">
            {friendShip?.friendShip?.requestSent ? (
              <>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => cancelRequestHandler()}
                >
                  Cancel Request
                </Button>
                {/* <Button variant="outlined" size="medium">
                  Cancel
                </Button> */}
              </>
            ) : (
              !friendShip?.friendShip?.requestSent &&
              !friendShip?.friendShip?.friends&&
              !friendShip?.friendShip?.requestReceived && (
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => addFriendHandler()}
                >
                  Add Friend
                </Button>
              )
            )}

            {friendShip.friendShip?.requestReceived && (
              <>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => acceptRequestHandler()}
                >
                  Accept
                </Button>
                <Button
                  variant="outlined"
                  size="medium"
                  onClick={() => deleteRequestHandler()}
                >
                  Ignore
                </Button>
              </>
            )}

            {friendShip.friendShip?.friends && (
              <>
                <Button variant="contained" color="success">
                  Following
                </Button>
                <Button
                  variant="outlined"
                  size="medium"
                  onClick={() => unfriendHandler()}
                >
                  Unfriend
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
