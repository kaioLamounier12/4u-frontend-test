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

// Imagens dos usuários (placeholder)
const UserImages = [
  'https://i.pravatar.cc/32?img=1',
  'https://i.pravatar.cc/32?img=2',
  'https://i.pravatar.cc/32?img=3'
];

function AchievementsWidget({ achievements, onSeeAll, onOpenDetails }) {
  const featured = achievements.slice(0, 3);

  return (
    <div
      style={{
        width: 360,
        borderRadius: 16,
        background: '#111214',
        padding: 16,
        color: '#f9fafb',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 16
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 999,
            background: '#18181b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 8
          }}
        >
          <span style={{ fontSize: 16 }}>🏆</span>
        </div>
        <div style={{ fontSize: 16, fontWeight: 500 }}>Conquistas neste jogo</div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <button
            style={{
              padding: '6px 14px',
              borderRadius: 999,
              border: 'none',
              background: '#f9fafb',
              color: '#111827',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={onSeeAll}
            onMouseEnter={(e) => {
              e.target.style.opacity = '0.8';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '1';
              e.target.style.transform = 'scale(1)';
            }}
            title="Ver todas as conquistas"
          >
            ver tudo
          </button>
          <button
            style={{
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
              transition: 'all 0.2s ease',
              fontSize: 14
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#27272f';
              e.target.style.transform = 'rotate(20deg)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#18181b';
              e.target.style.transform = 'rotate(0)';
            }}
            title="Editar"
          >
            ✏️
          </button>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 16
        }}
      >
        {featured.map((a) => (
          <button
            key={a.id}
            onClick={() => onOpenDetails(a)}
            style={{
              flex: 1,
              borderRadius: 12,
              background: '#18181b',
              border: 'none',
              padding: 12,
              cursor: 'pointer',
              textAlign: 'left',
              position: 'relative',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                background: '#4f46e5',
                padding: '4px 6px',
                borderRadius: '12px 0 12px 0',
                fontSize: 10,
                fontWeight: 600
              }}
            >
              ★
            </div>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: a.iconColor,
                marginBottom: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AchievementIcon id={a.id} />
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: '#9ca3af'
              }}
            >
              {a.title}
            </div>
          </button>
        ))}
      </div>

      <div
        style={{
          marginTop: 12,
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <button
          style={{
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
            transition: 'all 0.2s ease',
            fontSize: 16
          }}
          onClick={onSeeAll}
          onMouseEnter={(e) => {
            e.target.style.background = '#27272f';
            e.target.style.transform = 'translateX(3px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#18181b';
            e.target.style.transform = 'translateX(0)';
          }}
          title="Ver todas as conquistas"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default AchievementsWidget;
