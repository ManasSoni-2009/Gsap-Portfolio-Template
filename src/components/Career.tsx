import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Journey <span>&</span>
          <br /> Qualifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>University Admission</h4>
                <h5>B.Tech in AI & Data Science</h5>
              </div>
              <h3>Upcoming</h3>
            </div>
            <p>
              Looking forward to getting admission in a prestigious university
              to formally expand my expertise in Artificial Intelligence and Data Science.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>JEE Mains Excellence</h4>
                <h5>Qualification</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Secured an outstanding qualification in the highly competitive
              Joint Entrance Examination, demonstrating strong analytical and
              problem-solving capabilities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School Graduation</h4>
                <h5>Education</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Passed with excellent academic standing, building a robust
              foundation in Mathematics, Physics, and analytical logic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
