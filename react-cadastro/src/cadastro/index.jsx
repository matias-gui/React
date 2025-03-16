
function Cadastro(){
    return (
      <body className="w-dvw h-dvh flex flex-wrap  justify-center bg-[url(/src/img/pexels-dennisleinarts-1437953.jpg)] bg-center bg-no-repeat bg-cover bg-fixed">
        <main className=" flex flex-col justify-center max-w-120 h-60 border border-transparent rounded-xl mt-15 p-2 shadow-[2px_2px_10px_black] " >
              <h2 className="text-center text-xl mb-4 font-mono font-bold">Cadastro</h2>
              <form>
                <input placeholder="Nome" type="text" className="border w-full mb-2 indent-3 rounded-md p-1 placeholder-black opacity-70"/>
                <input placeholder="E-mail" type="email"  className=" border  w-full mb-2 indent-3 rounded-md p-1 placeholder-black  opacity-70" />
                <input placeholder="Senha" type="password"  className=" border  w-full mb-2 indent-3 rounded-md p-1 placeholder-black  opacity-70"/>
                <button className=" w-full rounded-md border-none mb-3 mt-2 bg-cyan-950 text-white p-1  hover:opacity-85 cursor-pointer delay-200  hover:scale-101 duration-100 ease-in-out font-bold" >Cadastrar</button>
            </form>
        </main>
        </body>
        )
      }

export default Cadastro