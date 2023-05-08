import { AiFillLinkedin,AiFillGithub } from "react-icons/ai"
export const Home = () =>{
    return <>
    <div className="home">
       <div className="detail">
            <div className="description">
            <h1>Front-End React Developer 👋🏽</h1>
            <p>Hi i'm <span style={{color:"#4E878C"}}>Aman Kumar</span>. A passionate Front-end React Developer.</p>
            <section className="socials">
            <a  href="https://www.linkedin.com/in/amankr1209/"><AiFillLinkedin/></a>
            <a href="https://github.com/Amankumar62"><AiFillGithub/></a>
            </section>
        </div> 
        <div className="my-image"><img src={require("./images/IMG_20230104_121908.jpg")} alt="my image"/></div>
    </div>
    <div className="tech">
        <p className="tech-stack">
            <span className="header"><b>Tech Stack</b></span> 
             <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425"/></span>
             <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817"/></span>
             <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"/></span>
             <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"/></span>
             </p>
    </div>
    </div>
    </>
}