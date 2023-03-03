import React, { Fragment } from 'react';
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styles from '/styles/Home.module.css';
import TopBar from '/components/TopBar';
import fs from "fs";
import path from "path";

function Blog({data, content}) {

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

export async function getStaticPaths() {
    const files = fs.readdirSync("content");
    const paths = files.map(filename => ({
        params: {
            blog: filename.replace(".md", "")
        }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const { blog } = params;
    const filePath = path.join(process.cwd(), "content", `${blog}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        props: {
            data,
            content
        }
    };
}

export default Blog;
