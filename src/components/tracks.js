import ai_Image from './assets/tracks/ai.svg'
import blockchain from './assets/tracks/blockchain.png'
import cyber from './assets/tracks/cyber.svg'
import ar from './assets/tracks/ar.svg'
import open from './assets/tracks/open.svg'

export default function Tracks() {

    const tracks = [
        {
            'name': 'Web3 and Blockchain',
            'image': blockchain,
            'desc': `Web 3.0 and blockchain strive for openness and transparency. But this is not the end of parallel possibilities. The goal of blockchain is to keep the insights organized as blocks, with cryptographic hashes entrusted to keep them unalterable and highly secure. `,
            'style':''
        },
        {
            'name': 'Cyber Security',
            'image': cyber,
            'desc': ` Cyber Security involves the practice of implementing multiple layers of security and protection against digital attacks across computers, devices, systems, and networks. Usually, organizations have a system and a framework in place for how they tackle attempted or successful cyberattacks. A good framework can help detect and identify threats, protect networks and systems, and recover in case any attack was successful.
            `,
            'style':''
        },
        
        {
            'name': 'Artificial Intelligence',
            'image': ai_Image,
            'desc': `AI has become a catchall term for applications that perform complex tasks that once required human input such as communicating with customers online or playing chess. The term is often used interchangeably with its subfields, which include machine learning and deep learning. There are differences, however. For example, machine learning is focused on building systems that learn or improve their performance based on the data they consume. It’s important to note that although all machine learning is AI, not all AI is machine learning.`,
            'style':''

        },
        {
            'name': 'AR/VR',
            'image': ar,
            'desc': ` The world is dedicatedly working towards shattering its boundaries when it comes to AR and          VR Technology. The opportunities that it provides us are beyond any comparison. But in order to reach its zenith, this technology still needs a huge bombardment of ideas to mold its entire concept in a structure that focuses on the betterment of human life.
            `,
            'style':''
        },
        {
            'name': 'Open Innovation',
            'image': open,
            'desc': `Open innovation is the practice of a company opening its R&D department to input from people outside the company, or, to employees from other departments within the organization.
            By breaking down traditional silos between departments, and welcoming external experts and researchers, companies remove the limitations that a classic, secretive model may place on innovative efforts. 
           `,
           'style':''
        },


    ];
    return (
        <div id="tracks">
            <h2 class="heading">Development Tracks</h2>
            <div class="tr">
                {tracks.map((i) => trackCard(i))}
            </div>
        </div>
    );
}

function trackCard(i) {
    return (
        <div className="track" key={i.name}>
            <div key={i.name} className="track-box">
               <img src={i.image} width="150px" className='track-img'/>
                <div class="">
                    <h5 className="track-name">{i.name}</h5>
                </div>
            </div>
        </div>
    );
}