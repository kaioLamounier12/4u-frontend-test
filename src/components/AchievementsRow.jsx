import React from 'react';

const AchievementIcon = ({ id }) => {
  const icons = {
    1: (
      <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
        <defs>
          <radialGradient id="sunGlow1r" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="70%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#06b6d4" />
          </radialGradient>
          <filter id="sunFilter1r" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
          </filter>
        </defs>
        <circle cx="50" cy="45" r="16" fill="url(#sunGlow1r)" />
        <circle cx="50" cy="45" r="14" fill="url(#sunGlow1r)" opacity="0.7" />
        <circle cx="50" cy="16" r="5" fill="#38bdf8" filter="url(#sunFilter1r)" />
        <circle cx="50" cy="74" r="5" fill="#38bdf8" filter="url(#sunFilter1r)" />
        <circle cx="26" cy="45" r="5" fill="#38bdf8" filter="url(#sunFilter1r)" />
        <circle cx="74" cy="45" r="5" fill="#38bdf8" filter="url(#sunFilter1r)" />
        <circle cx="30" cy="26" r="4" fill="#0ea5e9" />
        <circle cx="70" cy="26" r="4" fill="#0ea5e9" />
        <circle cx="70" cy="64" r="4" fill="#0ea5e9" />
        <circle cx="30" cy="64" r="4" fill="#0ea5e9" />
      </svg>
    ),
    2: (
      <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
        <defs>
          <radialGradient id="targetGlow2r" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#22c55e" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="32" fill="none" stroke="#22c55e" strokeWidth="3" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="#4ade80" strokeWidth="2" />
        <circle cx="50" cy="50" r="11" fill="url(#targetGlow2r)" />
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
          <linearGradient id="lightning3r" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="lightFilter3r">
            <feGaussianBlur stdDeviation="1" />
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodOpacity="0.6" />
          </filter>
        </defs>
        <path d="M50 8 L72 44 L52 44 L80 92 L30 48 L48 48 Z" fill="url(#lightning3r)" filter="url(#lightFilter3r)" />
        <path d="M50 8 L72 44 L52 44 L80 92 L30 48 L48 48 Z" fill="#38bdf8" opacity="0.4" />
      </svg>
    ),
    4: (
      <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
        <defs>
          <linearGradient id="gun4r" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect x="14" y="34" width="62" height="34" rx="5" fill="none" stroke="url(#gun4r)" strokeWidth="3" />
        <rect x="18" y="42" width="54" height="3" fill="#f59e0b" />
        <circle cx="38" cy="56" r="6" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <circle cx="38" cy="56" r="3" fill="#f59e0b" />
        <path d="M78 52 L96 44 L96 68 Z" fill="url(#gun4r)" />
      </svg>
    )
  };
  return icons[id] || icons[1];
};

function AchievementsRow({ achievement, compareMode, onOpen }) {
  const avatarColor = achievement.iconColor;
  
  return (
    <button onClick={onOpen} style={{
      width: '100%',
      padding: 12,
      borderRadius: 12,
      border: 'none',
      background: '#18181b',
      color: '#f9fafb',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      transition: 'all 0.2s ease',
      marginBottom: 8
    }} onMouseEnter={(e) => {
      e.currentTarget.style.background = '#27272f';
      e.currentTarget.style.transform = 'translateX(2px)';
    }} onMouseLeave={(e) => {
      e.currentTarget.style.background = '#18181b';
      e.currentTarget.style.transform = 'translateX(0)';
    }}>
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 8,
        background: avatarColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <AchievementIcon id={achievement.id} />
      </div>

      <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>
          {achievement.title}
        </div>
        <div style={{ fontSize: 11, color: '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {achievement.progressText}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
        <img src={`https://i.pravatar.cc/28?img=${compareMode ? 11 : achievement.id}`} alt="Avatar" style={{
          width: 28,
          height: 28,
          borderRadius: 6,
          border: '2px solid #4f46e5'
        }} />
        <img src={`https://i.pravatar.cc/28?img=${compareMode ? 12 : (achievement.id + 5)}`} alt="Avatar" style={{
          width: 28,
          height: 28,
          borderRadius: 6,
          border: '2px solid #8b5cf6'
        }} />
      </div>
    </button>
  );
}

export default AchievementsRow;
