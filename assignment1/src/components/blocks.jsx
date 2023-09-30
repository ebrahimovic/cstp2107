
import '../App.css'

function Blocks({ name, email, photoUrl }) {

  
    return (
      <div className="mycells">
        <div>
          <img className="profile-image" src={photoUrl} />
        </div>
        <div className="profile-details">
          <h2 className="name">{name}</h2>
          <p className="email">{email}</p>
        </div>
      </div>
    );
  }


export default Blocks