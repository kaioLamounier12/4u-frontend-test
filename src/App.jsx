import React, { useState } from 'react';
import AchievementsWidget from './components/AchievementsWidget';
import AchievementsModalList from './components/AchievementsModalList';
import AchievementDetailsModal from './components/AchievementDetailsModal';

const MOCK_ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Hero of the Storm',
    description: 'Descrição até 20 caracteres...',
    progressText: 'Alcançado por 20% dos jogadores.',
    rarity: 'Raro',
    rarityColor: '#7dd3fc',
    iconColor: '#22d3ee',
    players: 0.2,
    date: '01/01/2024 • 16h30',
    platform: 'Epic Games',
    nickname: 'jolivit',
    event: '--',
    validUntil: '--',
    playersPercent: '20%',
    achieved: true
  },
  {
    id: 2,
    title: 'Título da publicação',
    description: 'Descrição até 20 caracteres...',
    progressText: 'Alcançado por 20% dos jogadores.',
    rarity: 'Épico',
    rarityColor: '#fde047',
    iconColor: '#10b981',
    players: 0.2,
    date: '--',
    platform: 'Epic Games',
    nickname: 'jolivit',
    event: '--',
    validUntil: '--',
    playersPercent: '20%',
    achieved: true
  },
  {
    id: 3,
    title: 'Take Out Those Husks',
    description: 'Descrição até 20 caracteres...',
    progressText: 'Alcançado por 20% dos jogadores.',
    rarity: 'Raro',
    rarityColor: '#7dd3fc',
    iconColor: '#38bdf8',
    players: 0.19,
    date: '01/01/2024 • 16h30',
    platform: 'Epic Games',
    nickname: 'jolivit',
    event: '--',
    validUntil: '--',
    playersPercent: '19%',
    achieved: true
  },
  {
    id: 4,
    title: 'Gunsmith',
    description: 'Descrição até 20 caracteres...',
    progressText: 'Alcançado por 25% dos jogadores.',
    rarity: 'Lendário',
    rarityColor: '#a78bfa',
    iconColor: '#8b5cf6',
    players: 0.25,
    date: '--',
    platform: 'Epic Games',
    nickname: 'jolivit',
    event: '--',
    validUntil: '--',
    playersPercent: '25%',
    achieved: false
  }
];

function App() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenList = () => setIsListOpen(true);
  const handleCloseList = () => setIsListOpen(false);

  const handleOpenDetails = (achievement) => {
    setSelectedAchievement(achievement);
    const index = MOCK_ACHIEVEMENTS.findIndex(a => a.id === achievement.id);
    setCurrentIndex(index);
  };

  const handleCloseDetails = () => {
    setSelectedAchievement(null);
  };

  const handleNextAchievement = () => {
    const nextIndex = (currentIndex + 1) % MOCK_ACHIEVEMENTS.length;
    setCurrentIndex(nextIndex);
    setSelectedAchievement(MOCK_ACHIEVEMENTS[nextIndex]);
  };

  const handlePrevAchievement = () => {
    const prevIndex = (currentIndex - 1 + MOCK_ACHIEVEMENTS.length) % MOCK_ACHIEVEMENTS.length;
    setCurrentIndex(prevIndex);
    setSelectedAchievement(MOCK_ACHIEVEMENTS[prevIndex]);
  };

  const handleMarkAsSale = (achievement) => {
    alert(`✓ ${achievement.title} marcado como venda!`);
  };

  const handlePinAchievement = (achievement) => {
    alert(`⭐ ${achievement.title} fixado!`);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
      }}
    >
      <AchievementsWidget
        achievements={MOCK_ACHIEVEMENTS}
        onSeeAll={handleOpenList}
        onOpenDetails={handleOpenDetails}
      />

      {isListOpen && (
        <AchievementsModalList
          achievements={MOCK_ACHIEVEMENTS}
          onClose={handleCloseList}
          onOpenDetails={handleOpenDetails}
        />
      )}

      {selectedAchievement && (
        <AchievementDetailsModal
          achievement={selectedAchievement}
          onClose={handleCloseDetails}
          onNext={handleNextAchievement}
          onPrev={handlePrevAchievement}
          onMarkAsSale={handleMarkAsSale}
          onPin={handlePinAchievement}
        />
      )}
    </div>
  );
}

export default App;
