import React from "react";
import { useNavigate } from "react-router-dom";
import { isWebShareSupported } from "./utils";

export default (props) => {
  const navigate = useNavigate();
  const id = props?.data?._id;
  const handleEdit = async () => {
    navigate("/builder/" + id);
  };
  const handleDelete = async () => {
    props?.handleDeleteForm(id);
  };

  const handleShare = async () => {
    const url = "http://localhost:3000/viewer/" + id;
    console.log(url);

    try {
      if (isWebShareSupported()) {
        await navigator.share({
          url: url,
        });
      } else {
        // copyToClipboard(url);
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };
  return (
    <div className="flex items-center gap-x-2  my-[2px]">
        <button
        className="bg-green-600 text-white px-4 py-1 leading-6  rounded-md"
        onClick={()=>navigate('/responses/'+id)}
      >
        Responses
      </button>
      <button
        onClick={handleEdit}
        className="bg-blue-600 text-white px-4  rounded-md text-md py-1 leading-6"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-600 text-white px-4 py-1 leading-6 rounded-md"
      >
        Delete
      </button>
      <a href={"http://localhost:3000/viewer/" + id} target="_blank">
        <button className="bg-green-600 text-white px-4 py-1 leading-6  rounded-md">
          Preview
        </button>
      </a>
      <button
        className="bg-green-600 text-white px-4 py-1 leading-6  rounded-md"
        onClick={handleShare}
      >
        Share
      </button>
      
    </div>
  );
};
