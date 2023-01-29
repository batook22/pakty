import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import HeaderComponent from './_components/_fragments/_header'
import FooterComponent from './_components/_fragments/_footer';
import MainRoute from './Router';

const { Content } = Layout;
const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Content className="site-layout">
          <Routes>
            <Route path='/*' element={<MainRoute />} />
          </Routes>
        </Content>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </Layout>
  );
};

export default App;