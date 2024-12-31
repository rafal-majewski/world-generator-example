export type SourceCodeMainContentCreator<Variables, SourceCodeMainContent extends string> = (
	variables: Variables,
) => SourceCodeMainContent;
