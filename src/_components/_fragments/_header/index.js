import { Button, Col, Image, Layout, Menu, Row } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import './style.css'
const HeaderComponent = () => {
  const { Header } = Layout;
  const logo = <Image preview={false} style={{ float: 'left' }} src={require('../../../assets/img/logo.png')}></Image>
  const navItem = [{ label: 'Inspiration', link: '/inspiration' }, { label: 'Our Store', link: '' }, { label: 'Magazine', link: '' }, { label: 'Solution', link: '' },
  { label: 'Become Pro', link: '' }, { label: '|', link: '' }, { label: 'Login', link: '' }]
  const [navbar, setNavbar] = useState(false)
  const navigate = useNavigate()
  const navigateTo = (url) => {
    navigate(url)
  }
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <Header style={{
      position: 'fixed',
      top: 0,
      zIndex: 1,
      width: '100%',
    }} className={navbar ? 'normal' : 'header-custom'}>
      <Row>
        <Col span={6}>
          <Link to='/'>
          <div style={{
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
          }}>{logo}</div></Link>
        </Col>
        <Col xs={0} lg={12}>
          <Menu
            style={navbar ? { backgroundColor: '#fff', color: '#000', float: 'right', width: '100%' } : { backgroundColor: 'transparent', color: 'white', float: 'right', width: '100%' }}
            mode="horizontal"
            defaultSelectedKeys={['-1']}
            items={navItem.map((data, index) => {
              return {
                key: index,
                label: data.label,
                onClick: () => { navigateTo(data.link) }
              }
            })}
          />
        </Col>
        <Col xs={8} lg={0}></Col>
        <Col span={6}>
          <Row>
            <Col xs={24} xl={20}>
              <Row>
                <Col style={{float: 'right'}} span={16}>
                  <Button className='pakty-btn-primary'>Design my project</Button>
                </Col>
                <Col xs={0} xl={8}>
                  <FeatherIcon
                    style={{
                      height: 31,
                      margin: '16px 24px 16px 24px',
                    }}
                    className={navbar ? '' : 'text-white'}
                    icon={'shopping-cart'}>

                  </FeatherIcon>
                </Col>
              </Row>
            </Col>
            <Col xs={0} xl={4}></Col>
          </Row>
        </Col>
      </Row>

    </Header>
  );
};
export default HeaderComponent;
