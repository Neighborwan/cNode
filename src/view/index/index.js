import React, { Component } from "react";
import { Menu, Row, Col } from "antd";
import { Link } from 'react-router-dom';

import IndexList from './list';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    console.log(this.props);
    return (
      <Row  className="wrap">
        <Col md={6}>
          <Menu id="indexMenu">
            <Menu.Item>
              <Link to="/index/all">全部</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/good">精华</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/ask">问题</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/share">分享</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/job">招聘</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/dev">测试</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col md={18} className="index__List">
          <IndexList />
        </Col>
      </Row>
    );
  }
}

export default Index;