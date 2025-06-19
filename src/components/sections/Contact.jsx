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

            <div className="rounded-xl p-8 border-miku-gray border hover:-translate-y-1 transition all" onClick={copyEmail}>
                    <p className="text-miku-gray mb-2 text-2xl ">
                        bryandelacz@gmail.com

                        
                    </p>
            </div>

        </div>

    </section>
}