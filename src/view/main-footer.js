import React, { Component } from 'react';
import { Layout } from 'antd';

class MainFooter extends Component {
  state = {  }
  render() {
    return (
      <Layout.Footer style={{ textAlign: 'center' }}>
        陈小帅所有 其实不是他所有的 hhh
      </Layout.Footer>
    );
  }
}

export default MainFooter;