function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container grid grid-cols-2 pt-28">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Farmácia Generation</h2>
            <p className="text-xl">
              Tudo o que você precisa está aqui. Os Melhores Produtos para a
              Saúde e Bem-Estar.
            </p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4"></div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://cdn.dribbble.com/userupload/15714714/file/original-cd6d2449906bc7ea437b31afc64a1754.jpeg?resize=1024x683"
              alt="Imagem Página Home"
              className="w-2/3 rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
