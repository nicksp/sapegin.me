import { visit } from 'unist-util-visit';
import type { Root, Text, HTML } from 'mdast';
import richtypo from 'richtypo';
import rules from 'richtypo-rules-en';

/*
 * Enhance typography.
 *
 * Probably not idea, since it's going to miss things around links or em/strong, but shoud also has fewer issues.
 *
 * I liked many things about open source, and it was a bit sad to loose them. Luckily, around the same time I found a new hobby that turned out to be a great, and much more healthy, replacement for open source -- leathercraft.
 * ->
 * I&nbsp;liked many things about open source, and&nbsp;it&nbsp;was a&nbsp;bit sad to&nbsp;loose them. Luckily, around the&nbsp;same time I&nbsp;found a&nbsp;new hobby that turned out to&nbsp;be&nbsp;a&nbsp;great, and&nbsp;much more healthy, replacement for&nbsp;open <nobr>source&#x202f;—</nobr>&#x202f;leathercraft.
 */
export default function remarkRichtypo() {
	return (tree: Root) =>
		visit(tree, 'text', (node: Text | HTML) => {
			node.value = richtypo(rules, node.value);

			if (node.value.includes('<') || node.value.includes('&#')) {
				node.type = 'html';
			}
		});
}