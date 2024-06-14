function Welcome() {
    const Stuff = ["What is Cloud", "Cloud Computing", "Cloud Architecture", "Cloud Providers", "Virtualization", "IoT"];

    return (
        <section 
            id='welcome' 
            className="container flex flex-col items-center justify-center w-full h-screen text-slate-300 bg-black xs:w-auto sm:w-auto lg:w-full"
        >
            <div 
                id="heading" 
                className="font-bold text-5xl line-clamp-3 mb-4"
            >
                {"Awesome Cloud 🌨️"}
            </div>
            <div 
                id="slogan" 
                className="font-light text-2xl italic mb-2 mt-2"
            >
                Everything You Need To Know About.
            </div>
            <div 
                id="stuff" 
                className="font-light text-1xl text-blue-500"
            >
                <ul className="flex sm:flex-col md:flex-col lg:flex-row">
                {Stuff.map((item, index) => {
                    return (
                    <li 
                        key={index} 
                        className="list-item cursor-pointer hover:bg-blue-700 hover:text-white border rounded border-solid border-blue-600 p-2 m-2"
                        onClick={() => alert(`Scroll Down to find what you're looking for.`)}
                    >
                        {item}
                    </li> );
                })}
                </ul>
            </div>
        </section>
    );
}

export default Welcome;