'use client';

import { useState, useEffect } from 'react';

const DISCORD_URL = 'https://discord.gg/UcjHTY8fAg';

const CARD_W = 384;
const CARD_H = 268;
const BTN_W  = 140;
const BTN_H  = 40;
const EDGE   = 20;

export default function FeedbackWidget() {
  const [open, setOpen]       = useState(false);
  const [settled, setSettled] = useState(false);
  const [pos, setPos] = useState({ centerX: 0, centerY: 0, closedX: 0, closedY: 0, cardW: CARD_W });

  useEffect(() => {
    function calc() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const cardW = Math.min(CARD_W, vw - 32);
      setPos({
        cardW,
        centerX: Math.round((vw - cardW) / 2),
        centerY: Math.round((vh - CARD_H) / 2),
        closedX: vw  - EDGE - BTN_W,
        closedY: vh - EDGE - BTN_H,
      });
    }
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  function handleOpen() {
    setOpen(true);
    setSettled(false);
    setTimeout(() => setSettled(true), 500);
  }

  function handleClose() {
    setSettled(false);
    setOpen(false);
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    if (open) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  const morphStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 51,
    willChange: 'transform, width, height',
    transform: `translate(${open ? pos.centerX : pos.closedX}px, ${open ? pos.centerY : pos.closedY}px)`,
    width:  open ? `${pos.cardW}px` : `${BTN_W}px`,
    height: open ? `${CARD_H}px` : `${BTN_H}px`,
    borderRadius: open ? '14px' : '9999px',
    overflow: 'hidden',
    backgroundColor: '#111111',
    border: '1px solid #222222',
    boxShadow: open
      ? '0 25px 60px -10px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)'
      : '0 4px 12px rgba(0,0,0,0.4)',
    cursor: open ? 'default' : 'pointer',
    transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.2), width 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.2), height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.2), border-radius 0.1s ease, box-shadow 0.3s ease',
  };

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 49,
          backgroundColor: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        onClick={handleClose}
      />

      {/* Morphing element */}
      <div style={morphStyle} onClick={!open ? handleOpen : undefined}>

        {/* Button label */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '7px',
          color: '#a1a1aa',
          fontSize: '13px',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          opacity: open ? 0 : 1,
          transition: 'opacity 0.15s ease',
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          Feedback
        </div>

        {/* Modal content */}
        <div style={{
          position: 'absolute',
          inset: 0,
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          opacity: settled ? 1 : 0,
          transform: settled ? 'translateY(0px)' : 'translateY(6px)',
          transition: 'opacity 0.25s ease, transform 0.3s cubic-bezier(0.2, 0, 0, 1)',
          pointerEvents: settled ? 'auto' : 'none',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '6px' }}>
            <div>
              <p style={{ margin: 0, color: '#f5f5f5', fontWeight: 600, fontSize: '15px' }}>Notice something wrong?</p>
              <p style={{ margin: '3px 0 0', color: '#52525b', fontSize: '13px' }}>Missing info, incorrect details, broken page?</p>
            </div>
            <button
              onClick={handleClose}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#52525b', padding: '4px', borderRadius: '6px', flexShrink: 0, marginLeft: '10px', lineHeight: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.color = '#52525b')}
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p style={{ margin: '12px 0 18px', color: '#a1a1aa', fontSize: '13px', lineHeight: '1.6', flexGrow: 1 }}>
            Let us know in the Discord. You can report incorrect docs, suggest new pages, or just ask a question.
          </p>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px', padding: '10px', borderRadius: '8px', backgroundColor: '#5865F2', color: '#fff', fontSize: '14px', fontWeight: 500, textDecoration: 'none', transition: 'background-color 0.15s ease' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#4752C4')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#5865F2')}
          >
            <svg width="15" height="15" viewBox="0 0 127.14 96.36" fill="currentColor">
              <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z" />
            </svg>
            Open Discord
          </a>
        </div>
      </div>
    </>
  );
}
