import TeamOne from "./TeamOne";
const Profile = ({ statePlayerInfo, stateMatches }) => {
  return (
    <div className="flex flex-col w-full p-5 ">
      <div className="container m-auto">
        <TeamOne></TeamOne>
      </div>
    </div>
  );
};
export default Profile;
