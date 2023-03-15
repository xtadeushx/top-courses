import { useState, useRef } from 'hooks/hooks';

import styles from './video.module.scss'
interface IPlayerProps {
    poster: string
    duration: number
    link: string
    controls: boolean
    autoPlay: boolean
    muted: boolean
}


const Player: React.FC<IPlayerProps> = ({ poster, duration, link, autoPlay, controls, muted }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(duration);
    const videoRef = useRef<HTMLVideoElement>(null);


    const handleMouseEnter = () => {
        if (videoRef.current) {
            const videoPlayer = videoRef.current as HTMLVideoElement;
            videoPlayer.play();
        }
    }
    const handleMouseLeave = () => {
        if (videoRef.current !== null) {
            const videoPlayer = videoRef.current as HTMLVideoElement;
            videoPlayer.pause();
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
        <div className={styles['curse-info_video']}>
            <video className={styles.video}
                onTimeUpdate={handleProgress}
                ref={videoRef}
                width="100%"
                height="100%"
                disableRemotePlayback={false}
                controls={controls}
                autoPlay={autoPlay}
                poster={poster + '/cover.webp'}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                muted={muted}
            >
                <source src={link} type="video/mp4" />
            </video>
        </div>
    )
}

export { Player };