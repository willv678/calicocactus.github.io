import React, { Fragment } from 'react';
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styles from '/styles/Home.module.css';
import TopBar from '/components/TopBar';

function Blog(props) {
    const {data, content} = matter(props.content);

    return (
        <Fragment>
            <TopBar />
            <div className={styles.blogPost}>
            
            <h1 className="header">{data.title}</h1>
            <h3>{data.description}</h3>
            
            <div className="container">
            
            <ReactMarkdown children={content} />
            </div>
        </div>
        </Fragment>

    );
}

export const getServerSideProps = async context => {

    const fs = require("fs");

    const {blog} = context.params;

    const content = fs.readFileSync(`${process.cwd()}/content/${blog}.md`, 'utf8')

    return {
        props: {
            content
        }
    };
}

export default Blog;