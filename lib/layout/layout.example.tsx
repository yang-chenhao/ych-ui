import React from 'react'
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

export default function () {
    return (
        <div>
            <div>
                <h1 style={{}}>第一个例子</h1>
                <Layout style={{ height: 500 }} className={'hi'}>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1 style={{}}>第二个例子</h1>
                <Layout style={{ height: 500 }} className={'hi'}>
                    <Header>Header</Header>
                    <Layout>
                        <Aside>Aside</Aside>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1 style={{}}>第三个例子</h1>
                <Layout style={{ height: 500 }} className={'hi'}>
                    <Header>Header</Header>
                    <Layout>
                        <Content>Content</Content>
                        <Aside>Aside</Aside>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1 style={{}}>第四个例子</h1>
                <Layout style={{ height: 500 }} className={'hi'}>
                    <Aside>Aside</Aside>
                    <Layout>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}