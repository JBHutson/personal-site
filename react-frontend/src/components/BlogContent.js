import React from 'react';
import { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import withRouter from 'react-router-dom/withRouter';
import DateTime from 'luxon/src/datetime';
import axios from 'axios';
import Header from './Header';

function BlogContent() {
    const [articles, setArticles] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/articles')
        .then(res => {
            setArticles(res.data)
        })
    }, [false])

    return (
        <React.Fragment>
            <Header header={'Blog'} subtitle={'Articles about various topics related to the tech industry'}/>
            {articles ? articles.map(article => <Link component={RouterLink} to={"/blog/" + article.slug} >{article.title}, {DateTime.fromMillis(article.publish_date.$date).toLocaleString(DateTime.DATE_FULL)}</Link>): <p>loading...</p>}
        </React.Fragment>
    );
}


export default withRouter(BlogContent);