import LightSection from './LightSection';

function Architecture() {
    const Benefits = [
        "Scalability",
        "Flexibility",
        "Reliability",
        "Security",
        "Cost-Effectiveness"
    ];
    const Components = [
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS)",
        "Cloud Storage",
        "Networking",
        "Security and Compliance",
        "Scalability and Elasticity",
        "High Availability and Disaster Recovery",
        "Monitoring and Management",
        "Cost Optimization"
    ];
    return (
        <LightSection>
                <section className="content m-3 flex flex-col items-center">
                    <h2 className="heading font-bold text-3xl text-center mt-3 mb-3 sm:text-4xl md:text-6xl">
                        Understanding Cloud Architecture
                    </h2>
                    <p className="content text-lg p-3 sm:text-base md:text-lg lg:text-xl">
                        Cloud architecture is the blueprint for building and managing cloud-based systems and applications. It encompasses the design, components, and principles necessary to create scalable, resilient, and secure solutions in the cloud computing environment.
                    </p>
                    <h3 className="heading font-bold text-2xl text-center mt-3 mb-3 sm:text-3xl md:text-3xl">
                        Components of Cloud Architecture
                    </h3>
                    <ul className="content flex flex-row sm:flex-col md:flex-col lg:flex-col text-lg p-3 sm:text-base md:text-lg lg:text-xl">
                    {Components.map((item, index) => {
                            return (
                            <li 
                                key={index} 
                                className="list-item cursor-pointer hover:bg-red-700 hover:text-white border rounded border-solid border-red-600 p-2 m-2"
                            >
                                {item}
                            </li> );
                        })}
                    </ul>
                    <h3 className="heading font-bold text-3xl text-center mt-3 mb-3 sm:text-1xl md:text-2xl">
                        Benefits of Cloud Architecture
                    </h3>
                    <ul className="content flex sm:flex-col md:flex-col lg:flex-row text-lg p-3 sm:text-base md:text-lg lg:text-xl">
                        {Benefits.map((item, index) => {
                            return (
                            <li 
                                key={index} 
                                className="list-item cursor-pointer hover:bg-teal-700 hover:text-white border rounded border-solid border-teal-600 p-2 m-2"
                            >
                                {item}
                            </li> );
                        })}
                    </ul>
                    <h3 className="heading font-bold text-2xl text-center mt-3 mb-3 sm:text-3xl md:text-3xl">
                        Conclusion
                    </h3>
                    <p className="content text-lg p-3 sm:text-base md:text-lg lg:text-xl">
                        Cloud architecture plays a crucial role in enabling organizations to harness the power of cloud computing effectively. By leveraging scalable infrastructure, flexible platforms, and advanced services, businesses can innovate faster, reduce costs, and stay competitive in todays digital landscape.
                    </p>
                    <div className="links flex flex-wrap justify-center mt-3 mb-3">
                        <a
                            className="ease-in-out duration-300 border-solid border rounded-xl bg-black text-white p-3 m-2 sm:m-4 hover:text-black hover:bg-white"
                            target="_blank"
                            href="https://en.wikipedia.org/wiki/Cloud_computing"
                        >
                            Cloud Computing - Wikipedia
                        </a>
                        <a
                            className="ease-in-out duration-300 border-solid border rounded-xl bg-black text-white p-3 m-2 sm:m-4 hover:text-black hover:bg-white"
                            target="_blank"
                            href="https://aws.amazon.com/architecture/"
                        >
                            AWS Architecture Center
                        </a>
                        <a
                            className="ease-in-out duration-300 border-solid border rounded-xl bg-black text-white p-3 m-2 sm:m-4 hover:text-black hover:bg-white"
                            target="_blank"
                            href="https://docs.microsoft.com/en-us/azure/architecture/"
                        >
                            Azure Architecture Center
                        </a>
                        <a
                            className="ease-in-out duration-300 border-solid border rounded-xl bg-black text-white p-3 m-2 sm:m-4 hover:text-black hover:bg-white"
                            target="_blank"
                            href="https://cloud.google.com/architecture/framework"
                        >
                            Google Cloud Architecture Framework
                        </a>
                    </div>
                </section>
        </LightSection>
    )
}

export default Architecture;