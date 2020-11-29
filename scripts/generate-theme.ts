import { join } from 'path';
import { writeThemeFile } from '../src/utils/files';
import { generateTheme } from '../src/utils/generateTheme';

const THEME_PATH = join(__dirname, '..', 'themes', 'Gingabulous.json');

writeThemeFile(THEME_PATH, generateTheme());