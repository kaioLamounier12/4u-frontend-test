import React from 'react';

// Componentes de ícones SVG - Versão Nítida
const AchievementIcon = ({ id }) => {
  const icons = {
    1: (
      // Hero of the Storm - Sol com raios
      <svg viewBox="0 0 100 100" width="36" height="36" fill="none">
        <defs>
          <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="12" fill="#06b6d4" filter="url(#glow1)"/>
        <circle cx="50" cy="20" r="3.5" fill="#06b6d4"/>
        <circle cx="50" cy="80" r="3.5" fill="#06b6d4"/>
        <circle cx="20" cy="50" r="3.5" fill="#06b6d4"/>
        <circle cx="80" cy="50" r="3.5" fill="#06b6d4"/>
        <circle cx="28" cy="28" r="3" fill="#06b6d4"/>
        <circle cx="72" cy="28" r="3" fill="#06b6d4"/>
        <circle cx="72" cy="72" r="3" fill="#06b6d4"/>
        <circle cx="28" cy="72" r="3" fill="#06b6d4"/>
        <circle cx="50" cy="50" r="6" fill="#0891b2"/>
      </svg>
    ),
    2: (
      // Gunsmith - Mira circular verde
      <svg viewBox="0 0 100 100" width="36" height="36" fill="none">
        <circle cx="50" cy="50" r="28" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="18" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="8" fill="#22c55e"/>
        <line x1="50" y1="12" x2="50" y2="22" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="50" y1="78" x2="50" y2="88" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="12" y1="50" x2="22" y2="50" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="78" y1="50" x2="88" y2="50" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    3: (
      // Take Out Those Husks - Relâmpago azul
      <svg viewBox="0 0 100 100" width="36" height="36" fill="none">
        <defs>
          <filter id="glow3" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
          </filter>
        </defs>
        <path d="M50 10 L70 40 L50 42 L75 88 L35 50 L55 48 Z" fill="#06b6d4" filter="url(#glow3)" opacity="0.95"/>
        <path d="M50 10 L70 40 L50 42 L75 88 L35 50 L55 48 Z" fill="#0ea5e9" opacity="0.7"/>
      </svg>
    ),
    4: (
      // Arma - Símbolo em âmbar
      <svg viewBox="0 0 100 100" width="36" height="36" fill="none">
        <defs>
          <filter id="glow4" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
          </filter>
        </defs>
        <rect x="18" y="35" width="55" height="28" rx="3" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow4)"/>
        <rect x="23" y="43" width="45" height="2.5" fill="#f59e0b"/>
        <circle cx="38" cy="57" r="4" fill="#f59e0b"/>
        <path d="M75 52 L90 45 L90 68 Z" fill="#f59e0b" filter="url(#glow4)"/>
      </svg>
    )
  };
  return icons[id] || icons[1];
};

function AchievementsRow({ achievement, onClick, compareMode }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        padding: '16px 20px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        color: '#f9fafb',
        transition: 'background 0.2s ease'
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = '#111214'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 12,
          background: achievement.iconColor,
          marginRight: 16,
          flexShrink: 0,
          border: '2px solid #0ea5e9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <AchievementIcon id={achievement.id} />
      </div>

      <div style={{ flex: 1, textAlign: 'left' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            marginBottom: 4
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600 }}>
            {achievement.title}
          </span>
          <span
            style={{
              fontSize: 14,
              color: '#fbbf24'
            }}
          >
            ⓘ
          </span>
        </div>
        <div
          style={{
            fontSize: 12,
            color: '#9ca3af',
            marginBottom: 4
          }}
        >
          {achievement.description}
        </div>
        <div
          style={{
            fontSize: 11,
            color: '#6b7280',
            marginTop: 2
          }}
        >
          {achievement.progressText}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 6,
          marginLeft: 12,
          flexShrink: 0
        }}
      >
        {compareMode ? (
          <>
            <img src="https://i.pravatar.cc/28?img=11" alt="user1" style={{ width: 28, height: 28, borderRadius: 999 }} />
            <img src="https://i.pravatar.cc/28?img=12" alt="user2" style={{ width: 28, height: 28, borderRadius: 999 }} />
          </>
        ) : (
          <>
            <img
              src={`https://i.pravatar.cc/28?img=${achievement.id}`}
              alt="user1"
              style={{
                width: 28,
                height: 28,
                borderRadius: 999,
                background: '#111214'
              }}
            />
            <img
              src={`https://i.pravatar.cc/28?img=${achievement.id + 1}`}
              alt="user2"
              style={{
                width: 28,
                height: 28,
                borderRadius: 999,
                background: '#111214'
              }}
            />
          </>
        )}
      </div>
    </button>
  );
}

export default AchievementsRow;
