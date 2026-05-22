import React from 'react';

type LoadMoreButtonProps = {
  onClick: () => void;
  remaining: number;
};

export default function LoadMoreButton({ onClick, remaining }: LoadMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '12px 24px',
        borderRadius: 9999,
        background: '#16441c',
        color: '#fff',
        fontFamily: 'var(--font-jakarta), sans-serif',
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        transition: 'background 0.25s, transform 0.25s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = '#F4B41A';
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = '#16441c';
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
      }}
      aria-label={`Load ${remaining} more menu items`}
    >
      Load More ({remaining})
    </button>
  );
}
