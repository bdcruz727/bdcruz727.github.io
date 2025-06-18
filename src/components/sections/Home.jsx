 export const Home = () => {

    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="font-quicksand text-5xl md:text-7xl text-miku-gray">
                Bryan Dela Cruz
            </h1>

            <p className="font-quicksand text-miku-purple text-lg mb-8 max-w-xxl mx-auto">
                <br></br>
                Hello, I'm Bryan!
                <br></br>
                I am a second year student at <span className="font-bold text-miku-gray">Simon Fraser University.</span>
                <br></br>
                I love learning about <span className="font-bold text-miku-gray">Computers, Mathematics,</span> and <span className="font-bold text-miku-gray">Philosophy!</span>
                <br></br>
                
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-miku-sakura text-miku-gray py-3 px-6 rounded font-bold transition relative overflow-hidden
                 hover:-translate-y-0.5">
                    My Projects
                </a>

                 <a href="#contact" className="bg-miku-sakura text-miku-gray py-3 px-6 rounded font-bold transition relative overflow-hidden
                 hover:-translate-y-0.5">
                    Contact Me!
                </a>
            </div>

        </div>

    </section>
    )
 }