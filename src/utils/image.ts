const baseURL = import.meta.env.VITE_BASE_URL;

export function getTypeIcon(type: string, style?: string) {
  style = style ?? 'base';
  return `${baseURL}/image/type/${style}/${type}.png`;
}
