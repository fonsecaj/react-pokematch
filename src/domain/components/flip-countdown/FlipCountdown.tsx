import { MAX_USER_FLIP_COUNT } from '@domain/constants';
import { useStore } from '@domain/hooks/useStore';
import ProgressBar from '@ui/progress-bar/ProgressBar';

export default function FlipCountdown() {
  const leftFlips = useStore.use.leftFlips();
  const maxFlips = MAX_USER_FLIP_COUNT;

  return (
    <ProgressBar value={leftFlips} max={maxFlips} />
  );
}
