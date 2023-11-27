// Exemplo para recuperar a lista de filmes
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilmeList = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        const response = await axios.get('http://localhost:1338/filmes');
        setFilmes(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchFilmes();
  }, []);

  return (
    <div>
      {filmes.map(filme => (
        <FilmeCard key={filme.id} filme={filme} />
      ))}
    </div>
  );
};

export default FilmeList;
