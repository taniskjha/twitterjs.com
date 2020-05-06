import React, { useEffect, useState } from "react"
import axios from 'axios'
import { token } from '../Config/Token'
import Tweets from './Tweets'
import shortid from 'shortid';


function GetFeed() {
    const [feeds, setfeeds] = useState({})

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://api.twitter.com/1.1/search/tweets.json?q=javascript&result_type=recent&count=5'

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(proxyurl + url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            setfeeds(res.data)
        };
        getData()
    }, [])

    console.log(feeds)

    return (
        <div>
            {feeds.map(feed => <Tweets key={shortid.generate()} feed={feed} />)}
        </div>
    )
}

export default GetFeed
