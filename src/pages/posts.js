import React, { useEffect, useState } from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout';
import axios from 'axios'

const Home = () => {
    // useEffect(() => {
    async function test() {
        var res = (await axios.get('https://api.stackexchange.com/2.2/users/1705829/comments?site=stackoverflow&filter=withbody')).data.items.slice(0, 3)
        console.log(2, res)
        // return res
        // let companyData = res.data.ad;

        // setData({ Company: companyData.company, Description: companyData.text })
        // setColorsData(res.data.data)
    }
    test()
    // }, [])
    return (
        <Layout>
            <div>
                <h1>Posts</h1>
                {/* <p>{Data.Description}</p> */}
                {/* <Colors data={colorsData} /> */}
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Posts Api" />

export default Home;