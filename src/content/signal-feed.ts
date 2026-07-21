/**
 * Mocked incoming signal feed for /signal.
 * Rotates every 8s client-side.
 */

export type SignalEntry = {
  id: string;
  timestamp: string;
  source: string;
  message: string;
};

export const signalFeed: SignalEntry[] = [
  {
    id: "sig-001",
    timestamp: "T-08s",
    source: "recruiter.acme.corp",
    message: "open-role // ux-designer // interested?",
  },
  {
    id: "sig-002",
    timestamp: "T-21s",
    source: "ui-alumni.bsc",
    message: "ping.mahfuz — event collaboration?",
  },
  {
    id: "sig-003",
    timestamp: "T-47s",
    source: "boot.core",
    message: "diagnostic.complete // all systems green",
  },
  {
    id: "sig-004",
    timestamp: "T-1m02",
    source: "design-review.open",
    message: "EduLearn v2 awaiting critique",
  },
  {
    id: "sig-005",
    timestamp: "T-1m34",
    source: "fuse.integrity",
    message: "thermal nominal // no spikes detected",
  },
  {
    id: "sig-006",
    timestamp: "T-2m11",
    source: "external.ping",
    message: "github.com/mahfuz // new push to repo",
  },
];