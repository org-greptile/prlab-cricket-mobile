/**
 * Product snapshot from cricket-live-gateway. Do not import protocol.
 *
 * @typedef {object} LastEvent
 * @property {string} display
 * @property {number} runs_added
 * @property {boolean} wicket_counted
 * @property {boolean} legal_delivery
 *
 * @typedef {object} ScoreSnapshot
 * @property {string} match_id
 * @property {number} runs
 * @property {number} wickets
 * @property {string} overs
 * @property {LastEvent} last_event
 */

export const SNAPSHOT_KEYS = ["match_id", "runs", "wickets", "overs", "last_event"];
