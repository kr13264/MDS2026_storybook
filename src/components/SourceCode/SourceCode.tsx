import { useState } from 'react';

type Platform = 'FE' | 'IOS' | 'AOS';

interface SourceCodeProps {
  fe?: string;
  ios?: string;
  aos?: string;
}

export function SourceCode({ fe, ios, aos }: SourceCodeProps) {
  const [copied, setCopied] = useState(false);

  const tabs: { key: Platform; code: string }[] = [];
  if (fe) tabs.push({ key: 'FE', code: fe });
  if (ios) tabs.push({ key: 'IOS', code: ios });
  if (aos) tabs.push({ key: 'AOS', code: aos });

  const [active, setActive] = useState<Platform>(tabs[0]?.key ?? 'FE');

  if (tabs.length === 0) return null;

  const current = tabs.find(t => t.key === active) ?? tabs[0];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{
      position: 'relative',
      borderRadius: 8,
      overflow: 'hidden',
      background: '#292A2D',
    }}>
      {/* Tabs — top right */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 0,
        padding: '0 12px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        {tabs.map((t, i) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            style={{
              padding: '8px 12px',
              background: 'none',
              border: 'none',
              borderBottom: active === t.key ? '2px solid #6E76E5' : '2px solid transparent',
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: active === t.key ? 700 : 400,
              fontFamily: "'Pretendard', sans-serif",
              color: active === t.key ? '#fff' : 'rgba(255,255,255,0.45)',
              transition: 'color 0.15s',
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
            }}
          >
            {t.key}
          </button>
        ))}
      </div>

      {/* Code */}
      <pre style={{
        margin: 0,
        padding: '16px 20px 40px',
        color: 'rgba(255,255,255,0.85)',
        fontSize: 13,
        lineHeight: 1.65,
        overflowX: 'auto',
        fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
      }}>
        <code>{current.code}</code>
      </pre>

      {/* Copy — bottom right */}
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          bottom: 10,
          right: 12,
          padding: '4px 12px',
          borderRadius: 4,
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(255,255,255,0.06)',
          color: 'rgba(255,255,255,0.6)',
          fontSize: 12,
          fontFamily: "'Pretendard', sans-serif",
          cursor: 'pointer',
          transition: 'background 0.15s',
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
