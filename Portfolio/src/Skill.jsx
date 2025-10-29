import React from "react";
import "./Skill.css" ; 


const Skill = () =>{
    return (
   <div className="skill">
     <div className="skill-text">
              <h3 className="my-skill">My Skills</h3>
                <p className="skill-line">
                      I like to take responsibility to craft aesthetic user <br/>
                      experience using modern frontend architecture.
                 </p>
        
                 <p className="lng-tool">LANGUAGE AND TOOL</p>
                 <div className="icon-row">
                  <img className="tool-icon" src="html.svg" alt="html" />
                  <img className="tool-icon" src="css.svg"  alt="css" />
                 <img className="tool-icon" src="javascript.svg" alt="js" />  
                  <img className="tool-icon"   src="vite.svg" alt="vite" />         
                  <img className="tool-icon"  src="figma.svg"   alt="figma" />
                  <img className="tool-icon"  src="git.svg"    alt="git" />
                 </div>
<br/>
                 <p className="lng-tool">LIBRARIES AND FRAMEWORKS</p>
                 <div className="icon-row">
                  <img className="tool-icon" src="react.svg" alt="react" />
                  <img className="tool-icon" src="redux.svg" alt="redux" />
                  <img className="tool-icon" src="tailwindcss.svg" alt="tailwind" />
                 </div>

<br/>
              <p className="lng-tool">DATABASE</p>
                 <div className="icon-row">
                  <img className="tool-icon" src="mysql.svg" alt="mysql" />
                  <img className="tool-icon" src="mongodb.svg" alt="mongodb"/>
                  </div>


</div>
  

</div>


)
}

export default Skill ;
