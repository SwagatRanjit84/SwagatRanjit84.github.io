import React, { Component } from 'react'

export default class Sidebar extends Component {

  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)', 'marginTop': 38}} />
              <h1 id="colorlib-logo"><a href="index.html">Swagat Ranjit</a></h1>
              <span className="email"><i className="icon-mail"></i>swag.ranjit@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                {/* <ul>
            
                  <li className="active"><a href="#introduction"  
                  data-nav-section="introduction">Introduction</a></li>
                  <li ><a href="#expertize" data-nav-section="expertize">Expertize</a></li>
                  <li><a href="#project" data-nav-section="project">Project</a></li>
                 
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul> */}

<ul>
                  <li className="active"><a href="#introduction" data-nav-section="introduction">Introduction</a></li>
                  <li><a href="#expertize" data-nav-section="expertize">Expertize</a></li>
                  <li><a href="#project" data-nav-section="projects">Projects</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
               <li><a href="https://www.linkedin.com/in/swagatranjit/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
               <li><a href="https://www.facebook.com/Nepali.Swagat.Ranjit" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://scholar.google.co.in/citations?user=gsQ7ugkAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer"><i className="icon-google" /></a></li>
                <li><a href="https://github.com/SwagatRanjit84" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                 
              </small></p>
              <p><small>
              
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
