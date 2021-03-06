import { LocalVideoStats } from './local-video-stats.model';

/**
 * A list of `LocalVideoStats` objects, one per uid.
 */
export interface LocalVideoStatsMap {
  [uid: string]: LocalVideoStats;
}
