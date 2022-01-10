import React from 'react'
import "./intro.css"
import Me from '../../image/me.png'

function Intro() {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello My Name is</h2>
                    <h1 className='i-name'>Suraj Kumar</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>UI/Ux Designer</div>
                            <div className='i-title-item'>Photographer</div>
                            <div className='i-title-item'>Script Writer</div>
                            <div className='i-title-item'>Content Creator</div>
                        </div>
                    </div>
                     <p className="i-desc">
                            I'm an Aspiring full-stack developer with a specialization in MERN stack with a passion for learning with an endless supply of optimism and curiosity. 
                        </p>
                </div>
                {/* <button className='i-scroll'>Svg</button> */}
            </div>

            <div className='i-right'>
               <div className="i-bg"></div>
                <img src={Me} alt="" className='i-img' />
             </div>
        </div>
    )
}

export default Intro
