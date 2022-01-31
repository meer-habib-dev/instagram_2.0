import { useEffect, useState } from "react";

import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../firebase";
import Moment from "react-moment";
const Post = ({ id, caption, img, userimg, username }) => {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);
  const likePost = async () => {
    await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
      username: session.user.username,
    });
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToPost = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToPost,
      username: session.user.username,
      userImage: session.user.image,
      timeStamp: serverTimestamp(),
    });
  };
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timeStamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );
  console.log("user comment", comments);
  return (
    <div className="bg-white border rounded-sm my-7">
      {/* header */}
      <div className="flex items-center p-5">
        <img
          src={userimg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      <img src={img} className="w-full object-cover" alt="" />
      {/* buttons */}
      {session && (
        <div className="flex justify-between pt-4 px-4">
          <div className="flex space-x-4">
            <HeartIcon onClick={likePost} className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* captions */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span> {caption}
      </p>
      {/* comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((com) => (
            <div key={com.id} className="flex items-center space-x-2 mb-3 ">
              <img
                src={com.data().userImage}
                alt=""
                className="h-7 rounded-full"
              />
              <p className="text-sm flex-1">
                {" "}
                <span className="font-bold"> {com.data().username}</span>{" "}
                {com.data().comment}
              </p>
              <Moment
                className="text-xs pr-4"
                fromNow
                date={com?.data()?.timeStamp?.toDate()}
              ></Moment>
            </div>
          ))}
        </div>
      )}
      {/* inputs */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none outline-none focus:ring-0 flex-1"
          />
          <button
            type="submit"
            disabled={!comment}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
