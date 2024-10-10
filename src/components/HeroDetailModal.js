import { Modal } from 'antd';

const HeroDetailModal = ({ hero, visible, onClose }) => {
  return (
    <Modal title={hero.name} visible={visible} onCancel={onClose} footer={null}>
      <p>Full Name: {hero.biography['full-name']}</p>
      <p>Publisher: {hero.biography.publisher}</p>
      <p>First Appearance: {hero.biography['first-appearance']}</p>
      <img src={hero.image.url} alt={hero.name} style={{ width: '100%' }} />
    </Modal>
  );
};

export default HeroDetailModal;
