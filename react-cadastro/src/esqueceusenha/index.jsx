

function Esqueceusenha(){
    return(
        <body className="flex justify-center w-full h-full">
            <div className="">
                <form className="flex flex-col w-[90%] border rounded-2xl  " >
                    <input type="text" name="nome" id="inome" placeholder="Nome" className="border
                    rounded-[5px] indent-1 "/>
                    <input type="email" name="email" id="iemail"/>
                </form>
            </div>
        </body>
    )
}

export default Esqueceusenha