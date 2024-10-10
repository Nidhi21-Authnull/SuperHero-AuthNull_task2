import { Card, Button } from 'antd';

const SuperheroCard = ({ hero, viewDetails }) => (
  <Card
    title={hero.name}
    hoverable
    cover={<img alt={hero.name} src={hero.image.url} />}
  >
    <p>{hero.biography.publisher}</p>
    <Button onClick={() => viewDetails(hero.id)}>View Details</Button>
  </Card>
);

export default SuperheroCard;
