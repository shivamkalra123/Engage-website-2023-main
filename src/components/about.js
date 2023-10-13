import ncu_logo from "../icons/NCU_logo_white.png";
import m_logo from "../icons/momentum_logo.png";

export default function About() {
    const engage_about = `The NorthCap University's hackathon, Engage is a part of our Annual Technocultural Festival Momentum, which witnesses participation from Colleges and Universities from around the Country.`;

    const ncu_about = `The NorthCap University (NCU) is a multidisciplinary university and a destination 
    of choice for degree programs in Engineering, Applied Sciences, Management, Liberal Arts, and Law.
    NCU has achieved the highest rating of 5 stars on the QS Quacquarelli Symonds Stars rating system in Teaching,
     Employability, Online Learning, Academic Development, and Inclusiveness, 
     making NCU one of the top universities in India. NCU is NAAC-A grade accredited 
     and is ranked among the top Indian universities on the 2022 NIRF round of assessment.
    `;

    const momentum_about = `Momentum is The Northcap University's techno-cultural fest where we provide  the student community from various universities
     and colleges with velocity. Momentum is a 2-day long festival organized in the month of November. 
     This year Momentum 2023, the 26th Edition is planned for 3rd to 4th November. 
     The festival hosts several other activities including professional performances. 
     From brainstorming sessions in debates and quizzes to exhilarating events likeFashion 
     Show, battle of bands, and War of DJs are some of the pro shows.`;

    const about = `Momentum, The Northcap University's spirited techno-cultural fest, propels student communities with fervor. Taking place on November 3rd to 4th, Momentum 2023, the 26th Edition, promises two days of dynamic activities. Engage, the university's hackathon, is a standout event, attracting participants from across the country. This annual festival is a vibrant convergence of talent and innovation.`;

    return (
        <div className="about" id="aboutus">
            <div className="left">
                <div className="ncu_logo">
                    <img src={ncu_logo}></img>
                </div>
                <div className="m_logo">
                    <img src={m_logo}></img>
                </div>
            </div>
            <div className="right">
            Momentum, The Northcap University's spirited techno-cultural fest, propels student communities with fervor. Taking place on November 3rd to 4th, Momentum 2023, the 26th Edition, promises two days of dynamic activities. <span>Engage</span>, the university's hackathon, is a standout event, attracting participants from across the country. This annual festival is a vibrant convergence of talent and innovation.

            </div>




            {/* <div className="hackathon-info">
                <div className="heading">What is Engage Hackathon ?</div>
                <div className="text">{engage_about}</div>

            </div>
            <div className="ncu-info">
                <div className="heading">
                    <div className="ncu_logo">
                        <img src={ncu_logo}></img>
                    </div>
                    <div className="title">The NorthCap University</div>
                </div>
                <div className="text">{ncu_about}</div>
            </div>
            <div className="momentum-info">
                <div className="heading">
                    <div className="m_logo">
                        <img src={m_logo}></img>
                    </div>
                    <div className="title">Momentum</div>
                </div>
                <div className="text">{momentum_about}</div>

            </div> */}

        </div>


    )
}