export interface IPlayerProps {
    poster: string;
    duration: number;
    link: string;
    controls: boolean;
    autoPlay: boolean;
    muted: boolean;
    status: 'locked' | 'unlocked';
}