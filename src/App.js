import React, { useState, useEffect } from 'react';
import { Container, ThemeProvider } from 'react-bootstrap';
import BackgroundEffects from './components/Effect/BackgroundEffects';
import NebulaLayer from './components/Effect/NebulaLayer';
import HeroCarousel from './components/ListHero/HeroCarousel';
import BackgroundImage from './components/Effect/BackgroundImage';
import Skills from './components/HeroSkill/Skills';
import HeroGuide from './components/HeroGuide/HeroGuide';
import HeroStory from './components/HeroStory/HeroStory';
import HeroArt from './components/HeroArt/HeroArt';
import HieuUngChu from './components/Effect/HieuUngChu';

const heroes = [
  { 
    id: 1, 
    name: 'Nova-7', 
    role: 'Assault', 
    bio: 'A cybernetic soldier with enhanced reflexes.', 
    image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/cyberpunk-2077-poster.jpg', 
    largeImage: 'https://us.v-cdn.net/6036147/uploads/6MBL528YFKSR/how-phantom-liberty-will-change-cyberpunk-2077-281-29.jpg',
    characterImage: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15015.jpg',
    skills: [
      { name: 'Cyber Slash', description: 'Deals high damage with a cybernetic blade.', icon: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/76f77f12dc382f1126ebff00a8693c6e584a49df153ea1.png',skillImage: 'https://vtcpay.vn/blog/wp-content/uploads/2022/09/full-ngoai-hinh-hieu-ung-skin-tachi-dao-khach-vo-tinh-4.png', },
      { name: 'Reflex Boost', description: 'Increases speed and evasion for 10s.', icon: 'https://www.arenaofvalor.com/images/heroes/skill/15000.png',skillImage: 'https://vtcpay.vn/blog/wp-content/uploads/2022/09/full-ngoai-hinh-hieu-ung-skin-tachi-dao-khach-vo-tinh-4.png', },
      { name: 'Reflex Boost22', description: 'Increases speed and evasion for 210s.', icon: 'https://www.arenaofvalor.com/images/heroes/skill/15030.png',skillImage: 'https://vtcpay.vn/blog/wp-content/uploads/2022/09/full-ngoai-hinh-hieu-ung-skin-tachi-dao-khach-vo-tinh-4.png', },
    ],
    guide: {
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
      guideImage: 'https://i1.sndcdn.com/artworks-qFTLmdyrShouhJtr-Eez0Tw-t500x500.jpg',
    },
    story: {
      storyImage: 'https://i.ytimg.com/vi/3sSyqZL1lKs/hqdefault.jpg',
      storyText: 'Nova-7 was once a human soldier enhanced with cybernetic implants after a near-fatal mission. His journey led him to become a legendary figure in the galaxy, fighting for justice with unmatched precision.',
    },
    art: [
      { image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/11/lien-quan-nakroth-co-skin-chuyen-giao-vgvd-moi-2.jpg' },
      { image: 'https://i.ytimg.com/vi/3sSyqZL1lKs/hqdefault.jpg' },
      { image: 'https://kenh14cdn.com/203336854389633024/2021/8/17/photo-1-16291967106171950643143.jpg' },
    ],
  },
  { 
    id: 2, 
    name: 'Specter', 
    role: 'Sniper', 
    bio: 'A stealth operative with quantum cloaking.', 
    image: 'https://us.v-cdn.net/6036147/uploads/6MBL528YFKSR/how-phantom-liberty-will-change-cyberpunk-2077-281-29.jpg', 
    largeImage: 'https://images.hdqwalls.com/wallpapers/cyberpunk-2077-phantom-liberty-bundle-bx.jpg',
    characterImage: 'https://via.placeholder.com/300x400?text=Specter',
    skills: [
      { name: 'Quantum Shot', description: 'Fires a piercing shot through multiple targets.', icon: 'https://via.placeholder.com/50x50?text=Shot' },
      { name: 'Cloak', description: 'Becomes invisible for 5s.', icon: 'https://via.placeholder.com/50x50?text=Cloak' },
    ],
    guide: {
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      guideImage: 'https://via.placeholder.com/300x200?text=Guide+Specter',
    },
    story: {
      storyImage: 'https://via.placeholder.com/300x200?text=Story+Specter',
      storyText: 'Specter was a covert agent who mastered quantum technology to vanish from sight. His mysterious past drives his silent missions across the stars.',
    },
    art: [
      { image: 'https://via.placeholder.com/400x300?text=Art1+Specter' },
      { image: 'https://via.placeholder.com/400x300?text=Art2+Specter' },
      { image: 'https://via.placeholder.com/400x300?text=Art3+Specter' },
    ],
  },
  // Thêm dữ liệu tương tự cho các nhân vật còn lại...
  { id: 3, name: 'Blaze', role: 'Pyro', bio: 'A fiery warrior with flame control.', image: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15015.jpg', largeImage: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15015.jpg', characterImage: 'https://via.placeholder.com/300x400?text=Blaze', skills: [], guide: { videoUrl: '', guideImage: '' }, story: { storyImage: '', storyText: '' }, art: [] },
  { 
    id: 4, 
    name: 'Nova-7', 
    role: 'Assault', 
    bio: 'A cybernetic soldier with enhanced reflexes.', 
    image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/cyberpunk-2077-poster.jpg', 
    largeImage: 'https://us.v-cdn.net/6036147/uploads/6MBL528YFKSR/how-phantom-liberty-will-change-cyberpunk-2077-281-29.jpg',
    characterImage: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15015.jpg',
    skills: [
      { name: 'Cyber Slash', description: 'Deals high damage with a cybernetic blade.', icon: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/76f77f12dc382f1126ebff00a8693c6e584a49df153ea1.png' },
      { name: 'Reflex Boost', description: 'Increases speed and evasion for 10s.', icon: 'https://www.arenaofvalor.com/images/heroes/skill/15000.png' },
      { name: 'Reflex Boost', description: 'Increases speed and evasion for 10s.', icon: 'https://www.arenaofvalor.com/images/heroes/skill/15030.png' },
    ],
    guide: {
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
      guideImage: 'https://i1.sndcdn.com/artworks-qFTLmdyrShouhJtr-Eez0Tw-t500x500.jpg',
    },
    story: {
      storyImage: 'https://i.ytimg.com/vi/3sSyqZL1lKs/hqdefault.jpg',
      storyText: 'Nova-7 was once a human soldier enhanced with cybernetic implants after a near-fatal mission. His journey led him to become a legendary figure in the galaxy, fighting for justice with unmatched precision.',
    },
    art: [
      { image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/11/lien-quan-nakroth-co-skin-chuyen-giao-vgvd-moi-2.jpg' },
      { image: 'https://i.ytimg.com/vi/3sSyqZL1lKs/hqdefault.jpg' },
      { image: 'https://kenh14cdn.com/203336854389633024/2021/8/17/photo-1-16291967106171950643143.jpg' },
    ],
  },
  { 
    id: 5, 
    name: 'Specter', 
    role: 'Sniper', 
    bio: 'A stealth operative with quantum cloaking.', 
    image: 'https://us.v-cdn.net/6036147/uploads/6MBL528YFKSR/how-phantom-liberty-will-change-cyberpunk-2077-281-29.jpg', 
    largeImage: 'https://images.hdqwalls.com/wallpapers/cyberpunk-2077-phantom-liberty-bundle-bx.jpg',
    characterImage: 'https://via.placeholder.com/300x400?text=Specter',
    skills: [
      { name: 'Quantum Shot', description: 'Fires a piercing shot through multiple targets.', icon: 'https://via.placeholder.com/50x50?text=Shot' },
      { name: 'Cloak', description: 'Becomes invisible for 5s.', icon: 'https://via.placeholder.com/50x50?text=Cloak' },
    ],
    guide: {
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      guideImage: 'https://via.placeholder.com/300x200?text=Guide+Specter',
    },
    story: {
      storyImage: 'https://via.placeholder.com/300x200?text=Story+Specter',
      storyText: 'Specter was a covert agent who mastered quantum technology to vanish from sight. His mysterious past drives his silent missions across the stars.',
    },
    art: [
      { image: 'https://via.placeholder.com/400x300?text=Art1+Specter' },
      { image: 'https://via.placeholder.com/400x300?text=Art2+Specter' },
      { image: 'https://via.placeholder.com/400x300?text=Art3+Specter' },
    ],
  },
  // Thêm dữ liệu tương tự cho các nhân vật còn lại...
  { id: 6, name: 'Blaze', role: 'Pyro', bio: 'A fiery warrior with flame control.', image: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15015.jpg', largeImage: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15015.jpg', characterImage: 'https://via.placeholder.com/300x400?text=Blaze', skills: [], guide: { videoUrl: '', guideImage: '' }, story: { storyImage: '', storyText: '' }, art: [] },
  { 
    id: 7, 
    name: 'Nova-7', 
    role: 'Assault', 
    bio: 'A cybernetic soldier with enhanced reflexes.', 
    image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/cyberpunk-2077-poster.jpg', 
    largeImage: 'https://us.v-cdn.net/6036147/uploads/6MBL528YFKSR/how-phantom-liberty-will-change-cyberpunk-2077-281-29.jpg',
    characterImage: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15015.jpg',
    skills: [
      { name: 'Cyber Slash', description: 'Deals high damage with a cybernetic blade.', icon: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/76f77f12dc382f1126ebff00a8693c6e584a49df153ea1.png' },
      { name: 'Reflex Boost', description: 'Increases speed and evasion for 10s.', icon: 'https://www.arenaofvalor.com/images/heroes/skill/15000.png' },
      { name: 'Reflex Boost', description: 'Increases speed and evasion for 10s.', icon: 'https://www.arenaofvalor.com/images/heroes/skill/15030.png' },
    ],
    guide: {
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
      guideImage: 'https://i1.sndcdn.com/artworks-qFTLmdyrShouhJtr-Eez0Tw-t500x500.jpg',
    },
    story: {
      storyImage: 'https://i.ytimg.com/vi/3sSyqZL1lKs/hqdefault.jpg',
      storyText: 'Nova-7 was once a human soldier enhanced with cybernetic implants after a near-fatal mission. His journey led him to become a legendary figure in the galaxy, fighting for justice with unmatched precision.',
    },
    art: [
      { image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/11/lien-quan-nakroth-co-skin-chuyen-giao-vgvd-moi-2.jpg' },
      { image: 'https://i.ytimg.com/vi/3sSyqZL1lKs/hqdefault.jpg' },
      { image: 'https://kenh14cdn.com/203336854389633024/2021/8/17/photo-1-16291967106171950643143.jpg' },
    ],
  },
  { 
    id: 8, 
    name: 'Specter', 
    role: 'Sniper', 
    bio: 'A stealth operative with quantum cloaking.', 
    image: 'https://us.v-cdn.net/6036147/uploads/6MBL528YFKSR/how-phantom-liberty-will-change-cyberpunk-2077-281-29.jpg', 
    largeImage: 'https://images.hdqwalls.com/wallpapers/cyberpunk-2077-phantom-liberty-bundle-bx.jpg',
    characterImage: 'https://via.placeholder.com/300x400?text=Specter',
    skills: [
      { name: 'Quantum Shot', description: 'Fires a piercing shot through multiple targets.', icon: 'https://via.placeholder.com/50x50?text=Shot' },
      { name: 'Cloak', description: 'Becomes invisible for 5s.', icon: 'https://via.placeholder.com/50x50?text=Cloak' },
    ],
    guide: {
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      guideImage: 'https://via.placeholder.com/300x200?text=Guide+Specter',
    },
    story: {
      storyImage: 'https://via.placeholder.com/300x200?text=Story+Specter',
      storyText: 'Specter was a covert agent who mastered quantum technology to vanish from sight. His mysterious past drives his silent missions across the stars.',
    },
    art: [
      { image: 'https://via.placeholder.com/400x300?text=Art1+Specter' },
      { image: 'https://via.placeholder.com/400x300?text=Art2+Specter' },
      { image: 'https://via.placeholder.com/400x300?text=Art3+Specter' },
    ],
  },
  // Thêm dữ liệu tương tự cho các nhân vật còn lại...
  { id: 9, name: 'Blaze', role: 'Pyro', bio: 'A fiery warrior with flame control.', image: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15015.jpg', largeImage: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15015.jpg', characterImage: 'https://via.placeholder.com/300x400?text=Blaze', skills: [], guide: { videoUrl: '', guideImage: '' }, story: { storyImage: '', storyText: '' }, art: [] },
  { id: 10, name: 'Blaze', role: 'Pyro', bio: 'A fiery warrior with flame control.', image: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15015.jpg', largeImage: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15015.jpg', characterImage: 'https://via.placeholder.com/300x400?text=Blaze', skills: [], guide: { videoUrl: '', guideImage: '' }, story: { storyImage: '', storyText: '' }, art: [] },
  
];


function App() {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('https://via.placeholder.com/1200x800?text=Galactic+Hero');
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);

  useEffect(() => {
    setTimeout(() => setCardsVisible(true), 500);
  }, []);

  const handleCardClick = (index) => {
    if (isTransitioning) return;
    console.log('Card clicked:', index);
    setIsTransitioning(true);
    const hero = heroes[index];
    setBackgroundImage(hero.largeImage);
    setSelectedHero(hero);
    setStartIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

   // Tự động chọn hero đầu tiên khi khởi động
   useEffect(() => {
    if (heroes.length > 0) {
      setSelectedHero(heroes[0]); // Chọn hero đầu tiên
    }
  }, []);

  return (
    <ThemeProvider prefixes={{ btn: 'bs-btn' }}>
      
      <Container
        fluid
        className="sci-fi-bg"
        style={{
          minHeight: '100vh',
          width: '100vw',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <HieuUngChu /> 
        <NebulaLayer />
        <BackgroundEffects />
        <BackgroundImage imageUrl={backgroundImage} />
        <h1 className="sci-fi-title">Character M-SCI</h1>
        <div style={{ flex: 1, position: 'relative', zIndex: 5, minHeight: '70vh' }}>
          <HeroCarousel
            heroes={heroes}
            startIndex={startIndex}
            cardsVisible={cardsVisible}
            handleCardClick={handleCardClick}
            isTransitioning={isTransitioning}
          />
        </div>
        <div style={{ flexShrink: 0, zIndex: 3 }}>
          <Skills selectedHero={selectedHero} />
          <HeroGuide selectedHero={selectedHero} />
          <HeroStory selectedHero={selectedHero} />
          <HeroArt selectedHero={selectedHero} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;