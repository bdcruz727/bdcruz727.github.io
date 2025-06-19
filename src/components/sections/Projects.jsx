export const Projects = () => {

    return <section id="projects" className=" bg-gradient-to-b from-miku-blue to-miku-teal min-h-screen flex items-center justify-center py-20">
       
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-8 text-miku-gray text-center p-6">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-miku-sakura/80 p-6 rounded-xl border border-4 border-miku-purple hover:-translate-y-1 hover:border-miku-gray hover:bg-miku-sakura transition-all">
                    <h3 className="text-2xl font-bold mb-2">
                        Faster Than Light Yagami
                    </h3>
                    <h4 className="">
                        Fall 2024 - SFU Fall Hacks - <strong>First Overall</strong>
                    </h4>

                    <p className="text-miku-gray mb-4">
                        Created a speed-typing game from scratch using Godot.
                        Features includes responsive text feedback, ramping difficulty over time, and audio/visual elements
                        


                    </p>
                        {["Godot"].map((tech,key) => (
                            <span key={key} className="font-bold bg-miku-teal/30 text-miku-gray py-1 px-3 rounded-full text-sm hover:bg-miku-teal/60 transition-all">
                                        {tech}
                                
                            </span>
                        ))}
                    <div className="py-2">

                        <div>
                            <a href="https://github.com/Andy-J-B/FallHacks2024">
                                View Project Repo →
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
}