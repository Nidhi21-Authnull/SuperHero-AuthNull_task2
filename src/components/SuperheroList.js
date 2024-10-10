import React, { useState } from 'react';
import { Row, Col, Card, Button, Input } from 'antd';

const { Search } = Input;

const HeroList = ({ heroes, onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter heroes based on the search term
  const filteredHeroes = searchTerm 
    ? heroes.filter(hero => 
        hero.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : heroes; 

  return (
    <div>

      <Search
        placeholder="Search for a hero"
        onSearch={value => setSearchTerm(value)}
        style={{ marginBottom: '16px' }}
      />

      {filteredHeroes.length > 0 ? (
        <Row gutter={[16, 16]} justify="center">
          {filteredHeroes.map((hero) => (
            <Col xs={24} sm={12} md={8} lg={6} key={hero.id}>
              <Card
                title={hero.name}
                cover={<img alt={hero.name} src={hero.image.url} />}
              >
                <p>{hero.biography['full-name']}</p>
                <Button type="primary" onClick={() => onViewDetails(hero.id)}>
                  View Details
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>No hero found by this name</p>
        </div>
      )}
    </div>
  );
};

export default HeroList;
