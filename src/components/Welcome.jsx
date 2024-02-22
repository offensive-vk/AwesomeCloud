
function Welcome() {
    const Stuff = ["Cloud", "Cloud Computing", "Cloud Services", "Cloud Providers", "Virtualization", "IoT"];

    return (
        <section 
            id='welcome' 
            className="container flex flex-col items-center justify-center w-full h-screen bg-slate-300 text-black"
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
                <ul className="flex">
                {Stuff.map((item, index) => {
                    return (
                    <li 
                        key={index} 
                        className="list-item cursor-pointer  hover:bg-blue-700 hover:text-white border  rounded border-solid border-blue-600 p-2 m-2"
                        onClick={() => console.log(`Website is in Development.`)}
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