import { createElement, type ElementType } from 'react';
import { styled, type HTMLStyledProps } from '../../styled-system/jsx';

// React components generated by Panda doesn't have `as` prop
// This is exact copy of Panda's Box component but with the `as` prop

export type AsProp<C extends ElementType> = {
	as?: C;
};

export type BoxProps<C extends ElementType> = HTMLStyledProps<C> & AsProp<C>;

/**
 * Generic styled component factory.
 *
 * function Box({as, ...props}) {
 *   return createBox(as ?? 'div', props);
 * }
 */
export function createBox(
	// We don't use BoxProps here to suppress the "Expression produces
	// a union type that is too complex to represent" error
	{ as, ...props }: Record<string, any>,
	/** Default HTML element */
	defaultElement: ElementType = 'div',
	options: {
		shouldForwardProp?: (prop: string, variantKeys: string[]) => boolean;
	} = {}
) {
	return createElement(styled(as ?? defaultElement, {}, options), props);
}

/**
 * Generic container with responsive props to control whitespace, layout,
 * positioning and colors.
 */
export function Box<C extends ElementType>(props: BoxProps<C>) {
	return createBox(props);
}

// XXX: forwardRef kills the types so we readd them back
// https://stackoverflow.com/a/58473012/1973105
// export const Box = forwardRef(BoxRaw) as <C extends ElementType = 'div'>(
// 	props: BoxProps<C> & { ref?: Ref<C> }
// ) => ReactElement;