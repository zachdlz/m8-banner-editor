import { ARTISTS } from './artists';

const getInputs = (artistGroup: string) => {
  return ARTISTS.find((artist) => artist.group === artistGroup)?.inputs || [];
};

const inputExist = (artistGroup: string, inputId: string) => {
  return ARTISTS.find((artist) => artist.group === artistGroup)?.inputs.some(
    (input) => input.id === inputId,
  );
};

const firstUpperCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export { getInputs, inputExist, firstUpperCase };
