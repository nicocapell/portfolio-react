import React from "react";
import "./Info.css";
import bootstrapIcon from "../../media/icons/bootstrap.svg";
import cssIcon from "../../media/icons/css.svg";
import firebaseIcon from "../../media/icons/firebase.svg";
import gitIcon from "../../media/icons/git.svg";
import htmlIcon from "../../media/icons/html.svg";
import jsIcon from "../../media/icons/js.svg";
import npmIcon from "../../media/icons/npm.svg";
import premiereIcon from "../../media/icons/premiere.svg";
import reactIcon from "../../media/icons/react.svg";
import sassIcon from "../../media/icons/sass.svg";
import vscIcon from "../../media/icons/vsc.png"


const Info = () => {
  return (
    <div className="info-container">

        
        <div className='info'>
<img src={vscIcon} alt="vscIcon"  />VSC            
<img src={cssIcon} alt="cssIcon"  />CSS
<img src={htmlIcon} alt="htmlIcon"  /> HTML
<img src={gitIcon} alt="gitIcon" /> Git
<img src={bootstrapIcon} alt="bootstrapIcon"/>Bootstrap
<img src={firebaseIcon} alt="firebaseIcon"/> Firebase
</div>
<div className="info2">
<img src={jsIcon} alt="jsIcon"/> JavaScript
<img src={npmIcon} alt="npmIcon"/> Npm 
<img src={premiereIcon} alt="premiereIcon"/> Premiere
<img src={reactIcon} alt="reactIcon"/> ReactJs
 <img src={sassIcon} alt="sassIcon" /> SASS
 </div>
      </div>
  );
};

export default Info;
