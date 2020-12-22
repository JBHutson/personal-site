import React from 'react';

import withRouter from 'react-router-dom/withRouter';

import ReactMarkdown from 'markdown-to-jsx';

import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Header from './Header';
import SubHeader from './SubHeader';

    const styles = (theme) => ({
        listItem: {
          marginTop: theme.spacing(1),
        },
      });

    const options = {
        overrides: {
          h1: {
            component: Typography,
            props: {
              gutterBottom: true,
              variant: 'h4',
            },
          },
          h2: { component: Typography, props: { gutterBottom: true, variant: 'h5' } },
          h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
          h4: {
            component: Typography,
            props: { gutterBottom: true, variant: 'caption', paragraph: true },
          },
          p: { component: Typography, props: { paragraph: true } },
          a: { component: Link },
          li: {
            component: withStyles(styles)(({ classes, ...props }) => (
              <li className={classes.listItem}>
                <Typography component="span" {...props} />
              </li>
            )),
          },
        },
      };

      export default function Markdown(props) {
        return <ReactMarkdown options={options} {...props} />;
      }