import {
	loadConfig,
	loadSourceFiles,
	generatePages,
	savePages,
	createMarkdownRenderer,
	createTemplateRenderer,
	helpers
} from 'sweet2';

let config = loadConfig('config');
let options = config.default;

let renderMarkdown = createMarkdownRenderer({
	customTags: {
		embed: ({ id, title }) => {
			return `
				<div class="embed">
					<div class="embed__content embed-${id}">
						<div class="embed-${id}-i" id="${id}"></div>
					</div>
					<div class="embed__description">${title}</div>
				</div>
			`;
		}
	}
});
let renderTemplate = createTemplateRenderer({
	root: options.templatesFolder
});

let documents = loadSourceFiles(options.sourceFolder, options.sourceTypes, {md: renderMarkdown});

let pages = generatePages(documents, config, helpers, {ect: renderTemplate});

savePages(pages, options.publicFolder);