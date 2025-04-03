

function Esqueceusenha() {
    return (
        <div className="border w-120 h-50 m-auto mt-1 flex flex-col rounded-[7px]  ">
            <form className="w-[100%] flex-row justify-items-center">
                <input type="text" name="text" id="itext" placeholder="Nome" className="border rounded-[7px] flex flex-row justify-center mt-3 w-[80%] indent-2" />
                <input type="email" name="email" id="iemail" placeholder="Email" className="border rounded-[7px] flex flex-row  mt-2  w-[80%] indent-2" />
                <div className="border w-[80%] bg-black text-white mt-2 rounded-[7px]  flex ">
                     <p className=" indent-2 pr-2 ">HGfg</p>
                    <input type="text" placeholder="Digite o código" className="flex border rounded-[7px] bg-white text-black   w-[90%] indent-2 " />
                </div>
            </form>
            <button className="border w-[80%] m-auto rounded-[7px] bg-black text-white hover:opacity-70 ">Recuperar senha</button>
        </div>
    )
}

export default Esqueceusenha