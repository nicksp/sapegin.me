import {
	BookLink,
	Box,
	Expander,
	Grid,
	Heading,
	Hola,
	Image,
	Link,
	LinkWithIcon,
	PostList,
	ResourceList,
	Stack,
	Text,
} from '../components';
import type { Post } from '../types/Post';
import type { Resource } from '../types/Resource';
import { Page } from './Page';

type Props = {
	url: string;
	blogPosts: Post[];
	tilPosts: Post[];
	books: Resource[];
	writing: Resource[];
	projects: Resource[];
};

function Intro() {
	return (
		<Stack as="section" gap="m">
			<Stack gap="m">
				<Hola>Hey, I’m Artem!</Hola>
				<Text variant="intro">
					<LinkWithIcon icon="mail" href="mailto:artem@sapegin.ru">
						Write me
					</LinkWithIcon>
					,{' '}
					<LinkWithIcon icon="comment" href="https://github.com/sapegin/ama">
						ask me anything
					</LinkWithIcon>
					,
					<br />
					follow me on{' '}
					<LinkWithIcon icon="twitter" href="https://twitter.com/iamsapegin">
						Twitter
					</LinkWithIcon>
					,{' '}
					<LinkWithIcon
						icon="mastodon"
						href="https://mastodon.cloud/@sapegin"
						rel="me"
					>
						Mastodon
					</LinkWithIcon>
					,{' '}
					<LinkWithIcon icon="github" href="https://github.com/sapegin">
						GitHub
					</LinkWithIcon>
					, or{' '}
					<LinkWithIcon icon="devto" href="https://dev.to/sapegin">
						Dev.to
					</LinkWithIcon>
					,<br />
					or keep reading about me:
				</Text>
			</Stack>
		</Stack>
	);
}

function Writing({
	books,
	writing,
	blogPosts,
	tilPosts,
}: Pick<Props, 'books' | 'writing' | 'blogPosts' | 'tilPosts'>) {
	return (
		<Stack as="section" gap="m">
			<Heading level={2}>I write about frontend development</Heading>
			<Stack gap="l">
				<Stack gap="m">
					<Heading level={3}>My books</Heading>
					<Grid as="ul" gap="l" auto="wide">
						{books.map((book) => (
							<Box as="li" key={book.url}>
								<BookLink book={book} />
							</Box>
						))}
					</Grid>
				</Stack>
				<Stack gap="m">
					<Heading level={3}>Recent blog posts</Heading>
					<PostList posts={blogPosts} showDates />
				</Stack>
				<Stack gap="m">
					<Heading level={3}>Today I learned</Heading>
					<PostList posts={tilPosts} showDates />
				</Stack>
				<Stack gap="m">
					<Heading level={3}>Some more writing</Heading>
					<PostList posts={writing} showDescriptions />
				</Stack>
			</Stack>
			<Text>
				Sometimes, I also <Link href="/speaking/">speak on conferences</Link>.
			</Text>
		</Stack>
	);
}

function Projects({ projects }: Pick<Props, 'projects'>) {
	return (
		<Stack as="section" gap="m">
			<Heading level={2}>I do things sometimes</Heading>
			<Stack gap="l">
				<ResourceList items={projects} />
			</Stack>
			<Text>
				See many more projects on{' '}
				<Link href="https://github.com/sapegin">GitHub</Link>.
			</Text>
		</Stack>
	);
}

function Photography() {
	return (
		<Stack as="section" gap="m">
			<Heading level={2}>I make photos of trees, buildings, and things</Heading>
			<Expander>
				<Image
					src="/images/photos-1.jpg"
					alt="Saxon Switzerland forest, Germany"
					width={900}
					height={505}
				/>
			</Expander>
			<Expander>
				<Grid gap="m" auto="narrow">
					<Image
						src="/images/photos-2.jpg"
						alt="Dawn in Berlin, Germany"
						width={600}
						height={750}
					/>
					<Box display={{ base: 'none', tablet: 'block' }}>
						<Image
							src="/images/photos-3.jpg"
							alt="Foggy Berliner Dom, Germany"
							width={600}
							height={750}
						/>
					</Box>
					<Image
						src="/images/photos-4.jpg"
						alt="Sunrise in Rome, Italy"
						width={600}
						height={750}
					/>
				</Grid>
			</Expander>
			<Text>
				See{' '}
				<Link href="/photos/">more of my photos and my photography zine</Link>.
			</Text>
		</Stack>
	);
}

