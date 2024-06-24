import DarkSection from "./DarkSection";

function Providers() {
    const Benefits = [
        "Cost savings: Cloud providers offer a pay-as-you-go model, so you only pay for the resources you use. This can be significantly cheaper than purchasing and maintaining your own IT infrastructure.",
        "Scalability: Cloud resources can be easily scaled up or down to meet your changing needs. This is a major advantage for businesses that experience fluctuations in demand.",
        "Increased agility: Cloud computing allows businesses to deploy new applications and services much faster than with traditional on-premises IT.",
        "Improved reliability: Cloud providers have robust infrastructure that is designed to be highly reliable and available.",
        "Automatic updates: Cloud providers are responsible for maintaining and updating the underlying infrastructure, which frees up your IT staff to focus on other tasks."
    ];
    return (
        <DarkSection>
            <section className="content m-3 flex flex-col">
                <h2 className="heading font-bold text-3xl text-center mt-3 mb-3 sm:text-4xl md:text-6xl">Who is a Cloud Provider?</h2>
                <p className="content text-lg p-3 sm:text-base md:text-lg lg:text-xl">
                    A cloud provider is a company that offers access to computing resources like storage space, processing power, databases, and applications over the internet.  These resources are delivered on-demand, similar to how you get electricity or water from a utility company.
                </p>
                <h2 className="heading font-bold text-1xl text-center mt-3 mb-3 sm:text-2xl md:text-3xl">What are their benefits?</h2>
                <ul className="content flex sm:flex-col md:flex-col lg:flex-row text-lg p-3 sm:text-base md:text-lg lg:text-xl">
                    {Benefits.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="list-item cursor-pointer hover:bg-yellow-700 hover:text-white border rounded border-solid border-yellow-500 p-2 m-2"
                            >
                                {item}
                            </li>);
                    })}
                </ul>
                <h2 className="heading font-bold text-3xl text-center mt-3 mb-3 sm:text-4xl md:text-6xl border-solid border rounded-xl">The Big Three Cloud Providers: <br /> AWS, Google Cloud, and Azure</h2>
                <section className="p-2 sm:text-base md:text-lg lg:text-xl">
                    <p className="mt-3 content text-lg p-3 sm:text-base md:text-lg lg:text-xl">In the realm of cloud computing, three major players dominate the market: Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure. Each offers a comprehensive suite of cloud services that cater to a wide range of needs, but they also have their own unique strengths and considerations.</p>
                    <h3 className="mt-3 font-bold text-purple-500">1. Amazon Web Services (AWS)</h3>
                    <p>
                        The Leader of the Pack: AWS boasts the largest market share and has been around the longest (launched in 2006). This translates to a vast array of services, mature infrastructure, and a wide range of features.
                        Strengths: Renowned for its scalability, reliability, and security. Offers a massive selection of services spanning compute, storage, databases, networking, analytics, machine learning, and more.
                        Considerations: AWS can have a steeper learning curve due to the sheer number of options available. Finding the most cost-effective solution within its complex pricing structure might require some expertise.
                    </p>
                    <h3 className="mt-3 font-bold text-red-500">2. Google Cloud Platform (GCP)</h3>
                    <p>
                        The Data and AI Powerhouse: GCP excels in big data analytics and machine learning, leveraging Google&lsquo;s expertise in these areas. It&lsquo;s a strong choice for companies with data-intensive workloads.
                        Strengths: Offers powerful AI and machine learning tools alongside competitive pricing, particularly for sustained use cases. The user interface is known for being developer-friendly.
                        Considerations: GCP&lsquo;s breadth of services isn&lsquo;t quite as extensive as AWS, especially in certain enterprise-focused areas. Market share is also lower, which may mean a smaller pool of available resources and expertise.
                    </p>
                    <h3 className="mt-3 font-bold text-blue-500">3. Microsoft Azure</h3>
                    <p>
                        The Integration Champion: Azure integrates seamlessly with other Microsoft products and services, making it a natural fit for businesses already invested in the Microsoft ecosystem. It&lsquo;s strong in areas like hybrid cloud deployments.
                        Strengths: Tight integration with Microsoft products, robust security features, and a focus on hybrid cloud solutions.
                        Considerations: Pricing can be complex, and some features may require additional licensing costs for Microsoft software. Azure&lsquo;s purely cloud-based services might not be as mature as AWS or GCP&lsquo;s offerings.
                    </p>
                </section>
                <div className="links flex flex-wrap justify-center mt-3 mb-3">
                    <a
                        className="ease-in-out duration-300 border-solid border rounded-xl bg-black text-white p-3 m-2 sm:m-4 hover:text-black hover:bg-white"
                        target="_blank"
                        href="https://aws.amazon.com/"
                    >
                        AWS - Amazon Web Services
                    </a>
                    <a
                        className="ease-in-out duration-300 border-solid border rounded-xl bg-black text-white p-3 m-2 sm:m-4 hover:text-black hover:bg-white"
                        target="_blank"
                        href="https://cloud.google.com/"
                    >
                        Google Cloud Platform - CC Services
                    </a>
                    <a
                        className="ease-in-out duration-300 border-solid border rounded-xl bg-black text-white p-3 m-2 sm:m-4 hover:text-black hover:bg-white"
                        target="_blank"
                        href="https://azure.microsoft.com/en-in"
                    >
                        Microsoft Azure - CC Services
                    </a>
                </div>
            </section>
        </DarkSection>
    )
}

export default Providers;