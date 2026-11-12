/**
 * Photos from Gabriel's own work, in /public/images/behind. Native size, no upscaling.
 * Captions only name what the picture itself shows (a credential, a poster, a logo); people are not named.
 * b02 was taken in a mirror and has been flipped back so the text reads correctly.
 */
export type BehindPhoto = { file: string; w: number; h: number; alt: string; caption: string };

export const behind: BehindPhoto[] = [
  { file: "b02", w: 640, h: 640, caption: "The Penguin premiere, New York", alt: "A press credential for The Penguin premiere in New York, hanging from an HBO lanyard, next to a clip-on microphone." },
  { file: "b01", w: 360, h: 640, caption: "Panel at an event", alt: "Two people on a panel stage with microphones, sitting on a black sofa over a yellow carpet." },
  { file: "b08", w: 360, h: 640, caption: "CCXP", alt: "A man in a blue shirt holding a CCXP microphone on stage, with a crowd on a big screen behind him." },
  { file: "b05", w: 640, h: 567, caption: "Interview set, O Cavaleiro dos Sete Reinos", alt: "An interview set with a poster of O Cavaleiro dos Sete Reinos, two guests sitting together and a crew member at a desk behind them." },
  { file: "b07", w: 360, h: 640, caption: "Photo shoot for Stake", alt: "A man in a blue football shirt with the Stake logo sitting for a photo shoot, with a camera on a tripod in front of him." },
  { file: "b06", w: 501, h: 640, caption: "Training in a fighting cage", alt: "Two men training inside a fighting cage, one of them wearing boxing pads, in front of a large mural." },
  { file: "b09", w: 480, h: 640, caption: "Red carpet interviews", alt: "A man in a green suit being interviewed on a red carpet by several reporters, one microphone marked Reuters." },
  { file: "b03", w: 360, h: 640, caption: "Backstage at a TV studio", alt: "Three women posing together for a photo in a TV studio with purple screens, with the photographer's shoulder in the foreground." },
  { file: "b10", w: 480, h: 640, caption: "Between interviews on set", alt: "A man in a blue shirt sitting in a white armchair on an interview set, holding a notebook." },
  { file: "b04", w: 360, h: 640, caption: "At an event", alt: "A man with long hair, a beard and sunglasses, in a yellow striped shirt, at an event decorated in yellow." },
];
