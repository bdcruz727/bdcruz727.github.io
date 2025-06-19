import { MdEmail } from "react-icons/md";

export const Contact = () => {

    const copyEmail = () => {
    navigator.clipboard.writeText("bryandelacz@gmail.com")
      .then(() => {
        alert("Email copied to clipboard!");
      })
  };

    return <section id="contact" className=" bg-gradient-to-b from-miku-teal to-miku-sakura min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-8 text-miku-gray text-center p-6">
                Contact Me!
            </h2>
            <div className="flex justify-center items-center gap-12">
                <img src="/images/christoff.jpg" alt="A picture of my dog"
                className="w-96 h-96 object-cover rounded-full shadow-lg border-4 border-miku-sakura hover:-translate-y-1 transition-all">
                </img>
                <div className="flex flex-col text-miku-gray items-center justify-center text-4xl text-center cursor-pointer hover:-translate-y-1 transition all" onClick={copyEmail}>
                    <MdEmail />
                    <p>
                        bryandelacz@gmail.com

                        
                    </p>
                </div>
                    
               

                <img src="/images/moby.jpg" alt="A picture of my friend's cat"
                className="w-96 h-96 object-cover rounded-full shadow-lg border-4 border-miku-sakura hover:-translate-y-1 transition-all">
                </img>
                
            </div>

        </div>

    </section>
}