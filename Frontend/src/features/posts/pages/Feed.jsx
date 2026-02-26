import React from 'react'
import '../style/feed.scss'
const Feed = () => {
    return (
        <main className='feed-page'>
            <div className='feed'>
                <div className='posts'>
                    <div className="post">
                        <div className='user'>
                            <div className="img-wrapper">
                                <img src='https://images.unsplash.com/photo-1769635177236-116c95222fab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D' alt='' />
                            <p>Username</p>
                            </div>
                        </div>
                        <img src='https://images.unsplash.com/photo-1761839257349-037aea1d94de?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' alt='' />
                        <div className="bottom">
                            <p className="caption">caption caption</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Feed
