import React from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GenericCard from '../../Base/GenericCard'

const projectQuery = 
gql`query { 
  user(login: "rmarks6767") {
    pinnedItems(first:6) {
      nodes {
        ... on Repository {
            name
            description
            url
            createdAt
            languages(first: 10) {
              nodes {
                color
                name
              }
            }
            labels(first: 10) {
              nodes {
                color
                description
              }
            }
          }
        }
      }
    }
  }`

const classes = () => makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      projects: [],
      client: new ApolloClient({
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
        uri: 'https://api.github.com/graphql'
      }),
    };
  }

  componentDidMount() {
    this.state.client
      .query({
        query: projectQuery,
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            projects: result.data.user.pinnedItems.nodes
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, projects } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Grid container className={classes.root} spacing={3}>
          {
            projects.map(project => {
              return (
                <Grid item xs={100}>
                  <GenericCard m={4} name={project.name.replace(/-/g, ' ')} content={project.description} link={project.url} linkLabel='Repo Link'/>
                </Grid>
              )
            })
          }
        </Grid>
      );
    }
  }
}

export default Projects;
