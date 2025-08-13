import React, { useState } from 'react';

const CalculadoraForm = ({ onCalculate }) => {
  const [dataViagem, setDataViagem] = useState('');
  const [gastosHospedagem, setGastosHospedagem] = useState(0);
  const [gastosAlimentacao, setGastosAlimentacao] = useState(0);
  const [gastosTransporte, setGastosTransporte] = useState(0);
  const [gastosPasseios, setGastosPasseios] = useState(0);
  const [tempoViagem, setTempoViagem] = useState(1);
  const [rentabilidade, setRentabilidade] = useState(0.007); // 0.7%

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalGastos = Number(gastosHospedagem) + Number(gastosAlimentacao) + 
                        Number(gastosTransporte) + Number(gastosPasseios);
    const prazoTotal = calcularPrazo(dataViagem);
    const valorMensalIdeal = calcularMensal(totalGastos, prazoTotal, rentabilidade);
    const valorMensalMenor = 300; // Valor menor fixo
    const acumuladoMenor = calcularAcumulado(valorMensalMenor, prazoTotal, rentabilidade);
    
    onCalculate({
      prazoTotal,
      valorMensalIdeal,
      acumuladoMenor,
    });
  };

  const calcularPrazo = (data) => {
    const dataViagem = new Date(data);
    const hoje = new Date();
    const meses = Math.ceil((dataViagem - hoje) / (1000 * 60 * 60 * 24 * 30)); // Aproximando para meses
    return meses > 0 ? meses : 0;
  };

  const calcularMensal = (totalGastos, prazo, rentabilidade) => {
    const montante = totalGastos * Math.pow(1 + rentabilidade, prazo);
    return montante / ((Math.pow(1 + rentabilidade, prazo) - 1) / rentabilidade);
  };

  const calcularAcumulado = (mensal, prazo, rentabilidade) => {
    let total = 0;
    for (let i = 0; i < prazo; i++) {
      total = total * (1 + rentabilidade) + mensal;
    }
    return total;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={dataViagem} onChange={(e) => setDataViagem(e.target.value)} required />
      <input type="number" value={gastosHospedagem} placeholder="Hospedagem" onChange={(e) => setGastosHospedagem(e.target.value)} required />
      <input type="number" value={gastosAlimentacao} placeholder="Alimentação" onChange={(e) => setGastosAlimentacao(e.target.value)} required />
      <input type="number" value={gastosTransporte} placeholder="Transporte" onChange={(e) => setGastosTransporte(e.target.value)} required />
      <input type="number" value={gastosPasseios} placeholder="Passeios" onChange={(e) => setGastosPasseios(e.target.value)} required />
      <input type="number" value={tempoViagem} onChange={(e) => setTempoViagem(e.target.value)} placeholder="Tempo de Viagem (dias)" required />
      <button type="submit">Calcular</button>
    </form>
  );
};

export default CalculadoraForm;
