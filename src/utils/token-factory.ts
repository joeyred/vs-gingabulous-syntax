interface Settings {
  fontStyle?: string,
  foreground?: string,
  background?: string
};

export function parseTokenSettings(syntaxVariable: any) {
  if (typeof syntaxVariable === 'string') {
    return {
      foreground: syntaxVariable
    };
  }
  if (typeof syntaxVariable === 'object') {
    const settings: Settings = {};
    const {
      style,
      color,
      background
    } = syntaxVariable;

    if (style) settings.fontStyle = style;
    if (color) settings.foreground = color;
    if (background) settings.background = background;

    return settings;
  }
}
