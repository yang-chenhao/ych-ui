import React from 'react'
// import { Layout, Content, Header, Footer, Aside } from 'yui-react'
import './layout.example.scss'
import Layout, { Header, Content, Footer, Aside } from './layout';



export default function () {
    return (
        <div>
            <div style={{marginBottom: 40}}>
                <Layout>
                    <Header><div className='blockH'>header</div></Header>
                    <Content><div className='blockC'>content</div></Content>
                    <Footer><div className='blockF'>footer</div></Footer>
                </Layout>
            </div>
            <div style={{marginBottom: 40}}>
                <Layout>
                    <Header><div className='blockH'>header</div></Header>
                    <Layout>
                        <Aside><div className='blockA'>Aside</div></Aside>
                        <Content><div className='blockC'>content</div></Content>
                    </Layout>
                    <Footer><div className='blockF'>footer</div></Footer>
                </Layout>
            </div>
            <div style={{marginBottom: 40}}>
                <Layout>
                <Header><div className='blockH'>header</div></Header>
                    <Layout>
                        <Content><div className='blockC'>content</div></Content>
                        <Aside><div className='blockA'>Aside</div></Aside>
                    </Layout>
                    <Footer><div className='blockF'>footer</div></Footer>
                </Layout>
            </div>
            <div>
                <Layout>
                    <Aside><div className='blockA'>Aside</div></Aside>
                    <Layout>
                        <Header><div className='blockH'>header</div></Header>
                        <Content><div className='blockC'>content</div></Content>
                        <Footer><div className='blockF'>footer</div></Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
}