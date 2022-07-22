import react from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="heading-1">
          <h1>Wanna contact us?</h1>
        </div>
      </div>

      <div className="container-1">
        <h3>
          <span>Owners:</span>
        </h3>
        <hr />
        <div className="container-1">
          <h3>
            <ol className="primary">
              <li>
                <i>
                  <a href="https://www.linkedin.com/in/harsh-tita-05a79b188/" target='_blank'><span className="primary-1">Mr. Harsh Tita</span></a>
                </i>
              </li>
              <li>
                <i>
                 <a href="https://www.linkedin.com/in/rashi-sharma-679256211/" target='_blank'><span className="primary-1">Ms. Rashi Sharma</span></a> 
                </i>
              </li>
              <li>
                <i>
                 <a href="https://www.linkedin.com/in/anisha-sancheti-226825226/" target='_blank'> <span className="primary-1">Ms. Anisha Sancheti</span></a>
                </i>
              </li>
            </ol>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Contact;
