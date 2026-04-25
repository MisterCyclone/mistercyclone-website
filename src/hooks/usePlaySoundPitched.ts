import useSound from "use-sound";
import soundEffects from "../assets/sound-effects/sound-effects_index";

type SoundType = 'clickable' | 'tag' | 'click' | 'nav-button' | 'card' | `button`;

const usePlaySoundPitched = () => {
  const [playClickable] = useSound(soundEffects.onImageEnter);
  const [playTag] = useSound(soundEffects.onTagEnter);
  const [playClick] = useSound(soundEffects.onClick);
  const [playNavButton] = useSound(soundEffects.onNavButtonEnter);
  const [playCard] = useSound(soundEffects.onCardEnter);

  const soundMap = {
    clickable: playClickable,
    tag: playTag,
    click: playClick,
    'nav-button': playNavButton,
    card: playCard,
  }

  const playPitchByType = (soundType: SoundType) => {
    const randomPitch = Math.random() * (1.1 - 0.9) + 0.9;

    const play = soundMap[soundType];
    play({ playbackRate: Number(randomPitch.toFixed(1)) });
  };

  return { playPitchByType };
};

export default usePlaySoundPitched;