function Coffee() {
	return (
		<Stack as="section" gap="m">
			<Heading level={2}>I drink lots of coffee</Heading>
			<Expander>
				<Grid gap="m" auto="narrow">
					<Box display={{ base: 'none', tablet: 'block' }}>
						<Image
							src="/images/coffee-1.jpg"
							alt="Coffee"
							width={600}
							height={750}
						/>
					</Box>
					<Image
						src="/images/coffee-2.jpg"
						alt="Coffee"
						width={600}
						height={750}
					/>
					<Image
						src="/images/coffee-3.jpg"
						alt="Coffee"
						width={600}
						height={750}
					/>
				</Grid>
			</Expander>
			<Text>
				No milk, no sugar, preferrably filter.{' '}
				<del>Dark and bitter, like life.</del> Check out my pour over{' '}
				<Link href="https://coffee.morning.photos/">coffee timer</Link>.
			</Text>
		</Stack>
	);
}

function Cooking() {
	return (
		<Stack as="section" gap="m">
			<Heading level={2}>I learn how to cook great food</Heading>
			<Expander>
				<Grid gap="m" auto="narrow">
					<Link href="https://tacohuaco.co/recipes/tres-leches-cake/">
						<Image
							src="/images/food-1.jpg"
							alt="Tres leches cake"
							width={600}
							height={450}
						/>
					</Link>
					<Box display={{ base: 'none', tablet: 'block' }}>
						<Link href="https://tacohuaco.co/recipes/svekolnik/">
							<Image
								src="/images/food-2.jpg"
								alt="Svekolnik (cold borscht)"
								width={600}
								height={450}
							/>
						</Link>
					</Box>
					<Link href="https://tacohuaco.co/recipes/cottage-cheesecake/">
						<Image
							src="/images/food-3.jpg"
							alt="Cottage cheesecake"
							width={600}
							height={450}
						/>
					</Link>
				</Grid>
			</Expander>
			<Text>
				My favorite cuisines to cook are Russian, Mexican, Korean, and Italian.
				And my girlfriend and I are{' '}
				<Link href="https://tacohuaco.co/">collecting recipes</Link>.
			</Text>
		</Stack>
	);
}

function Me() {
	return (
		<Stack as="section" gap="m">
			<Heading level={2}>I may (or may not) look like this</Heading>
			<Expander>
				<Grid gap="m" auto="narrow">
					<Image
						src="/images/me-1.jpg"
						alt="Artem Sapegin is making a photo"
						width={700}
						height={700}
					/>
					<Box display={{ base: 'none', tablet: 'block' }}>
						<Image
							src="/images/me-2.jpg"
							alt="Artem Sapegin is drinking coffee"
							width={700}
							height={700}
						/>
					</Box>
					<Image
						src="/images/me-3.jpg"
						alt="Artem Sapegin is making a photo"
						width={700}
						height={700}
					/>
				</Grid>
			</Expander>
		</Stack>
	);
}

function Leather() {
	return (
		<Stack as="section" gap="m">
			<Heading level={2}>I make things from leather</Heading>
			<Expander>
				<Image
					src="/images/leathercraft.jpg"
					alt="Leather goods I have made"
					width={1512}
					height={1008}
				/>
			</Expander>
			<Text>
				Check out my digital leather patterns{' '}
				<Link href="https://klatzleathergoods.etsy.com/">on Etsy</Link>.
			</Text>
		</Stack>
	);
}

function BestViewed() {
	return (
		<Stack as="section" gap="s" textAlign="center">
			<Text>This page is best viewed in:</Text>
			<Box
				as="img"
				src="/images/netscape.gif"
				alt="Netscape Navigator"
				title="Netscape Navigator"
				mx="auto"
				width={60}
				height={60}
			/>
		</Stack>
	);
}

export function MainPage({
	url,
	blogPosts,
	tilPosts,
	books,
	writing,
	projects,
}: Props) {
	return (
		<Page url={url}>
			<Intro />
			<Writing
				books={books}
				writing={writing}
				blogPosts={blogPosts}
				tilPosts={tilPosts}
			/>
			<Projects projects={projects} />
			<Photography />
			<Cooking />
			<Leather />
			<Coffee />
			<Me />
			<BestViewed />
		</Page>
	);
}
