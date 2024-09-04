import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { Circles } from "react-loader-spinner";
import { buscar, deletar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      ToastAlerta("Ocorreu um erro ao tentar buscar a categoria", "erro");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      ToastAlerta("Categoria deletada com sucesso", "sucesso");
    } catch (error) {
      ToastAlerta("Erro ao deletar categoria", "erro");
    }
    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza que deseja apagar a categoria a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-[#212121] text-cyberpunk-text font-bold text-2xl">
          Categoria
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.nome}</p>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-500 hover:bg-red-600 w-full py-2 transition-all duration-300"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-green-950 hover:bg-green-800 flex items-center justify-center transition-all duration-300"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <Circles
                height="25"
                width="80"
                color="black"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
