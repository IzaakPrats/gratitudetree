import { defaultPrompts } from "../data/prompts";

export const getRandomPrompt = () => {
  return defaultPrompts[Math.floor(Math.random() * defaultPrompts.length)];
};
