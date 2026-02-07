import React, { useState } from 'react';
import AchievementsRow from './AchievementsRow';

function AchievementsModalList({ achievements, onClose, onOpenDetails }) {
  const [search, setSearch] = useState('');
  const [compareMode, setCompareMode] = useState(false);

  const achievedCount = achievements.filter((a) => a.achieved).length;
  const total = 100;
  const percent = Math.round((achievedCount / total) * 100) || 50;

  const filtered = achievements.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

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
        zIndex: 50,
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
            alignItems: 'center',
            gap: 12
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
              fontSize: 16
            }}
          >
            🏆
          </div>
          <div style={{ fontSize: 16, fontWeight: 500 }}>
            Conquistas neste jogo
          </div>

          <div style={{ marginLeft: 'auto' }}>
            <button
              style={{
                padding: '8px 14px',
                borderRadius: 999,
                border: 'none',
                background: '#18181b',
                color: '#e5e7eb',
                fontSize: 13,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#27272f'}
              onMouseLeave={(e) => e.target.style.background = '#18181b'}
            >
              Fortnite
              <span>▾</span>
            </button>
          </div>

          <button
            onClick={onClose}
            style={{
              marginLeft: 8,
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
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#27272f'}
            onMouseLeave={(e) => e.target.style.background = '#18181b'}
          >
            ✕
          </button>
        </div>

        {/* Controls Section */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid #27272f'
          }}
        >
          {/* Featured Icons */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
            {achievements.slice(0, 3).map((a) => (
              <div
                key={a.id}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  background: a.iconColor,
                  border: '2px solid #6366f1',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -4,
                    left: -4,
                    background: '#4f46e5',
                    borderRadius: '12px 0 12px 0',
                    padding: '3px 6px',
                    fontSize: 10
                  }}
                >
                  ★
                </div>
              </div>
            ))}
          </div>

          {/* Progress */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 13,
              marginBottom: 4
            }}
          >
            <span>{achievedCount} de {total} alcançadas</span>
            <span style={{ marginLeft: 'auto' }}>{percent}%</span>
          </div>

          <div
            style={{
              width: '100%',
              height: 8,
              borderRadius: 999,
              background: '#27272f',
              overflow: 'hidden',
              marginBottom: 12
            }}
          >
            <div
              style={{
                width: `${percent}%`,
                height: '100%',
                background: '#38bdf8',
                transition: 'width 0.3s ease'
              }}
            />
          </div>

          {/* Search and Compare */}
          <div style={{ display: 'flex', gap: 12 }}>
            <div
              style={{
                flex: 1,
                borderRadius: 999,
                background: '#111214',
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                height: 40,
                border: '1px solid #27272f',
                transition: 'border-color 0.2s ease'
              }}
            >
              <span style={{ marginRight: 8, fontSize: 16 }}>🔍</span>
              <input
                type="text"
                placeholder="Pesquisar conquista"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  color: '#f9fafb',
                  fontSize: 13
                }}
              />
            </div>

            <button
              onClick={() => setCompareMode((v) => !v)}
              style={{
                minWidth: 160,
                borderRadius: 999,
                border: '1px solid #27272f',
                background: '#111214',
                color: '#f9fafb',
                fontSize: 13,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '0 12px',
                height: 40,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#38bdf8';
                e.target.style.background = '#18181b';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#27272f';
                e.target.style.background = '#111214';
              }}
            >
              <img
                src="https://i.pravatar.cc/28?img=10"
                alt="user"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 999,
                  background: compareMode ? '#22c55e' : '#27272f'
                }}
              />
              {compareMode ? 'Comparar com' : 'Luiza Soares'}
              <span>▾</span>
            </button>
          </div>

          {compareMode && (
            <div style={{ display: 'flex', gap: 8, marginTop: 12, paddingTop: 12, borderTop: '1px solid #27272f' }}>
              <img src="https://i.pravatar.cc/32?img=5" alt="user1" style={{ width: 32, height: 32, borderRadius: 999 }} />
              <img src="https://i.pravatar.cc/32?img=6" alt="user2" style={{ width: 32, height: 32, borderRadius: 999 }} />
              <img src="https://i.pravatar.cc/32?img=7" alt="user3" style={{ width: 32, height: 32, borderRadius: 999 }} />
            </div>
          )}
        </div>

        {/* List */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '8px 0 12px 0'
          }}
        >
          {filtered.length > 0 ? (
            filtered.map((a) => (
              <AchievementsRow
                key={a.id}
                achievement={a}
                onClick={() => onOpenDetails(a)}
                compareMode={compareMode}
              />
            ))
          ) : (
            <div
              style={{
                padding: '40px 20px',
                textAlign: 'center',
                color: '#9ca3af',
                fontSize: 14
              }}
            >
              Nenhuma conquista encontrada
            </div>
          )}
        </div>

        {/* Footer - Não alcançadas */}
        <div
          style={{
            padding: '16px 20px',
            borderTop: '1px solid #27272f'
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: '#9ca3af',
              marginBottom: 12,
              fontWeight: 500
            }}
          >
            Não alcançadas
          </div>
          <div
            style={{
              display: 'flex',
              gap: 12,
              overflowX: 'auto',
              paddingBottom: 8
            }}
          >
            {achievements
              .filter((a) => !a.achieved)
              .slice(0, 4)
              .map((a) => (
                <div
                  key={a.id}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 14,
                    background: '#111214',
                    border: '1px solid #27272f',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.6,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.borderColor = '#38bdf8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.6';
                    e.currentTarget.style.borderColor = '#27272f';
                  }}
                  onClick={() => onOpenDetails(a)}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: a.iconColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AchievementsModalList;
