
export const UnSureSection = () => {


    return (
        <section
            id="tech"
            className="section py-20 md:py-32 -bg-[#080325]"
        >

            <div className="absolute w-[113%] h-[10vh] inset-0 opacity-80 -z-10">
                <div className="absolute h-[10rem] top-[-2px] inset-0 bg-gradient-to-b from-[#0f0f0f] to-transparent z-10"></div>
                <video
                    className="relative h-[45rem] w-full mb-auto object-center object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/hero.webm" type="video/mp4" />
                </video>
            </div>
        </section>
    );
};
