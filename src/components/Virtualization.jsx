import LightSection from "./LightSection";

function Virtualization() {
    const Examples = [
        "VMWare",
        "Oracle VM Virtualbox",
        "Qemu",
        "Proxmox",
        "WSL"
    ];
    const Benefits = [
        "Cost Savings: Reduces the need for physical servers, lowering hardware and energy costs. Decreases operational expenses through efficient resource utilization.",
        "Resource Optimization: Maximizes hardware usage, preventing resource wastage. Easily scales resources up or down based on demand.",
        "Flexibility and Agility: Enables quick creation and deployment of new virtual machines. Facilitates efficient testing and development environments.",
        "Improved Disaster Recovery: Simplifies backup and recovery processes, ensuring data protection. Isolates VMs, preventing failures from affecting others.",
        "Enhanced Security: Isolates applications in separate VMs, reducing security risks. Allows safe testing of new applications in sandboxed environments."
    ];

    return (
    <LightSection>
        <section className="content m-3 flex flex-col">
        <h2 className="heading font-bold text-3xl text-center mt-3 mb-3 sm:text-4xl md:text-6xl">
            What is Virtualization ?
        </h2>
        <p className="content text-lg p-3 sm:text-base md:text-lg lg:text-xl">
            Virtualization is like creating a virtual version of something instead of a real one. Imagine you have one physical computer, but with virtualization, you can make it act like it's multiple computers. Each "virtual" computer can run its own operating system and applications independently, all on the same physical hardware. This makes it easier to use resources efficiently, run different programs in separate environments, and manage tasks without needing a bunch of separate machines.
        </p>
        <h2 className="heading font-bold text-1xl text-center mt-3 mb-3 sm:text-2xl md:text-3xl">Examples of Virtualization Softwares</h2>
        <ul className="content flex justify-center sm:flex-col md:flex-col lg:flex-row text-lg p-3 sm:text-base md:text-lg lg:text-xl">
            {Examples.map((item, index) => {
                return (
                <li 
                    key={index} 
                    className="list-item cursor-pointer hover:bg-purple-700 hover:text-white border rounded border-solid border-purple-500 p-2 m-2"
                >
                    {item}
                </li> );
            })}
        </ul>
        <h2 className="heading font-bold text-1xl text-center mt-3 mb-3 sm:text-2xl md:text-3xl">Benefits of Virtualization Softwares</h2>
        <ul className="content flex flex-col">
            {Benefits.map((item, index) => {
                return (
                <li 
                    key={index} 
                    className="list-item cursor-pointer p-2 m-2 text-xl"
                >
                    <b>{index+1}</b>. {item}
                </li> );
            })}
        </ul>
        </section>
    </LightSection>
    )
}

export default Virtualization;