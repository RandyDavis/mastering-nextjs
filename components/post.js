import {MDXProvider} from '@mdx-js/tag';
import React from 'react';
import styled from 'styled-components';

import {column} from '../styles/mixins';
import {spacing} from '../styles/vars';

import A from './elements/a';
import Blockquote from './elements/blockquote';
import Code from './elements/code';
import Em from './elements/em';
import Footer from './footer';
import H1 from './elements/h1';
import H2 from './elements/h2';
import H3 from './elements/h3';
import Img from './elements/img';
import Li from './elements/li';
import Nav from './Nav';
import Ol from './elements/ol';
import Page from './page';
import Strong from './elements/strong';
import Ul from './elements/ul';
import CourseBlock from './CourseBlock';

const components = {
    a: A,
    blockquote: Blockquote,
    em: Em,
    h1: H1,
    h2: H2,
    h3: H3,
    img: Img,
    li: Li,
    ol: Ol,
    pre: Code,
    strong: Strong,
    ul: Ul
};

const Main = styled.main`
    ${column}
    padding: ${spacing.normal};
    
    @media (min-width: 768px) {
        font-size: 18px;
    }
`;

const Post = ({children, meta}) => (
    <Page date={meta.date} description={meta.description} image={meta.image} title={meta.title}>
        <Nav />
        <Main>
            <MDXProvider components={components}>
                <article>{children}</article>
            </MDXProvider>
            <hr />
            <CourseBlock />
        </Main>
        <Footer />
    </Page>
);

export default Post;
