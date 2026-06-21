import { nightStyle } from '@/lib/night';
import { HERO_VIDEO_SRC, HERO_POSTER } from '@/lib/site';

/**
 * Full-viewport hero background. Prefers a web-optimized video loop, then a
 * still poster, then the color-aware night placeholder — so the hero always
 * renders something on-brand. The `.hero .scrim` overlay handles text contrast.
 */
export default function HeroBackground() {
  if (HERO_VIDEO_SRC) {
    return (
      <video
        className="bg"
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_POSTER || undefined}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
    );
  }

  if (HERO_POSTER) {
    return (
      <img className="bg" src={HERO_POSTER} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    );
  }

  return <div className="bg night" style={nightStyle({ glow: '42% 70%' })} />;
}
