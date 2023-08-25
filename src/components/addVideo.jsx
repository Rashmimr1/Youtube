import '../styles/addVideo.css'
import dribble from '../images/dribble.png'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const AddVideo = () => {
    let navigate = useNavigate()

let thumbnail = useRef(null)
let title = useRef(null)
let channel = useRef(null)
let views = useRef(null)

let upload = (e) => {
    e.preventDefault()//  prevents the page from reloading.
    let data = {
        thumbnail:thumbnail.current.value,
        title:title.current.value,
        channel:channel.current.value,
        views:views.current.value
    }

    fetch('http://localhost:4000/videos',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    alert('video uploaded successfully')
    navigate('/')// navigating to different routes

}
    return (
        <div className="addVideo">
            <div className="content">
                <div className="cont1">
                    <img src={dribble} alt="" />
                </div>
                <div className="cont2">
                    <h1>Add Video</h1>
                    <div className="form">
                        <form action="" onSubmit={upload}>
                            <div className="field1">
                                
                                    <input ref={thumbnail} type="url" name="thumbnail" placeholder="enter thumbnail" />
                                
                            </div>
                            <div className="field2">
                               
                                    <br />
                                    <input ref={title} type="text" name='title' placeholder="enter title" />
                               
                            </div>
                            <br />
                            <div className="field3">

                                    <input ref={channel} type="text" name='channnel' placeholder="enter channel" />
                                
                            </div>
                            <br />
                            <div className="field4">
                              
                                    <input ref={views} type="text" name='views' placeholder="enter views" />
                                
                            </div>
                            <br />
                            <button id="btn1">Upload Video</button>
                        </form>
                    </div>
                    <br />
                    <br />
                   

                </div>
            </div>
        </div>
    )
}
export default AddVideo