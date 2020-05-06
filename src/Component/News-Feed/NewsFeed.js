import React, { useState, useEffect } from 'react'
import '../Css/NewsFeed.css'
import WhoToFollow from './WhoToFollow'
import CreatePost from './CreatePost'
import Tweets from './Tweets'
import SideBar from './SideBar'
import axios from 'axios'
import { token } from '../Config/Token'
import shortid from 'shortid'
import Loading from '../Extra/Loading'


function NewsFeed() {

    const [feeds, setfeeds] = useState([])
    const [search, setSearch] = useState('')

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://api.twitter.com/1.1/search/tweets.json?q=%23NewProfilePic &result_type=recent&count=200&include_rts=false'

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(proxyurl + url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            setfeeds(res.data.statuses)
        };
        getData()
    }, [])


    const filterFeed = feeds.filter(feed => {
        if (feed.extended_entities && !feed.text.startsWith('RT')) {
            return feed
        }
    })


    return (
        <section className="feeds_page">
            <SideBar />
            <div className="feeds-content">
                <CreatePost />
                <div className="posts">
                    {filterFeed.length === 0 ? <Loading /> : filterFeed.map(feed => <Tweets key={shortid.generate()} feed={feed} />)}
                </div>
                {<WhoToFollow />}
            </div>
        </section >
    )
}

export default NewsFeed
