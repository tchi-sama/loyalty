const cx = window.innerWidth / 2;
const cy = window.innerHeight / 2;

function Avatar({ user }) {
  return (
    <div>
      {user && (
        <img
          style={{ ...AvatarStyle, top: user.y + cy, left: user.x + cx }}
          className="translate-x-[-50%] translate-y-[-50%] hover:scale-105 duration-300 cursor-pointer border-white border-2 shadow-lg"
          src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
          alt=""
        />
      )}
    </div>
  );
}

export default Avatar;

const AvatarStyle = {
  position: "absolute",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
};
