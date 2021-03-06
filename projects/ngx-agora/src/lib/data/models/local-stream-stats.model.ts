import { StreamStats } from './stream-stats.model';

/**
 * The connection statistics of the local stream.
 */
export interface LocalStreamStats extends StreamStats {
  /** Bytes of the sent audio. */
  audioSendBytes: string;
  /** Packets of the sent audio. */
  audioSendPackets: string;
  /**
   * Number of lost packets of the sent audio.
   *
   * @remark
   * Safari and Firefox do not support this property.
   */
  audioSendPacketsLost: string;
  /** Bytes of the sent video. */
  videoSendBytes: string;
  /** Frame rate of the sent video. */
  videoSendFrameRate: string;
  /** Packets of the sent video. */
  videoSendPackets: string;
  /** Number of lost packets of the sent video. */
  videoSendPacketsLost: string;
  /** Resolution height of the sent video. */
  videoSendResolutionHeight: string;
  /** Resolution width of the sent video. */
  videoSendResolutionWidth: string;
}
