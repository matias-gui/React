import { Link } from "react-router"

function Cadastro() {
  return (
    <body className="w-dvw h-dvh flex flex-wrap  justify-center bg-[url(src/img/pexels-ivan-cujic-20495-109479.jpg)] bg-center bg-no-repeat bg-cover bg-fixed"   >
      
        <main className=" flex flex-col justify-center max-w-120 h-65 border border-transparent rounded-xl mt-15 p-2 shadow-[2px_2px_10px_black]  backdrop-blur-[20px]"  >
          <h2 className="text-center text-xl mb-4 font-mono font-bold animate-bounce ">Cadastro</h2>
          <form>
            <input placeholder="Nome" type="text" className="border w-full mb-2 indent-3 rounded-md p-1 placeholder-black opacity-70 " />
            <input placeholder="E-mail" type="email" className=" border  w-full mb-2 indent-3 rounded-md p-1 placeholder-black  opacity-70" />
            <input placeholder="Senha" type="password" className=" border  w-full mb-2 indent-3 rounded-md p-1 placeholder-black  opacity-70 " />
            <button className=" w-full rounded-md border-none mb-1 mt-2 bg-cyan-950 text-white p-1  hover:opacity-80   cursor-pointer delay-200  hover:scale-101 duration-100 ease-in-out font-bold ">Cadastrar</button>
          </form>
          <Link to="/login" className="text-center mb-1 font-mono font-bold hover:underline">Já tem uma conta?
            Faça login</Link>
        </main>
    </body>
  )
}
export default Cadastro