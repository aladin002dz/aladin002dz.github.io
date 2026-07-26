import { ImageResponse } from 'next/og';

export const alt = 'Mahfoudh Arous - Senior Software Engineer & Full-stack Developer';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: '80px',
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #31103f 100%)',
                    color: 'white',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    boxSizing: 'border-box',
                }}
            >
                {/* Glowing decorative ambient shapes */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-150px',
                        right: '-100px',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, rgba(0,0,0,0) 70%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-150px',
                        left: '-100px',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(0,0,0,0) 70%)',
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        zIndex: 10,
                    }}
                >
                    {/* Badge */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 24px',
                            borderRadius: '9999px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#fdba74',
                            fontSize: '22px',
                            fontWeight: 600,
                            alignSelf: 'flex-start',
                        }}
                    >
                        ⚡ Software Engineer Portfolio
                    </div>

                    {/* Name */}
                    <div
                        style={{
                            fontSize: '68px',
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            color: '#ffffff',
                            lineHeight: 1.1,
                        }}
                    >
                        Mahfoudh Arous
                    </div>

                    {/* Subtitle */}
                    <div
                        style={{
                            fontSize: '32px',
                            fontWeight: 500,
                            color: '#cbd5e1',
                            maxWidth: '900px',
                            lineHeight: 1.3,
                        }}
                    >
                        Senior Software Engineer & Full-stack Developer
                    </div>

                    {/* Tech Badges */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '14px',
                            marginTop: '16px',
                        }}
                    >
                        {['React', 'Next.js', 'TypeScript', 'Node.js', 'TailwindCSS'].map((tech) => (
                            <div
                                key={tech}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: '12px',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                    color: '#94a3b8',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
