import { useState, useRef, useEffect } from 'hooks/hooks';
import ReactHlsPlayer from '@gumlet/react-hls-player';
import styles from './video.module.scss';
const BROKEN_IMG_PATH = 'https://i.postimg.cc/RZvT9tdr/guerrillabuzz-crypto-pr-Wtol-M5hsj14-unsplash.jpg'
interface IPlayerProps {
  poster: string;
  duration: number;
  link: string;
  controls: boolean;
  autoPlay: boolean;
  muted: boolean;
  status: 'locked' | 'unlocked';
}

const Player: React.FC<IPlayerProps> = ({
  poster,
  duration,
  link,
  autoPlay,
  controls,
  muted,
  status
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(duration);
  const [playbackRate, setPlaybackRate] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate, progress]);

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

  const handelSpeed = (e: any) => {
    if (e.code === 'KeyW' && playbackRate >= 0.5) {
      setPlaybackRate(prev => prev - 0.25)
    } else
      if (e.code === 'KeyQ' && playbackRate < 2.25) {
        setPlaybackRate(prev => prev + 0.25)
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

  const imageOnError = () => {
    if (videoRef.current !== null) {
      const videoPlayer = videoRef.current as HTMLVideoElement;
      videoPlayer.poster = BROKEN_IMG_PATH;
    }
  };
  return (
    <>
      <ReactHlsPlayer
        src={link}
        autoPlay={autoPlay && status === 'unlocked'}
        controls={controls && status === 'unlocked'}
        onKeyUpCapture={handelSpeed}
        width="100%"
        height="100%"
        playerRef={videoRef}
        poster={poster}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        muted={muted}
        className={styles['video']}
        onError={imageOnError}
        onLoad={() => console.log('video has already been loaded')}
      />
    </>
  );
};

export { Player };
