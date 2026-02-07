import React from 'react';

const AchievementIcon = ({ id }) => {
  const icons = {
    1: (
      <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
        <defs>
          <radialGradient id="sunGlow1" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="70%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#06b6d4" />
          </radialGradient>
          <filter id="sunFilter1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
          </filter>
        </defs>
        <circle cx="50" cy="45" r="16" fill="url(#sunGlow1)" />
        <circle cx="50" cy="45" r="14" fill="url(#sunGlow1)" opacity="0.7" />
        <circle cx="50" cy="16" r="5" fill="#38bdf8" filter="url(#sunFilter1)" />
        <circle cx="50" cy="74" r="5" fill="#38bdf8" filter="url(#sunFilter1)" />
        <circle cx="26" cy="45" r="5" fill="#38bdf8" filter="url(#sunFilter1)" />
        <circle cx="74" cy="45" r="5" fill="#38bdf8" filter="url(#sunFilter1)" />
        <circle cx="30" cy="26" r="4" fill="#0ea5e9" />
        <circle cx="70" cy="26" r="4" fill="#0ea5e9" />
        <circle cx="70" cy="64" r="4" fill="#0ea5e9" />
        <circle cx="30" cy="64" r="4" fill="#0ea5e9" />
      </svg>
    ),
    2: (
      <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
        <defs>
          <radialGradient id="targetGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#22c55e" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="32" fill="none" stroke="#22c55e" strokeWidth="3" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="#4ade80" strokeWidth="2" />
        <circle cx="50" cy="50" r="11" fill="url(#targetGlow2)" />
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
          <linearGradient id="lightning3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="lightFilter3">
            <feGaussianBlur stdDeviation="1" />
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodOpacity="0.6" />
          </filter>
        </defs>
        <path d="M50 8 L72 44 L52 44 L80 92 L30 48 L48 48 Z" fill="url(#lightning3)" filter="url(#lightFilter3)" />
        <path d="M50 8 L72 44 L52 44 L80 92 L30 48 L48 48 Z" fill="#38bdf8" opacity="0.4" />
      </svg>
    ),
    4: (
      <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
        <defs>
          <linearGradient id="gun4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect x="14" y="34" width="62" height="34" rx="5" fill="none" stroke="url(#gun4)" strokeWidth="3" />
        <rect x="18" y="42" width="54" height="3" fill="#f59e0b" />
        <circle cx="38" cy="56" r="6" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <circle cx="38" cy="56" r="3" fill="#f59e0b" />
        <path d="M78 52 L96 44 L96 68 Z" fill="url(#gun4)" />
      </svg>
    )
  };
  return icons[id] || icons[1];
};

function AchievementsWidget({ achievements, onSeeAll, onOpenDetails }) {
  const featured = achievements.slice(0, 3);

  return (
    <div style={{
      width: '100%',
      maxWidth: 400,
      borderRadius: 16,
      background: '#111214',
      padding: 16,
      color: '#f9fafb',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        gap: 8,
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>🏆</span>
          <div style={{ fontSize: 16, fontWeight: 500 }}>Conquistas</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={onSeeAll} style={{
            padding: '6px 14px',
            borderRadius: 999,
            border: 'none',
            background: '#f9fafb',
            color: '#111827',
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
            ver tudo
          </button>
          <button style={{
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
          }} onMouseEnter={(e) => e.target.style.transform = 'rotate(20deg)'} onMouseLeave={(e) => e.target.style.transform = 'rotate(0)'}>
            ✏️
          </button>
        </div>
      </div>

      {/* Icons Grid - Responsive */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gap: 12,
        marginBottom: 16
      }}>
        {featured.map((a) => (
          <button key={a.id} onClick={() => onOpenDetails(a)} style={{
            borderRadius: 12,
            background: '#18181b',
            border: 'none',
            padding: 12,
            cursor: 'pointer',
            textAlign: 'left',
            position: 'relative',
            transition: 'all 0.2s ease'
          }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-4px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              background: '#4f46e5',
              padding: '4px 6px',
              borderRadius: '12px 0 12px 0',
              fontSize: 10,
              fontWeight: 600
            }}>
              ★
            </div>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: a.iconColor,
              marginBottom: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <AchievementIcon id={a.id} />
            </div>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#9ca3af', lineHeight: 1.2 }}>
              {a.title.length > 15 ? a.title.slice(0, 12) + '...' : a.title}
            </div>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button style={{
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
        }} onClick={onSeeAll} onMouseEnter={(e) => e.target.style.transform = 'translateX(3px)'} onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}>
          →
        </button>
      </div>
    </div>
  );
}

export default AchievementsWidget;
