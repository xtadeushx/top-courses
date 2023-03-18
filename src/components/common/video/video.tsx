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
    if (e.code === 'KeyW' && playbackRate >= 0.5) {
      setPlaybackRate(prev => prev - 0.25)
      console.log(`speed was decrees to ${playbackRate}`)
    } else
      if (e.code === 'KeyQ' && playbackRate < 2.25) {
        setPlaybackRate(prev => prev + 0.25)
        console.log(`speed was increase to ${playbackRate}`)
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
      <ReactHlsPlayer
        src={link}
        autoPlay={autoPlay}
        controls={controls}
        onKeyUpCapture={handelSpeed}
        width="100%"
        height="100%"
        playerRef={videoRef}
        poster={poster + '/cover.webp'}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        muted={muted}
        className={styles['video']}
      />



    </>
  );
};

export { Player };
