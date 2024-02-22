import fs from 'fs';
import path from 'path';
import stripJsonComments from 'strip-json-comments';
import { getHighlighter } from 'shiki';

const THEMES_DIR = 'squirrelsong-master';

const lightTheme = JSON.parse(
	stripJsonComments(
		fs
			.readFileSync(
				path.join(
					THEMES_DIR,
					'light/VSCode/SquirrelsongLight/SquirrelsongLight.color-theme.json'
				)
			)
			.toString()
	)
);
const darkTheme = JSON.parse(
	stripJsonComments(
		fs
			.readFileSync(
				path.join(
					THEMES_DIR,
					'dark/VSCode/SquirrelsongDark/SquirrelsongDark.color-theme.json'
				)
			)
			.toString()
	)
);

export type CodeLang =
	| 'tsx'
	| 'markdown'
	| 'css'
	| 'html'
	| 'json'
	| 'php'
	| 'python';
export type CodeTheme = 'light' | 'dark';

const highlighter = await getHighlighter({
	themes: [lightTheme, darkTheme],
	langs: ['tsx', 'markdown', 'css', 'html', 'json', 'php', 'python'],
});

export function highlightCode(code: string, lang: CodeLang, theme: CodeTheme) {
	return highlighter.codeToHtml(code, {
		lang,
		theme: theme === 'light' ? 'Squirrelsong Light' : 'Squirrelsong Dark',
	});
}
