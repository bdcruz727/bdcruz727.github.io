 
 export const Navbar = () =>{

    return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-bold text-xl text-black">
                    {""}
                    bdcruz<span className="text-blue-500">727</span> {""}
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="font-bold hover:text-miku-blue transition-colors">
                        {""}
                        Home
                        {""}
                    </a>

                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#about" className="font-bold hover:text-miku-blue transition-colors">
                        {""}
                        About
                        {""}
                    </a>

                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#projects" className="font-bold hover:text-miku-blue transition-colors">
                        {""}
                        Projects
                        {""}
                    </a>

                </div>

                 <div className="hidden md:flex items-center space-x-8">
                    <a href="#contact" className="font-bold hover:text-miku-blue transition-colors">
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