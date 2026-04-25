import useSound from "use-sound";
import soundEffects from "../assets/sound-effects/sound-effects_index";

type SoundType = 'clickable' | 'tag' | 'click' | 'nav-button' | 'card' | `button`;

const usePlaySound = () => {
  const [playClickable] = useSound(soundEffects.onImageEnter);
  const [playTag] = useSound(soundEffects.onTagEnter);
  const [playClick] = useSound(soundEffects.onClick);
  const [playNavButton] = useSound(soundEffects.onNavButtonEnter);
  const [playCard] = useSound(soundEffects.onCardEnter);

  const playByType = (soundType: SoundType) => {

    const soundMap = {
      clickable: playClickable,
      tag: playTag,
      click: playClick,
      'nav-button': playNavButton,
      card: playCard,
    }

    const play = soundMap[soundType];
    play();
  };
  return {playByType};
}
export default usePlaySound;