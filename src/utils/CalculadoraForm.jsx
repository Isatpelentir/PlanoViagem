import React, { useState } from 'react';

const CalculadoraForm = ({ onCalculate }) => {
  const [dataViagem, setDataViagem] = useState('');
  const [gastosHospedagem, setGastosHospedagem] = useState(0);
  const [gastosAlimentacao, setGastosAlimentacao] = useState(0);
  const [gastosTransporte, setGastosTransporte] = useState(0);
  const [gastosPasseios, setGastosPasseios] = useState(0);
  const [tempoViagem, setTempoViagem] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalGastos = Number(gastosHospedagem) + Number(gastosAlimentacao) + 
                        Number(gastosTransporte) + Number(gastosPasseios);
    const prazoTotal = calcularPrazo(dataViagem);
    const valorMensalIdeal = calcularMensal(totalGastos, prazoTotal);
    const valorMensalMenor = 300; 
    const acumuladoMenor = calcularAcumulado(valorMensalMenor, prazoTotal);
    
    onCalculate({
      prazoTotal,
      valorMensalIdeal,
      acumuladoMenor,
    });
  };

  const calcularPrazo = (data) => {
    const dataViagem = new Date(data);
    const hoje = new Date();
    const meses = Math.ceil((dataViagem - hoje) / (1000 * 60 * 60 * 24 * 30));
    return meses > 0 ? meses : 0;
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
