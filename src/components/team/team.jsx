import { teamMembers } from "../../utils/data";
import TeamSingle from "../team-single/teamSingle";
import "./team.css";

const Team = () => {
  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div>
        {teamMembers?.map((item, index) => {
          return <TeamSingle key={index} name={item.name} position={item.position} img={item.img} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default Team;
