export const Projects = () => {

    return <section id="projects" className=" bg-gradient-to-b from-miku-blue to-miku-teal min-h-screen flex items-center justify-center py-20">
       
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-8 text-miku-gray text-center p-6">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-miku-lightblue/60 p-6 rounded-xl border border-4 border-miku-purple hover:-translate-y-1 hover:border-miku-gray hover:bg-miku-lightblue transition-all">
                    <h3 className="text-2xl font-bold mb-2">
                        Faster Than Light Yagami
                    </h3>
                    <h4 className="">
                        Fall 2024 - SFU Fall Hacks - <strong>First Place Overall</strong>
                    </h4>

                    <p className="text-miku-gray mb-4">
                        Created a <strong>speed-typing game</strong> from scratch using <strong>Godot. </strong>
                        Features include <strong>responsive text feedback, adaptive difficulty based on user skill,</strong> and <strong>attention seeking audio/visual elements.</strong>
                        <br></br>
                        Took home <strong>first place</strong> for our efforts!

                    </p>
                        {["GDScript"].map((tech,key) => (
                            <span key={key} className="font-bold bg-miku-teal/30 text-miku-gray py-1 px-3 rounded-full text-sm hover:bg-miku-teal/60 transition-all">
                                        {tech}
                                
                            </span>
                        ))}
                    <div className="py-0.5">

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Andy-J-B/FallHacks2024" target="_blank" className="text-miku-gray font-bold hover:text-lg hover:text-miku-teal transition-all">
                                View Project Repo →
                            </a>
                        </div>

                    </div>

                </div>

                <div className="bg-miku-lightblue/60 p-6 rounded-xl border border-4 border-miku-purple hover:-translate-y-1 hover:border-miku-gray hover:bg-miku-lightblue transition-all">
                    <h3 className="text-2xl font-bold mb-2">
                        Go SFU Improvement
                    </h3>
                    <h4 className="">
                        Spring 2025 - SFU Mountain Hacks - <strong>Best Presentation</strong>
                    </h4>

                    <p className="text-miku-gray mb-4">
                        Created a chrome browser extension using JavaScript, CSS, and HTML.
                        The extension would<strong> "enhance"</strong> the user experience of SFU related sites. The extension would <strong>automatically detect</strong> and activate on <strong>SFU affiliated sites.</strong> Won the <strong>top prize </strong> for best presentation!


                    </p>
                        {["JavaScript", "CSS", "HTML"].map((tech,key) => (
                            <span key={key} className="font-bold bg-miku-teal/30 text-miku-gray py-1 px-3 rounded-full text-sm hover:bg-miku-teal/60 transition-all">
                                        {tech}
                                
                            </span>
                        ))}
                    <div className="py-0.5">

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Arnice123/Go-SFU-improvement" target="_blank" className="text-miku-gray font-bold hover:text-lg hover:text-miku-teal transition-all">
                                View Project Repo →
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
}