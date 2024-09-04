import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardTemas({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-[#212121] text-white font-bold text-2xl">
        Categoria
      </header>

      <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.nome}</p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-slate-100 bg-green-950 hover:bg-green-800
                        flex items-center justify-center py-2 transition-all duration-300"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full
		                        flex items-center justify-center transition-all duration-300"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;
