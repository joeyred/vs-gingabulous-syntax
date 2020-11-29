interface RGBA {
  red: number,
  green: number,
  blue: number,
  alpha?: number
};

interface HSLA {
  hue: number,
  saturation: number,
  lightness: number,
  alpha?: number
}

const RGBAToHexA = ({red, green, blue, alpha}: RGBA) => {
  let redHex = red.toString(16);
  let greenHex = green.toString(16);
  let blueHex = blue.toString(16);
  let alphaHex;

  if (redHex.length === 1) redHex = `0${redHex}`;
  if (greenHex.length === 1) greenHex = `0${greenHex}`;
  if (blueHex.length === 1) blueHex = `0${blueHex}`;

  if (alpha) {
    alphaHex = Math.round(alpha * 255).toString(16);
    
    if (alphaHex.length === 1) alphaHex = `0${alphaHex}`;

    return `#${redHex}${greenHex}${blueHex}${alphaHex}`;
  }
  
  return `#${redHex}${greenHex}${blueHex}`;
}

const hexAtoRGBA = (hex: string) => {
  let red: number | string = 0;
  let green: number | string = 0;
  let blue: number | string = 0;
  let alpha: any = 1;

  // If 3 or 4 digit Hex, , handle red, green, and blue
  if (hex.length === 4 || hex.length === 5) {
    red = `0x${hex[1]}${hex[1]}`;
    green = `0x${hex[2]}${hex[2]}`;
    blue = `0x${hex[3]}${hex[3]}`;
  }

  // If 4 digits, handle alpha (HexA)
  if (hex.length === 5) {
    alpha = `0x${hex[4]}${hex[4]}`;
  }

  // If 6 or 9 digit Hex, handle red, green, and blue
  if (hex.length === 7 || hex.length === 9) {
    red = `0x${hex[1]}${hex[2]}`;
    green = `0x${hex[3]}${hex[4]}`;
    blue = `0x${hex[5]}${hex[6]}`;
  }

  // If 9 digits, handle alpha (HexA)
  if (hex.length === 9) {
    alpha = `0x${hex[7]}${hex[8]}`;
  }
  const rgba: RGBA = {
    red: +red,
    green: +green,
    blue: +blue
  };
  
  
  if (hex.length === 4 || hex.length === 9) {
    rgba.alpha = +(alpha / 255).toFixed(3);
  } 

  return rgba;
}

const RGBAtoHSLA = ({red, green, blue, alpha}: RGBA) => {
  // console.log('<>===== RGBA to HSLA Start =====<>')
  // Make r, g, and b fractions of 1
  red /= 255;
  green /= 255;
  blue /= 255;
  // console.log(red, green, blue);
  const channelMin = Math.min(red, green, blue);
  const channelMax = Math.max(red, green, blue);
  const delta = channelMax - channelMin; 
  // console.log(channelMin, channelMax, delta);
  let hue = 0;
  let saturation = 0;
  let lightness = 0;

  // Calculate the Hue
  if (delta === 0) hue = 0;
  else if (channelMax === red) hue = ((green - blue) / delta) % 6;
  else if (channelMax === green) hue = (blue - red) / delta + 2;
  else hue = (red - green) / delta + 4;
  // console.log('hue: before rounding', hue);
  hue = Math.round(hue * 60);
  // console.log('hue: after rounding', hue);

  // Handle negative values and convert to degrees (360)
  if (hue < 0) hue += 360;
  // console.log('hue: after negative value handling', hue);
  // Calculate lightness
  lightness = (channelMax + channelMin) / 2;

  // Calculate saturation
  saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

  // Multiply lightness and satutation by 100
  const hsla: HSLA = {
    hue,
    saturation: +(saturation * 100).toFixed(1),
    lightness: +(lightness * 100).toFixed(1)
  };
  // console.log('hsla:', hsla);
 
  if (alpha) hsla.alpha = alpha;

  return hsla;
}

const HSLAtoRGBA = ({hue, saturation, lightness, alpha}: HSLA) => {
  saturation /= 100;
  lightness /= 100;

  let chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  let x = chroma * (1 - Math.abs((hue / 60) % 2 - 1));
  let m = lightness - chroma / 2;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (0 <= hue && hue < 60) {
    red = chroma;
    green = x;
    // blue = 0;
  } else if (60 <= hue && hue < 120) {
    red = x;
    green = chroma;
    // blue = 0;
  } else if (120 <= hue && hue < 180) {
    // red = 0;
    green = chroma;
    blue = x;
  } else if (180 <= hue && hue < 240) {
    // red = 0;
    green = x;
    blue = chroma;
  } else if (240 <= hue && hue < 300) {
    red = x;
    // green = 0;
    blue = chroma;
  } else if (300 <= hue && hue < 360) {
    red = chroma;
    // green = 0;
    blue = x;
  }

  const rgba: RGBA = {
    red: Math.round((red + m) * 255),
    green: Math.round((green + m) * 255),
    blue: Math.round((blue + m) * 255)
  };

  if (alpha) rgba.alpha = alpha;

  return rgba;
}

const adjustHue = (hue: number, adjustment: number) => {
  let output = hue + adjustment;
  if (output < 0) output += 360;
  if (output > 360) output -= 360;
  return output;
}

const getDegreeArray = (numberOfDegreeValues: number) => {
  const interval = 15;
  const output = [];
  let oddOrEven = 0;
  let oddInterval = 0;
  let evenInterval = 0;
  
  for (let i = 0; i < numberOfDegreeValues; i++) {
    oddOrEven++
    // Odd
    if (oddOrEven === 1) {
      oddInterval -= interval;
      output.push(oddInterval);
    }
    // Even
    if (oddOrEven === 2) {
      evenInterval += interval;
      output.push(evenInterval);

      oddOrEven = 0;
    }
  }

  return output;
}

export default function buildColorsFromBase(color: string, children: any) {
  const colorObject: any = {
    base: color
  };
  console.log(color);
  
  const baseRGB = hexAtoRGBA(color);
  // console.log('baseRGB', baseRGB);
  const baseHSL = RGBAtoHSLA(hexAtoRGBA(color));
  console.log(RGBAToHexA(HSLAtoRGBA(baseHSL)));
  console.log('baseHSL:', baseHSL);
  const colorHarmony = getDegreeArray(children.length);
  console.log(colorHarmony);

  for (let i = 0; i < children.length; i++) {
    // console.log(baseHSL.hue);
    let childColorHSL: HSLA = {
      hue: adjustHue(baseHSL.hue, colorHarmony[i]),
      saturation: baseHSL.saturation,
      lightness: baseHSL.lightness
    };
    console.log('child HSL:', childColorHSL);
    colorObject[children[i]] = RGBAToHexA(HSLAtoRGBA(childColorHSL));
  }
  return colorObject;
}