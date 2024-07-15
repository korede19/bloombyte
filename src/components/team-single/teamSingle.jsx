import "./teamSingle.css";

// eslint-disable-next-line react/prop-types
const TeamSingle = ({ text, name, img, position }) => {
  return (
    <div className="team-single-container">
      <h4>{text}</h4>
      <div className="team-text">
        <div>
          <p>{name}</p>
          <p>{position}</p>
        </div>
        <img src={img} alt="Image" />
      </div>
    </div>
  );
};

export default TeamSingle;
