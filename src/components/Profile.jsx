import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          src="https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="main_content_img"
        />
      </div>
      <div>ava + description</div>
      <div>
        My Posts
        <div>New Post</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
