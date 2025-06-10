import React from "react";
import { Footer, Navbar } from "../components";

const Experts = () => {
  return (
    <div>
      <Navbar />
      <div className="" style={{ paddingTop: "90px", paddingBottom:"90px" }}>
        <div className="bhbk pt-5">
          <p>Gold Experts</p>
        </div>

        <div className="experts  row justify-content-evenly ">
          {/* Expert 1 */}
          <div className="expert shadow">
            <div className="ex-id">
              <div className="circle"></div>
              <h3 className="pt-5">Rick Ackerman</h3>
            </div>
            <div className="advice shadow">
              <p>Phenomenally accurate forecasts for stocks and <br /> commodities</p>
            </div>
            <a target="blank" href="https://www.rickackerman.com/">Read More ...</a>
          </div>

          {/* Expert 2 */}
          <div className="expert ex2 shadow">
            <div className="ex-id">
              <div className="circle"></div>
              <h3 className="pt-5">Giovanni Marolda</h3>
            </div>
            <div className="advice shadow">
              <p>
                Teaching you and providing insight into <br /> Geometric
                Synthesis, a powerful <br /> technical tool that will give you a
                trading edge.
              </p>
            </div>
             <a target="blank" href="https://www.goldpriceforecast.com/gold-experts/giovanni-marolda-and-davide-catanossi/">Read More ...</a>
          </div>

          {/* Expert 3 */}
          <div className="expert ex3 shadow">
            <div className="ex-id">
              <div className="circle"></div>
              <h3 className="pt-3">Frano Grgić</h3>
            </div>
            <div className="advice shadow">
              <p>Guiding Your Success in the Forex Journey</p>
            </div>
             <a target="blank" href="https://www.goldpriceforecast.com/gold-experts/frano-grgic/">Read More ...</a>
          </div>

          {/* Expert 4 */}
          <div className="expert ex4 shadow">
            <div className="ex-id">
              <div className="circle"></div>
              <h3 className="pt-3">Louise street</h3>
            </div>
            <div className="advice shadow">
              <p>Elliott waves are my passion!</p>
            </div>
             <a target="blank" href="https://www.gold.org/goldhub/gold-focus/author/louise-street">Read More ...</a>
          </div>

          {/* Expert 5 */}
          <div className="expert ex5 shadow">
            <div className="ex-id">
              <div className="circle"></div>
              <h3 className="pt-3">Anna Radomska</h3>
            </div>
            <div className="advice shadow">
              <p>Supporting folks in their lifelong investment journey</p>
            </div>
             <a target="blank"  href="https://www.goldpriceforecast.com/gold-experts/anna-radomska/">Read More ...</a>
          </div>

          {/* Expert 6 */}
          <div className="expert ex6 shadow">
            <div className="ex-id">
              <div className="circle"></div>
              <h3 className="pt-3">Przemysław K. Radomski, CFA</h3>
            </div>
            <div className="advice shadow">
              <p>
                To provide people with solutions to help them grow <br />, be
                happier, and make the world a better place.
              </p>
            </div>
             <a target="blank" href="https://www.goldpriceforecast.com/gold-experts/przemyslaw-radomski/">Read More ...</a>
          </div>

          {/* Expert 7 */}
          <div className="expert ex7 shadow">
            <div className="ex-id">
              <div className="circle"></div>
              <h3 className="pt-3">Paul Rejczak</h3>
            </div>
            <div className="advice shadow">
              <p>Improving your odds on the market over the <br /> long-term.</p>
            </div>
             <a target="blank" href="https://www.fxstreet.com/author/paul-rejczak">Read More ...</a>
          </div>

          {/* Expert 8 */}
          <div className="expert ex8 shadow">
            <div className="ex-id">
              <div className="circle"></div>
              <h3 className="pt-3">Przemysław Rapka</h3>
            </div>
            <div className="advice shadow">
              <p>
                Exploring potential outcomes of current events from <br /> an
                economic perspective.
              </p>
            </div>
             <a target="blank" href="https://www.goldpriceforecast.com/gold-experts/przemyslaw-rapka/">Read More ...</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experts;
