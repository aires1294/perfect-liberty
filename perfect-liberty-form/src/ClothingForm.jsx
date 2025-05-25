import React, { useState } from 'react';
import './ClothingForm.css';
import logo from './assets/pl.jpeg';


function ClothingForm() {
  const [formData, setFormData] = useState({
    descricao: '',
    tipo: '',
    tamanho: '',
    quantidade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    fetch('http://localhost:5000/api/roupas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
        console.log('Enviado com sucesso:', data);
      });
  };

  return (
    <div className="form-container">
        <div className="form-container">
            <img src={logo} alt="Perfect Liberty" className="logo-img" />
            <h1>Perfect Liberty</h1>
        </div>
      <form onSubmit={handleSubmit}>
        <label>Descrição</label>
        <input
          type="text"
          name="descricao"
          placeholder="Digite a descrição"
          value={formData.descricao}
          onChange={handleChange}
        />

        <label>Tipo</label>
        <select name="tipo" value={formData.tipo} onChange={handleChange}>
          <option value="">Selecione o tipo</option>
          <option value="Camisa">Camisa</option>
          <option value="Calça">Calça</option>
          <option value="Agasalho">Agasalho</option>
        </select>

        <label>Tamanho</label>
        <select name="tamanho" value={formData.tamanho} onChange={handleChange}>
          <option value="">Selecione o tamanho</option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </select>

        <label>Quantidade</label>
        <input
          type="number"
          name="quantidade"
          placeholder="Digite a quantidade"
          value={formData.quantidade}
          onChange={handleChange}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default ClothingForm;
