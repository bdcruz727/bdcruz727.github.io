 
 export const Navbar = () =>{

    return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-bold text-2xl text-miku-gray">
                    {""}
                    B<span className="text-2xl text-blue-500">DC</span> {""}
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="font-bold hover:text-miku-purple transition-colors">
                        {""}
                        Home
                        {""}
                    </a>

                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#about" className="font-bold hover:text-miku-purple transition-colors">
                        {""}
                        About
                        {""}
                    </a>

                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#projects" className="font-bold hover:text-miku-purple transition-colors">
                        {""}
                        Projects
                        {""}
                    </a>

                </div>

                 <div className="hidden md:flex items-center space-x-8">
                    <a href="#contact" className="font-bold hover:text-miku-purple transition-colors">
                        {""}
                        Contact
                        {""}
                    </a>

                </div>

            </div>
        </div>
    </nav>
    );
 }