const buscarTemperaturaCidade = async (nomeDaCidade) => {
  const dadosCidade = await fetch(
    `http://api.weatherapi.com/v1/current.json?q=${nomeDaCidade}&key=7fd89369164a44f29d4113450230402`,
    { mode: "cors" }
  );
  const cidadeInformacao = await dadosCidade.json();
  return cidadeInformacao;
};

const popularDOM = (infoCidade) => {
  const card = document.getElementById("cidade__card");
  card.innerHTML = "";

  const cidadeTitulo = document.createElement("h3");
  cidadeTitulo.innerHTML = infoCidade.location.name;

  const cidadeTemp = document.createElement("h3");
  cidadeTemp.innerHTML = infoCidade.current.temp_c;

  card.append(cidadeTitulo, cidadeTemp);
};

const buscar = async () => {
  const nomeCidade = document.getElementById("nome__cidade");
  const infoCidade = await buscarTemperaturaCidade(nomeCidade.value);
  popularDOM(infoCidade);
};
