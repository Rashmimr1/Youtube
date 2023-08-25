import '../styles/videos.css'
import { useState, useEffect } from "react";


const Videos = () => {
   
    let[video,setVideo] = useState([])
    useEffect(() => {
            let fetchData = async () => {
                let response = await fetch('http://localhost:4000/videos')
                let data = await response.json()
                setVideo((data))
            }
            fetchData()
        })

        
    let [short, setShort] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/shorts')
            let data = await response.json()
            setShort((data))
        }
        fetchData()
    })
    // useEffect(() => {

    //         let fetchData = async () => {
    //             let response = await fetch('http://localhost:4000/youtube')
    //             let data = await response.json()
    //             setVideo(data.video)
    //             setShort(data.short)          
    //         }
    //         fetchData()
    //     })


   
    let removeVideo = (id,name) => {
        // let result = video.filter((x) => x.id !== id)s
        // setVideo(result)
        // alert(`${name} video got removed`)

        fetch(`http://localhost:4000/videos/${id}`,{
            method:'DELETE'
        })
        alert(`${name} video got removed`)
    }
    return (
        <div className="videos">
            <h1>Featured Videos</h1>
            <div className="videoData">
                {video.map((data) => {
                    return (

                        <div className="video">
                            <img src={data.thumbnail} alt="" />
                            <div className="videoDetails">
                                <h3>{data.title}</h3>
                                <p>{data.channel}</p>
                                <p>{data.views}</p>
                                <a onClick={() => removeVideo(data.id, data.channel)}>Remove</a>
                            </div>
                        </div>
                    );
                })}
            </div>
            <h1>Featured Shorts</h1>
            <div className="shortsData">
                {short.map((data) => {
                    return (
                        <div className="short">
                            <img src={data.thumbnail} alt="" />
                            <div className="shortsDetails">
                                <h3>{data.title}</h3>
                                <p>{data.channel}</p>
                                <p>{data.views}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Videos;


