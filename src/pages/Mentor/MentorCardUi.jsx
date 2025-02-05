import { FaLinkedin,  FaTwitterSquare } from "react-icons/fa";


const MentorCardUi = ({ icon, title, para, span,  }) => {
  return (
    <>
      <div className="card shadow   mt-4  border-0 position-relative ">
        <img src={icon} alt="" className="profile-card " />

        <div className=" black card-body  position-absolute bottom-0 w-100 d-flex justify-content-center flex-column">
          <h2 className="profile-font text-center my-1">{title} </h2> 
          <span className="profile-description text-center">{para}</span>
          <span className="profile-description text-center">{span}</span>
          <div className="profile-manu-icon d-flex  justify-content-center">
          <a href="#" className="text-white  px-2 fs-3">  <FaLinkedin /></a>
          <a href="#" className="text-white  px-2 fs-3">  <FaTwitterSquare /></a>
          
        </div>
        
        </div>
       

      </div>
    </>
  );
};

export default MentorCardUi;

//   height="190px"

// className="align-self-center rounded"
