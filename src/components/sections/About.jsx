import { FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa";
import { SiOsu } from 'react-icons/si';
export const About = () => {

    const frontendSkills = [
        "React", 
        "HTML", 
        "CSS", 
        "TailwindCSS", 
        "JavaScript",
        "GDScript"
    ]

    const backendSkills = [
        "Python",
        "C",
        "C++",
        "C#",
    ]

    return <section id="about" className=" bg-gradient-to-b from-miku-lightblue to-miku-blue min-h-screen flex items-center justify-center py-20">

        <div className="flex flex-col items-center justify-start ml-32 mr-12">
            <img src="/images/image2.png" alt="A picture of me!"
            className="w-96 h-96 object-cover rounded-full shadow-lg border-4 border-miku-teal hover:-translate-y-1 transition-all">
            </img>

            <div className="flex space-x-4 mt-4 text-3xl text-miku-gray">
                <a href="https://github.com/bdcruz727" target="_blank" className="hover:text-black hover:-translate-y-1 transition-all">
                <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/bryan-dela-cruz-b190132b7/" target="_blank" className="hover:text-blue-600 hover:-translate-y-1 transition-all">
                <FaLinkedin />
                </a>
                <a href="https://www.youtube.com/@bdcz" target="_blank" className="hover:text-red-500 hover:-translate-y-1 transition-all">
                <FaYoutube />
                </a>
                <a href="https://osu.ppy.sh/users/9507410" target="_blank" className="hover:text-osu-pink hover:-translate-y-1 transition-all">
                <SiOsu />
                </a>
            </div>
        </div>
            

            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-5xl font-bold text-miku-gray text-center">
                About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition all">
                    <p className="text-miku-gray mb-6 ">
                        Aspiring developer with ambitious dreams and ideas. Always eager to expand skill set through projects, and looks forward to learning all new kinds of concepts!
                        <br></br>
                        <br></br>
                        I enjoy playing video games, soccer, and badminton, as well as spending time with my adorable dog.
                        <br></br>
                        <br></br>
                        On the side, I love watching hockey, practicing piano and guitar, as well as hone my video editing/production skills.

                        
                    </p>
                <div/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold mb-4">
                            Frontend Skills
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
                        <h3 className="text-2xl font-bold mb-4">
                            Backend Skills
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

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition all">
                                <h3 className="text-2xl font-bold mb-4">
                                    Education
                                </h3>
                                <ul className="list-disc list-inside">
                                    <li>
                                        <strong> BSc. in Computing Science </strong> - Simon Fraser University (2023-2027)
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