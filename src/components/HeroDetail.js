// HeroDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Descriptions, Spin } from 'antd';

const HeroDetail = () => {
    const { id } = useParams();
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroDetail = async () => {
            const response = await axios.get(`https://www.superheroapi.com/api.php/2892825827616713/${id}`);
            setHero(response.data);
            setLoading(false);
        };
        fetchHeroDetail();
    }, [id]);

    if (loading) return <Spin size="large" />;

    return (
        <Card title={hero.name} style={{ width: 400, margin: '20px auto' }}>
            <img alt={hero.name} src={hero.image.url} style={{ width: '100%' }} />
            <Descriptions bordered>
                <Descriptions.Item label="Full Name">{hero.biography['full-name']}</Descriptions.Item>
                <Descriptions.Item label="Alter Egos">{hero.biography['alter-egos']}</Descriptions.Item>
                <Descriptions.Item label="Publisher">{hero.biography['publisher']}</Descriptions.Item>
                <Descriptions.Item label="First Appearance">{hero.biography['first-appearance']}</Descriptions.Item>
                <Descriptions.Item label="Alignment">{hero.biography['alignment']}</Descriptions.Item>
            </Descriptions>
        </Card>
    );
};

export default HeroDetail;
