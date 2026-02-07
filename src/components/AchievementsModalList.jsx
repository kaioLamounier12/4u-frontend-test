import React, { useState, useMemo } from 'react';
import AchievementsRow from './AchievementsRow';

const FeaturedIcon = ({ id }) => {
  const icons = {
    1: <svg viewBox="0 0 100 100" width="32" height="32" fill="none"><defs><radialGradient id="sunGlow1l"><stop offset="0%" stopColor="#38bdf8" /><stop offset="70%" stopColor="#0ea5e9" /><stop offset="100%" stopColor="#06b6d4" /></radialGradient></defs><circle cx="50" cy="45" r="12" fill="url(#sunGlow1l)" /><circle cx="50" cy="16" r="3.5" fill="#38bdf8" /><circle cx="50" cy="74" r="3.5" fill="#38bdf8" /><circle cx="26" cy="45" r="3.5" fill="#38bdf8" /><circle cx="74" cy="45" r="3.5" fill="#38bdf8" /></svg>,
    2: <svg viewBox="0 0 100 100" width="32" height="32" fill="none"><defs><radialGradient id="targetGlow2l"><stop offset="0%" stopColor="#4ade80" /><stop offset="100%" stopColor="#22c55e" /></radialGradient></defs><circle cx="50" cy="50" r="24" fill="none" stroke="#22c55e" strokeWidth="2" /><circle cx="50" cy="50" r="8" fill="url(#targetGlow2l)" /></svg>,
    3: <svg viewBox="0 0 100 100" width="32" height="32" fill="none"><defs><linearGradient id="lightning3l" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient></defs><path d="M50 8 L65 38 L50 40 L70 80 L35 45 L50 45 Z" fill="url(#lightning3l)" /></svg>
  };
  return icons[id] || icons[1];
};

const BUTTON_STYLE = { fontSize: 12, cursor: 'pointer', transition: 'all 0.2s ease' };
const MODAL_BUTTON_HOVER = (e) => { e.target.style.background = '#27272f'; };
const MODAL_BUTTON_LEAVE = (e) => { e.target.style.background = '#18181b'; };

function AchievementsModalList({ achievements, onClose, onOpenDetails }) {
  const [search, setSearch] = useState('');
  const [compareMode, setCompareMode] = useState(false);

  const achievedCount = achievements.filter((a) => a.achieved).length;
  const percent = Math.round((achievedCount / 100) * 100) || 50;
  const featured = achievements.slice(0, 3);
  const filtered = achievements.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) onClose();
  };

  return (
    <div onClick={handleBackdropClick} style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      zIndex: 50,
      backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: 520,
        maxHeight: '90vh',
        borderRadius: 16,
        background: '#050507',
        color: '#f9fafb',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.75)'
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{
          padding: 16,
          borderBottom: '1px solid #27272f',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>🏆</span>
            <span style={{ fontSize: 15, fontWeight: 600 }}>Conquistas neste jogo</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{
              padding: '6px 12px',
              borderRadius: 999,
              border: 'none',
              background: '#18181b',
              color: '#e5e7eb',
              ...BUTTON_STYLE
            }} onMouseEnter={MODAL_BUTTON_HOVER} onMouseLeave={MODAL_BUTTON_LEAVE}>
              Fortnite ▾
            </button>
            <button onClick={onClose} style={{
              width: 32,
              height: 32,
              borderRadius: 999,
              border: 'none',
              background: '#18181b',
              color: '#e5e7eb',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }} onMouseEnter={(e) => e.target.style.background = '#27272f'} onMouseLeave={(e) => e.target.style.background = '#18181b'}>
              ✕
            </button>
          </div>
        </div>

        {/* Featured Icons */}
        <div style={{ padding: 16, borderBottom: '1px solid #27272f' }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
            {featured.map((a) => (
              <button key={a.id} onClick={() => onOpenDetails(a)} style={{
                width: 80,
                height: 80,
                borderRadius: 12,
                background: '#18181b',
                border: 'none',
                padding: 12,
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                <div style={{
                  position: 'absolute',
                  top: 4,
                  right: 4,
                  background: '#4f46e5',
                  padding: '2px 4px',
                  borderRadius: 4,
                  fontSize: 9,
                  fontWeight: 600
                }}>
                  ★
                </div>
                <FeaturedIcon id={a.id} />
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
            <span>{achievedCount} de 100 alcançadas</span>
            <span>{percent}%</span>
          </div>
          <div style={{
            height: 6,
            borderRadius: 3,
            background: '#18181b',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${percent}%`,
              background: 'linear-gradient(90deg, #06b6d4, #0ea5e9)',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        {/* Search and Filter */}
        <div style={{ padding: 16, borderBottom: '1px solid #27272f' }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <div style={{
              flex: 1,
              minWidth: 150,
              display: 'flex',
              alignItems: 'center',
              background: '#18181b',
              borderRadius: 8,
              padding: '8px 12px'
            }}>
              <span style={{ fontSize: 14, marginRight: 8 }}>🔍</span>
              <input type="text" placeholder="Pesquisar conquista..." value={search} onChange={(e) => setSearch(e.target.value)} style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                color: '#f9fafb',
                fontSize: 13,
                outline: 'none'
              }} />
            </div>
            <button onClick={() => setCompareMode(!compareMode)} style={{
              padding: '8px 12px',
              borderRadius: 8,
              border: 'none',
              background: compareMode ? '#4f46e5' : '#18181b',
              color: '#f9fafb',
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.2s ease'
            }} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
              <img src="https://i.pravatar.cc/24?img=5" alt="Luiza" style={{ width: 20, height: 20, borderRadius: 4 }} />
              Comparar
            </button>
          </div>
        </div>

        {/* List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
          {useMemo(() => {
            const achieved = filtered.filter(a => a.achieved);
            const notAchieved = filtered.filter(a => !a.achieved);

            return (
              <>
                {achieved.length > 0 && (
                  <>
                    {achieved.map((a) => (
                      <AchievementsRow key={a.id} achievement={a} compareMode={compareMode} onOpen={() => onOpenDetails(a)} />
                    ))}
                  </>
                )}

                {notAchieved.length > 0 && (
                  <>
                    <div style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#6b7280',
                      marginTop: 16,
                      marginBottom: 12
                    }}>
                      Não alcançadas
                    </div>
                    {notAchieved.map((a) => (
                      <AchievementsRow key={a.id} achievement={a} compareMode={compareMode} onOpen={() => onOpenDetails(a)} />
                    ))}
                  </>
                )}
              </>
            );
          }, [filtered, compareMode, onOpenDetails])}
        </div>
      </div>
    </div>
  );
}

export default AchievementsModalList;
