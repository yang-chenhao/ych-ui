import React from 'react'
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';

export default function () {
    return (
        <div>
            <div>
                <h1 style={{}}>第一个例子</h1>
                <Layout style={{height: 500}} className={'hi'}>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        </div>
    )
}