import React from 'react';
import {
  Title,
  Description,
  Primary,
  Controls,
  Stories,
  useOf,
} from '@storybook/blocks';
import { SourceCode } from '../src/components/SourceCode';

const divider: React.CSSProperties = {
  height: 1,
  background: '#E4E4EE',
  margin: '32px 0',
};

const label: React.CSSProperties = {
  fontFamily: "'Pretendard', sans-serif",
  fontSize: 13,
  fontWeight: 700,
  color: '#9999B8',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  margin: '0 0 16px',
};

function SourceCodeFromMeta() {
  try {
    const resolved = useOf('meta', ['meta']) as any;
    const params = resolved?.csfFile?.meta?.parameters?.sourceCode
      ?? resolved?.preparedMeta?.parameters?.sourceCode;
    if (params && (params.fe || params.ios || params.aos)) {
      return (
        <div style={{ marginTop: 16 }}>
          <SourceCode fe={params.fe} ios={params.ios} aos={params.aos} />
        </div>
      );
    }
  } catch {}
  return null;
}

export function MdsDocsPage() {
  return (
    <>
      <Title />
      <Description />
      <div style={divider} />

      <p style={label}>Properties</p>
      <Controls />

      <div style={divider} />

      <p style={label}>Preview</p>
      <Primary />
      <SourceCodeFromMeta />

      <div style={divider} />

      <Stories includePrimary={false} />
    </>
  );
}
