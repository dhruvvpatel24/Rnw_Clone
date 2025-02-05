import Mentor from "./Mentor";
import MentorCardUi from "./MentorCardUi";

const Mentorpage = () => {
    return (
      <>
        <div className="container py-5  ">
          <h1 className="text-dark  mb-4 text-center">
          Our Syllabus Mentor
          </h1>
          <div className="row " >
            {Mentor.map((ele,index) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6" key={index}>
                    <MentorCardUi  icon={ele.icon} title={ele.title} para={ele.para} span={ele.span}  />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  export default Mentorpage;