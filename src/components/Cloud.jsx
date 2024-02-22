/* eslint-disable react/no-unescaped-entities */
function Cloud() {
    const CloudDiff = `
    When someone asks, "What is Cloud," they are generally referring to the concept of cloud computing infrastructure and services as a whole. The term "cloud" in this context represents a metaphorical abstraction of the Internet, where various services, resources, and applications are hosted and delivered over the Internet rather than being hosted locally on physical hardware.
    `;

    const ComputingDiff = `
    Cloud computing is a specific subset or component of the broader concept of the cloud. It refers to the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet "the cloud" to offer faster innovation, flexible resources, and economies of scale. Cloud computing involves the provision of on-demand computing resources over the Internet, which can include infrastructure, platforms, and software services.
    `;

    return (
        <section className="cloud container flex flex-col items-center justify-center w-full h-screen bg-white text-black">
            <section className="content m-3 flex flex-col items-center">
                <section className="heading font-bold text-5xl text-center mt-3 mb-3 underline line-clamp-0 cursor-help">
                    What is Cloud ?
                </section>
                <section className="content text-1xl p-3">
                    The cloud is an extensive network of remote servers around the world. These servers store and manage data, run applications, and deliver content and services like streaming videos, web mail, and office productivity software over the internet.
                    In simple terms, the cloud refers to the Internet, where data and services are stored and accessed remotely instead of on your personal computer or local network.
                </section>
                <section className="heading font-bold text-5xl text-center mt-3 mb-3 underline line-clamp-0 cursor-help">
                    Cloud vs Cloud Computing? 
                </section>
                <section className="content text-1xl p-3">

                {CloudDiff}
                <br />
                {ComputingDiff}

                </section>
                <section className="links flex mt-3 mb-3">
                    <a 
                        className="ease-in-out duration-300 border-solid border rounded-xl bg-black text-white p-3 m-4 hover:text-black hover:bg-white"
                        target="_blank"
                        href="https://www.cloudflare.com/learning/cloud/what-is-the-cloud/"
                    >
                        What is Cloud - Cloudflare
                    </a>
                    <a 
                        className="ease-in-out duration-300 border-solid border rounded-xl bg-black text-white p-3 m-4 hover:text-black hover:bg-white"
                        target="_blank"
                        href="https://www.forbes.com/sites/bernardmarr/2023/10/09/the-10-biggest-cloud-computing-trends-in-2024-everyone-must-be-ready-for-now/"
                    >
                        Cloud Computing Trends - Forbes
                    </a>
                    <a 
                        className="ease-in-out duration-300 border-solid border rounded-xl bg-black text-white p-3 m-4 hover:text-black hover:bg-white"
                        target="_blank"
                        href="https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing"
                    >
                        What is Cloud Computing? - Azure
                    </a>
                </section>
            </section>
        </section>
    )
}

export default Cloud;