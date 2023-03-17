import { useState, useRef, useEffect } from 'hooks/hooks';
import ReactHlsPlayer from '@gumlet/react-hls-player';
import styles from './video.module.scss';
interface IPlayerProps {
  poster: string;
  duration: number;
  link: string;
  controls: boolean;
  autoPlay: boolean;
  muted: boolean;
}

const Player: React.FC<IPlayerProps> = ({
  poster,
  duration,
  link,
  autoPlay,
  controls,
  muted,

}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(duration);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const videoPlayer = videoRef.current as HTMLVideoElement;
      videoPlayer.play();
    }
  };
  const handleMouseLeave = () => {
    if (videoRef.current !== null) {
      const videoPlayer = videoRef.current as HTMLVideoElement;
      videoPlayer.pause();
    }
  };

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const handelSpeed = (e: any) => {
    if (e.code === 'KeyQ' && playbackRate <= 0.25) {
      setPlaybackRate(prev => prev + 0.25)
      console.log(`speed was increased to ${playbackRate}`)
    }
    if (e.code === 'KeyW' && playbackRate >= 0.5) {
      setPlaybackRate(prev => prev - 0.25)
      console.log(`speed was decrees to ${playbackRate}`)
    }
  }

  const handleProgress = () => {
    if (videoRef.current !== null) {
      const duration = videoRef.current.duration;
      const currentTime = videoRef.current.currentTime;
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
    }
  };
  return (
    <>
      <div className={styles['video-wrapper']}>
        <ReactHlsPlayer
          src={link}
          autoPlay={autoPlay}
          controls={controls}
          width="100%"
          height="100%"
          playerRef={videoRef}
          poster={poster + '/cover.webp'}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          muted={muted}
          className={styles['video']}
          onKeyDown={handelSpeed}

        />
      </div>

      <span className={styles['tooltip-text__up']}>to up speed press 'W' </span>
      <span className={styles['tooltip-text__down']}>to down speed press 'Q' </span>
    </>
  );
};

export { Player };
