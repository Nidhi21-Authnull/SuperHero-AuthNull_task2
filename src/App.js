import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import HeroList from './components/SuperheroList';
import HeroDetailModal from './components/HeroDetailModal';

const { Header, Content } = Layout;

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchHeroes = (query = 'a') => {
    axios
      .get(`https://www.superheroapi.com/api.php/2892825827616713/search/${query}`)
      .then((response) => setHeroes(response.data.results))
      .catch((error) => console.error(error));
  };

  const fetchHeroDetails = (id) => {
    axios
      .get(`https://www.superheroapi.com/api.php/2892825827616713/${id}`)
      .then((response) => {
        setSelectedHero(response.data);
        setModalVisible(true);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <Layout>
      <Header>
        <Navbar onSearch={fetchHeroes} />
      </Header>
      <Content style={{ padding: '20px' }}>
        <HeroList heroes={heroes} onViewDetails={fetchHeroDetails} />
        {selectedHero && (
          <HeroDetailModal
            hero={selectedHero}
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        )}
      </Content>
    </Layout>
  );
};

export default App;
