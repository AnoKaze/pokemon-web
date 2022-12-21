const imageBaseUrl = `${import.meta.env.VITE_BASE_URL}/image`;

export function getTypeIcon(type: string, style?: string) {
  style = style ?? 'base';
  return `${imageBaseUrl}/type/${style}/${type}.png`;
}

export function getPokemonIcon(formId: string) {
  return `${imageBaseUrl}/pokemon/${formId}.png`;
}
