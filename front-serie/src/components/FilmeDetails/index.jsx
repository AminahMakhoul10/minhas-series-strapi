// Exemplo básico de componente de detalhes
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FilmeDetails = () => {
  const [filme, setFilme] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchFilmeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1338/filmes/${id}`);
        setFilme(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
      }
    };

    fetchFilmeDetails();
  }, [id]);

  return (
    <div>
      <h2>{filme.Título}</h2>
      <p>{filme.Descrição}</p>
      {/* Adicione outros campos conforme necessário */}
    </div>
  );
};

export default FilmeDetails;
