import withSplitting from '../lib/hoc/withSplitting';

export const Home = withSplitting(()=>import('./_Home'));
export const About = withSplitting(()=>import('./_About'));
export const Exhibitors = withSplitting(()=>import('./_Exhibitors'));


