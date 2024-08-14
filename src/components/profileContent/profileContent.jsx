import './profileContent.css';
import profileImg from '../../assets/images/Bitmap.png'
import img1 from '../../assets/images/003-pin.svg'
import img2 from '../../assets/images/Path.png'
import img3 from '../../assets/images/002-url.svg'
import img4 from '../../assets/images/001-office-building.svg'
function ProfileContent(){
    return(
        <div id="profileContainer">
            <img src={profileImg} className='profileImg'/>
            <div className="infocontainer">
                <div className='info'>
                    <div className='user-name'>
                        <label className='name'>The Octocat </label>
                        <label className='date'>Joined 25 Jan 2011</label>
                    </div>
                    <label className='link'>@octocat</label>
                    <label className='lab'>This profile has no bio</label>

                </div>


                <div className="smallScreens">
                    <div className='resDiv'>
                        <img src={profileImg} className='profileImg2'/>
                        <div className='user-names'>
                            <label className='name'>The Octocat </label>
                            <label className='link'>@octocat</label>
                            <label className='date'>Joined 25 Jan 2011</label>
                        </div>

                    </div>
                     
                    
                    <p className='myp'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>

                </div>



                <div className='followers'>
                    <div className='topDiv'>
                        
                        <div className='con'>
                            <label className='letters'>Repos</label>
                            <label className='numbers'>8</label>

                        </div>
                        <div className='con'>
                            <label className='letters'>Followers</label>
                            <label className='numbers'>3938</label>

                        </div>
                        <div className='con'>
                            <label className='letters'>Following</label>
                            <label className='numbers'>9</label>

                        </div>
                           
                           
                     
                        

                    </div>
                    <div className='bottomDiv'>
                        <div className='contact-info'>
                            <button>
                                <img src={img1} className='img1'/>
                                <span>San Francisco</span>
                            </button>
                            <button>
                                <img src={img2} className='img1'/>
                                <span>Not Available</span>
                            </button>
                        </div>
                        <div className='contact-info'>
                            <button>
                                <img src={img3} className='img1'/>
                                <span>https://github.blog</span>
                            </button>
                            <button>
                                <img src={img4} className='img1'/>
                                <span>@github</span>
                            </button>
                        </div>

                    </div>

                </div>

            </div>
           

        </div>
    )
}
export default ProfileContent;