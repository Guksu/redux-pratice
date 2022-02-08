import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  return (
    <>
      <h1>ProfilePage</h1>
      <div> Name :{user.name} </div>
      <div> Age : {user.age} </div>
      <div> Email :{user.email} </div>
    </>
  );
}
export default Profile;
