import DarkSection from './DarkSection';

function Computing() {
    const Hero = `
    Cloud computing is the on-demand delivery of IT resources over the internet, with pay-as-you-go pricing. It allows businesses and individuals to access servers, storage, databases, networking, software, analytics, and intelligence without the need to manage physical infrastructure.`;

    const Chars = [
        `On-demand self-service: Users can provision and configure cloud resources without human intervention.`,
        `Broad network access: Cloud resources are accessible over the network from anywhere with an internet connection.`,
        `Resource pooling: Cloud resources are pooled to serve multiple users and can be dynamically reallocated according to demand.`,
        `Rapid elasticity: Cloud resources can be rapidly provisioned and released to meet changing business needs.`,
        `Measured service: Cloud resource usage is metered and billed based on actual usage.`
    ];

    return (
        <DarkSection>
            <section className="heading font-bold text-5xl mt-1 mb-2 line-clamp-0 cursor-help">
                    What is Cloud Computing?
            </section>
            <section className="content text-1xl p-3 m-3">
                {Hero}
            </section>
            <section className='text-2xl italic'>
                Key Characteristics of Cloud Computing:
            </section>
            <ul className="m-1 flex xs:flex-col sm:flex-col md:flex-row">
                {Chars.map((item, index) => {
                    return (
                    <li 
                        key={index} 
                        className="list-item cursor-pointer hover:bg-pink-700 hover:text-white border rounded border-solid border-pink-600 p-2 m-2"
                        onClick={() => this}
                    >
                        {item}
                    </li> );
                })}
            </ul>
            <section className='text-2xl italic font-bold mt-2'>
                There are three main types of cloud computing services:
            </section>
            <section className='content p-1 m-1'>
                <span className='text-1xl m-1'>
                    - Infrastructure as a Service (IaaS): IaaS provides the basic building blocks of computing, such as servers, storage, and networking.
                </span><br />
                <span className='text-1xl m-1'>
                    - Platform as a Service (PaaS): PaaS provides a platform for developing, deploying, and managing applications.
                </span><br />
                <span className='text-1xl m-1'>
                    - Software as a Service (SaaS): SaaS provides fully functional applications that are delivered over the internet.
                </span><br />
            </section>
        </DarkSection>
    )
}

export default Computing;