import React from 'react'
import './Skills.css'

function Skills() {
  return (

      
 <div className='Skill'>   

<section id="skills" className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skill">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="Skill 1" className="skill-image" />
          </div>
          <div className="skill">
            <img src="https://camo.githubusercontent.com/edc736634dd35b0f4008e2f7db456136b9fc0e1e7a4078bb72c7352b1bdf8a7e/68747470733a2f2f776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667" alt="Skill 2" className="skill-image" />
          </div>
          <div className="skill">
            <img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="Skill 3" className="skill-image" />
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="Skill 3" className="skill-image" />
          </div>
          <div className="skill">
            <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="Skill 3" className="skill-image" />
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="Skill 3" className="skill-image" />
          </div>
          <div className="skill">
            <img src="data:image/png;base64,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" alt="Skill 3" className="skill-image" />
          </div>
          <div className="skill">
            <img src="data:image/png;base64,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" alt="Skill 3" className="skill-image" />
          </div>
          <div className="skill">
            <img src="https://www.shutterstock.com/image-vector/sql-icon-major-database-format-260nw-1904337712.jpg" alt="Skill 3" className="skill-image" />
          </div>
          <div className="skill">
            <img src="https://justinmahar.gallerycdn.vsassets.io/extensions/justinmahar/react-bootstrap-snippets/2.1.0/1674710651199/Microsoft.VisualStudio.Services.Icons.Default" alt="Skill 3" className="skill-image" />
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" alt="Skill 3" className="skill-image" />
          </div>
          <div className="skill">
            <img src="https://miro.medium.com/v2/resize:fit:719/1*WaaXnUvhvrswhBJSw4YTuQ.png" alt="Skill 3" className="skill-image" />
          </div>
          <div className="skill">
            <img src="https://res.cloudinary.com/hevo/image/upload/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif" alt="Skill 3" className="skill-image" />
          </div>
          <div className="skill">
            <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="Skill 3" className="skill-image" />
          </div>
        </div>
      </section>

  </div>
  )
}

export default Skills
