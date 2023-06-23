import GraphQLLogo from '../../public/assets/graphql.webp';
import JavaLogo from '../../public/assets/java.webp';
import MongoDBLogo from '../../public/assets/mongodb.webp';
import MySQLLogo from '../../public/assets/mysql.webp';
import NodeJSLogo from '../../public/assets/nodejs.webp';
import ReactLogo from '../../public/assets/react.webp';
import SassLogo from '../../public/assets/sass.webp';

const LANGUAGES = {
  React: {
    logo: ReactLogo,
    link: 'https://reactjs.org',
  },
  NodeJS: {
    logo: NodeJSLogo,
    link: 'https://nodejs.org',
  },
  Sass: {
    logo: SassLogo,
    link: 'https://sass-lang.com',
  },
  MySQL: {
    logo: MySQLLogo,
    link: 'https://www.mysql.com',
  },
  Java: {
    logo: JavaLogo,
    link: 'https://www.java.com',
  },
  Python: {
    logo: JavaLogo,
    link: 'https://www.python.com',
  },
  GraphQL: {
    logo: GraphQLLogo,
    link: 'https://graphql.org',
  },
  MongoDB: {
    logo: MongoDBLogo,
    link: 'https://www.mongodb.com',
  },
};

export default LANGUAGES;
