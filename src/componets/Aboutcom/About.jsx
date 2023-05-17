import Aboutcom from "./Aboutcom";

function About() {
  return (
    <div className="container ">
      <section className="tripcards mt-5">
        <div className="container d-flex flex-column justify-content-center text-align">
     
          <div className=" row mt-4  d-flex  flex-wrap justify-content-around  p-0 ">
            <div className="col-sm-12 col-md-4 p-3">
              <Aboutcom
                Habout="Our History"
                Pabout="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eveniet tempore magni non impedit, ducimus aspernatur iste laudantium voluptatibus praesentium recusandae cum corporis? Autem, temporibus nemo blanditiis corporis ipsam beatae."
              />
            </div>
            <div className="col-sm-12 col-md-4 p-3">
              <Aboutcom
                Habout="Our Mission"
                Pabout="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eveniet tempore magni non impedit, ducimus aspernatur iste laudantium voluptatibus praesentium recusandae cum corporis? Autem, temporibus nemo blanditiis corporis ipsam beatae."
              />
            </div>
            <div className="col-sm-12 col-md-4 p-3">
              <Aboutcom
                Habout="Our History"
                Pabout="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eveniet tempore magni non impedit, ducimus aspernatur iste laudantium voluptatibus praesentium recusandae cum corporis? Autem, temporibus nemo blanditiis corporis ipsam beatae."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
