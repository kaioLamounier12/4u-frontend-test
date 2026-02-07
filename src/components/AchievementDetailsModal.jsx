import React from 'react';

const AchievementIcon = ({ id }) => {
  const icons = {
    1: (
      <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
        <defs>
          <radialGradient id="sunGlow1m" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="70%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#06b6d4" />
          </radialGradient>
          <filter id="sunFilter1m" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
          </filter>
        </defs>
        <circle cx="50" cy="45" r="16" fill="url(#sunGlow1m)" />
        <circle cx="50" cy="45" r="14" fill="url(#sunGlow1m)" opacity="0.7" />
        <circle cx="50" cy="16" r="5" fill="#38bdf8" filter="url(#sunFilter1m)" />
        <circle cx="50" cy="74" r="5" fill="#38bdf8" filter="url(#sunFilter1m)" />
        <circle cx="26" cy="45" r="5" fill="#38bdf8" filter="url(#sunFilter1m)" />
        <circle cx="74" cy="45" r="5" fill="#38bdf8" filter="url(#sunFilter1m)" />
        <circle cx="30" cy="26" r="4" fill="#0ea5e9" />
        <circle cx="70" cy="26" r="4" fill="#0ea5e9" />
        <circle cx="70" cy="64" r="4" fill="#0ea5e9" />
        <circle cx="30" cy="64" r="4" fill="#0ea5e9" />
      </svg>
    ),
    2: (
      <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
        <defs>
          <radialGradient id="targetGlow2m" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#22c55e" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="32" fill="none" stroke="#22c55e" strokeWidth="3" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="#4ade80" strokeWidth="2" />
        <circle cx="50" cy="50" r="11" fill="url(#targetGlow2m)" />
        <line x1="50" y1="6" x2="50" y2="18" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="82" x2="50" y2="94" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
        <line x1="6" y1="50" x2="18" y2="50" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
        <line x1="82" y1="50" x2="94" y2="50" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="50" r="4" fill="#16a34a" />
      </svg>
    ),
    3: (
      <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
        <defs>
          <linearGradient id="lightning3m" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="lightFilter3m">
            <feGaussianBlur stdDeviation="1" />
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodOpacity="0.6" />
          </filter>
        </defs>
        <path d="M50 8 L72 44 L52 44 L80 92 L30 48 L48 48 Z" fill="url(#lightning3m)" filter="url(#lightFilter3m)" />
        <path d="M50 8 L72 44 L52 44 L80 92 L30 48 L48 48 Z" fill="#38bdf8" opacity="0.4" />
      </svg>
    ),
    4: (
      <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
        <defs>
          <linearGradient id="gun4m" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect x="14" y="34" width="62" height="34" rx="5" fill="none" stroke="url(#gun4m)" strokeWidth="3" />
        <rect x="18" y="42" width="54" height="3" fill="#f59e0b" />
        <circle cx="38" cy="56" r="6" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <circle cx="38" cy="56" r="3" fill="#f59e0b" />
        <path d="M78 52 L96 44 L96 68 Z" fill="url(#gun4m)" />
      </svg>
    )
  };
  return icons[id] || icons[1];
};

const InfoField = ({ label, value, highlight }) => (
  <div style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid #27272f' }}>
    <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 600, marginBottom: 4 }}>
      {label}
    </div>
    <div style={{
      fontSize: 14,
      color: '#f9fafb',
      fontWeight: 500,
      padding: highlight ? '8px 12px' : 0,
      background: highlight ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
      borderRadius: highlight ? 8 : 0
    }}>
      {value}
    </div>
  </div>
);

function AchievementDetailsModal({ achievement, onClose, onNext, onPrev, onMarkAsSale, onPin }) {
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) onClose();
  };

  const BUTTON_STYLE = {
    flex: '1 1 auto',
    padding: 10,
    borderRadius: 8,
    border: 'none',
    background: '#18181b',
    color: '#e5e7eb',
    cursor: 'pointer',
    fontSize: 14,
    transition: 'all 0.2s ease'
  };

  return (
    <div onClick={handleBackdropClick} style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      zIndex: 50,
      backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: 480,
        maxHeight: '90vh',
        borderRadius: 16,
        background: '#050507',
        color: '#f9fafb',
        overflow: 'auto',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.75)',
        display: 'flex',
        flexDirection: 'column'
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{
          padding: 16,
          borderBottom: '1px solid #27272f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <span style={{ fontSize: 16, fontWeight: 600 }}>Detalhes da Conquista</span>
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
            justifyContent: 'center'
          }}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: 20, overflowY: 'auto' }}>
          <div style={{
            width: 70,
            height: 70,
            borderRadius: 12,
            background: achievement.iconColor,
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <AchievementIcon id={achievement.id} />
          </div>

          <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
            {achievement.title}
          </div>

          <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 20 }}>
            {achievement.description}
          </div>

          <InfoField label="Plataforma" value={achievement.platform} />
          <InfoField label="Jogador" value={achievement.nickname} />
          <InfoField label="Evento" value={achievement.event} />
          <InfoField label="Data" value={achievement.date} />
          <InfoField label="Raridade" value={achievement.rarity} highlight />
          <InfoField label="Desbloqueado por" value={achievement.playersPercent} />
        </div>

        {/* Footer */}
        <div style={{
          padding: 16,
          borderTop: '1px solid #27272f',
          display: 'flex',
          gap: 8,
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}>
          <button onClick={onPrev} style={BUTTON_STYLE} onMouseEnter={(e) => e.target.style.background = '#27272f'} onMouseLeave={(e) => e.target.style.background = '#18181b'}>
            ← Anterior
          </button>
          
          <button onClick={() => onMarkAsSale(achievement)} style={BUTTON_STYLE} onMouseEnter={(e) => e.target.style.background = '#27272f'} onMouseLeave={(e) => e.target.style.background = '#18181b'}>
            💲 Venda
          </button>

          <button onClick={() => onPin(achievement)} style={BUTTON_STYLE} onMouseEnter={(e) => e.target.style.background = '#27272f'} onMouseLeave={(e) => e.target.style.background = '#18181b'}>
            ⭐ Fixar
          </button>

          <button onClick={onNext} style={BUTTON_STYLE} onMouseEnter={(e) => e.target.style.background = '#27272f'} onMouseLeave={(e) => e.target.style.background = '#18181b'}>
            Próximo →
          </button>
        </div>
      </div>
    </div>
  );
}

export default AchievementDetailsModal;
