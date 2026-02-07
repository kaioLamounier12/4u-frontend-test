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

function Field({ label, value, badge, highlight }) {
  return (
    <div
      style={{
        flex: 1,
        borderRadius: 12,
        background: '#18181b',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        border: '1px solid #27272f'
      }}
    >
      <span
        style={{
          fontSize: 11,
          color: '#6b7280',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
      >
        {label}
      </span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }}
      >
        <span
          style={{
            fontSize: 14,
            color: '#f9fafb',
            fontWeight: 500
          }}
        >
          {value}
        </span>
        {badge && (
          <span
            style={{
              fontSize: 11,
              padding: '3px 8px',
              borderRadius: 999,
              background: highlight || '#22c55e33',
              color: '#111827',
              fontWeight: 600
            }}
          >
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}

function AchievementDetailsModal({ achievement, onClose, onNext, onPrev, onMarkAsSale, onPin }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        zIndex: 60,
        backdropFilter: 'blur(4px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: 480,
          maxHeight: '90vh',
          borderRadius: 16,
          background: '#050507',
          color: '#f9fafb',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.75)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid #27272f',
            display: 'flex',
            alignItems: 'center'
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
              marginRight: 8,
              fontSize: 16
            }}
          >
            🏆
          </div>
          <div style={{ fontSize: 16, fontWeight: 500 }}>
            Conquistas neste jogo
          </div>

          <button
            onClick={onClose}
            style={{
              marginLeft: 'auto',
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
              transition: 'background 0.2s ease',
              fontSize: 16
            }}
            onMouseEnter={(e) => e.target.style.background = '#27272f'}
            onMouseLeave={(e) => e.target.style.background = '#18181b'}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            padding: '16px 20px',
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}
        >
          {/* Icon + Title */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: achievement.iconColor,
                flexShrink: 0,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AchievementIcon id={achievement.id} />
            </div>
            <div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 4
                }}
              >
                {achievement.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: '#9ca3af'
                }}
              >
                {achievement.description}
              </div>
            </div>
          </div>

          {/* Platform / Nickname */}
          <div style={{ display: 'flex', gap: 12 }}>
            <Field 
              label="plataforma:" 
              value={achievement.platform}
            />
            <Field 
              label="nickname:" 
              value={achievement.nickname}
            />
          </div>

          {/* Evento */}
          <Field label="evento:" value={achievement.event} />

          {/* Dates */}
          <div style={{ display: 'flex', gap: 12 }}>
            <Field label="data da conquista:" value={achievement.date} />
            <Field label="data de validade:" value={achievement.validUntil} />
          </div>

          {/* Rarity / Players */}
          <div style={{ display: 'flex', gap: 12 }}>
            <Field
              label="tipo de conquista:"
              value=""
              badge={achievement.rarity}
              highlight={achievement.rarityColor}
            />
            <Field label="% de players:" value={achievement.playersPercent} />
          </div>

          {/* Description */}
          <Field label="descrição:" value={achievement.description || '--'} />
        </div>

        {/* Footer Buttons */}
        <div
          style={{
            padding: '12px 20px 16px 20px',
            borderTop: '1px solid #27272f',
            display: 'flex',
            gap: 12
          }}
        >
          <button
            onClick={onPrev}
            style={{
              flex: 1,
              borderRadius: 999,
              height: 44,
              border: 'none',
              background: '#18181b',
              color: '#f9fafb',
              fontSize: 18,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#27272f';
              e.target.style.transform = 'translateX(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#18181b';
              e.target.style.transform = 'translateX(0)';
            }}
            title="Anterior"
          >
            ←
          </button>
          <button
            onClick={() => onMarkAsSale(achievement)}
            style={{
              flex: 3,
              borderRadius: 999,
              height: 44,
              border: 'none',
              background: '#22c55e',
              color: '#111827',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#16a34a';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 15px rgba(34, 197, 94, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#22c55e';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
            title="Marcar como venda"
          >
            💲 marcar como venda
          </button>
          <button
            onClick={() => onPin(achievement)}
            style={{
              flex: 2,
              borderRadius: 999,
              height: 44,
              border: 'none',
              background: '#18181b',
              color: '#f9fafb',
              fontSize: 13,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#27272f';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#18181b';
              e.target.style.transform = 'scale(1)';
            }}
            title="Fixar"
          >
            ⭐ fixar
          </button>
          <button
            onClick={onNext}
            style={{
              flex: 1,
              borderRadius: 999,
              height: 44,
              border: 'none',
              background: '#f9fafb',
              color: '#111827',
              fontSize: 18,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateX(2px)';
              e.target.style.boxShadow = '0 10px 20px rgba(249, 250, 251, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateX(0)';
              e.target.style.boxShadow = 'none';
            }}
            title="Próximo"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default AchievementDetailsModal;
