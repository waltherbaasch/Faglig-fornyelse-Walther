
import React, { useState } from 'react';
import axios from 'axios';
import PlayerStats from '../types/types';
import styles from '../components/Home.module.css'; // Importerer CSS

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get<PlayerStats>(`https://api.eksempel.com/football/stats?player=${searchQuery}`);
      setPlayerStats(response.data);
    } catch (error) {
      console.error('Error fetching player stats:', error);
    }
  };

  return (
    <div className={`${styles.bgGray} min-h-screen p-8`}>
      {/* Resten af JSX */}
    </div>
  );
};

export default Home;

