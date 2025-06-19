export const About = () => {

    const frontendSkills = [
        "React", 
        "HTML", 
        "CSS", 
        "TailwindCSS", 
        "JavaScript",
        "Godot",
        "Scratch"
    ]

    const backendSkills = [
        "Python",
        "C",
        "C++",
        "C#",
    ]

    return <section id="about" className=" bg-gradient-to-b from-miku-lightblue to-miku-blue min-h-screen flex items-center justify-center py-20">

            <div className="flex justify-between">
                <img src="/images/image2.png" alt="A picture of me!" className="w-96 h-96 object-cover rounded-full shadow-lg ml-32 border border-4 border-miku-teal hover:-translate-y-1 transition-all">
                </img>

            </div>

            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-miku-gray text-center">
                About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition all">
                    <p className="text-miku-gray mb-6 ">
                        Aspiring developer with ambitious dreams and ideas. Always eager to expand skill set through learning and projects. 
                    </p>
                <div/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                            Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                <span key={key} className="font-bold bg-miku-teal/20 text-miku-gray py-1 px-3 rounded-full text-sm hover:bg-miku-teal/70 transition">
                                        {tech}
                                </span> 
                                ))

                                }
                            </div>

                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Backend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                               <span key={key} className="font-bold bg-miku-sakura/30 text-miku-gray py-1 px-3 rounded-full text-sm hover:bg-miku-sakura/70 transition">
                                    {tech}
                               </span> 
                            ))
                            
                            
                            }

                        </div>
                    </div>
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition all">
                                <h3 className="text-xl font-bold mb-4">
                                    Education
                                </h3>
                                <ul>
                                    <li>
                                        <strong> BSci in Computing Science </strong> - Simon Fraser University (2023-TBD)
                                    </li>

                                    <li>
                                        <strong>Dogwood Diploma</strong> - Delta Secondary School (2018-2023)
                                    </li>

                                </ul>



                            </div>

                </div>

            </div>

        

    </section>
}