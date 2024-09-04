import { ChangeEvent, useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      ToastAlerta("Não foi possivel realizar a busca", "erro");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
      } catch (error) {
        ToastAlerta("não foi possivel atualizar categoria!", "erro");
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        ToastAlerta("Categoria cadastrada com sucesso", "sucesso");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar categoria", "erro");
      }
    }
    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center mx-auto min-h-[67vh] bg-cyberpunk-bg my-16 w-6/12 text-cyberpunk-text justify-center pb-20 rounded-2xl text-white bg-[#212121]">
      <h1 className="text-4xl text-center font-bold uppercase my-8">
        {id === undefined ? "Cadastrar categoria" : "Editar Categoria"}
      </h1>
      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2 font-bold">
          <label htmlFor="tipo" className="uppercase text-lg">
            categoria
          </label>
          <input
            className="h-9 rounded-md text-black"
            type="text"
            placeholder="Digite a categoria"
            name="nome"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="cursor-pointer bg-green-700
              rounded-2xl py-2 px-4 hover:bg-green-500 hover:border-transparent transition-all duration-300 flex justify-center"
        >
          {isLoading ? (
            (<Circles
              height="25"
              width="80"
              color="black"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              />)
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
