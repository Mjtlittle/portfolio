import React from 'react'

import Layout from '../components/Layout'
import SideNotch from '../components/SideNotch'
import Row from '../components/Row'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Home = () => {
  const { name, email } = useSiteMetadata()

  return (
    <Layout>
      <div>
        <Row>
          <SideNotch>today</SideNotch>
          <div style={{ flexGrow: 1 }}>test</div>{' '}
          <div>
            adaspidjaosijdoiasjdoiajsoidjaoisdjaoisdjoaisjdoiajsdoiajsodijaosidjaiosd
          </div>
        </Row>
      </div>
    </Layout>
  )
}

export default Home
