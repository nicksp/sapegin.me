import React from 'react';
import { Stack } from 'tamia';
import IconLink from './IconLink';
import { Social } from '../types';

type Props = {
	items: Social[];
};

export default function Socials({ items }: Props) {
	return (
		<Stack
			justifyContent="center"
			gridAutoFlow="column"
			gridColumnGap={['m', 'l']}
			gridRowGap="m"
		>
			{items.map(({ id, link, name }) => (
				<IconLink
					key={id}
					href={link}
					icon={id}
					title={name}
					aria-label={name}
				/>
			))}
		</Stack>
	);
}
