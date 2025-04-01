

function Esqueceusenha(){
    return(
        <div className="border w-120 h-50 m-auto mt-1 flex  ">
            <form className="w-[100%] flex-row justify-items-center">
                <input type="email" name="email" id="iemail" placeholder="Email" className="border rounded-[7px] flex flex-row justify-center mt-3 w-[80%] indent-2" />
                <input type="text" name="num" id="inum" placeholder=" Código" className="border rounded-[7px] flex flex-row  mt-2  w-[80%] indent-2" />
            </form>
        </div>
    )
}

export default Esqueceusenha