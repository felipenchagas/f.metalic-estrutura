import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#07090E',
        }}
      >
        <div
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF3333 0%, #CC0000 100%)',
            boxShadow: '0 0 30px rgba(230, 0, 0, 0.8), inset 0 8px 12px rgba(255, 255, 255, 0.5)',
            border: '6px solid #FFFFFF',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}