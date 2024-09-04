import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-center bg-[#212121] py-4 w-full text-white">
        <div className="flex justify-between text-lg container">
          <Link to="/home" className="font-bold text-2xl">
            Farmácia
          </Link>

          <div className="flex gap-12">
            <Link to="/listarcategorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastrarcategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
