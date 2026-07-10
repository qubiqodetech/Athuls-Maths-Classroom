import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFFFF',
          borderRadius: '20%',
        }}
      >
        <svg
          viewBox="0 0 120 120"
          width="100%"
          height="100%"
          style={{ fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}
        >
          {/* C Arc */}
          <path
            d="M 95.35 24.64 A 50 50 0 1 0 95.35 95.35"
            stroke="#0D1B2A"
            strokeWidth="12"
          />
          {/* A Outer */}
          <path
            d="M 35 88 L 60 28 L 85 88"
            stroke="#0D1B2A"
            strokeWidth="12"
          />
          {/* M Inner V */}
          <path
            d="M 47.5 58 L 60 83 L 72.5 58"
            stroke="#E31E24"
            strokeWidth="12"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
