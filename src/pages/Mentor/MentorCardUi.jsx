const MentorCardUi = ({ icon, title, para }) => {
    return (
      <>
        <div className="card shadow   mt-4  border-0 "  >
          <div className="col-xl-3 col-lg-4 col-md-6 mb-3  ">

            <div className=" position-relative profile-card ">
            <img src={icon}  alt=""  />
            </div>

            <div className="black position-absolute bottom-0 w-100 d-flex justify-content-center flex-column ">
            <h2  className="profile-font text-center my-1">{title} </h2>
            <span></span>
            <p class="px-2 fs-16 text-dark font-small " style={{height:"100px"}}>{para}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default MentorCardUi;



//   height="190px"

// className="align-self-center rounded"