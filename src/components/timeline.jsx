import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                        Software Developer at Simpli Private Limited  <span>November 2018 to present</span>
                        </h2>
                        <p>
                        •Worked on the task management platform where all the activities of organization can be monitored and controlled by the platform itself using React JS.
<br/>• Developed invoice uploader OCR mobile app where system can read the data from the image, and integrated with Xero Accounting software.
<br/>• Worked on a task ranking project. Tasks ranking algorithm was trained based on their priority, assignee, start date, due date, and network weights were updated by changes of user feedback.
<br/>• Experimented with deep learning architectures such as Convolutional Neural Network and Recurrent Neural Network in OCR and task ranking projects.
<br/>• Worked on personality test profile project using all three scales HEXACO, AB5C, and     6FPQ scale. 
<br/>• Used chart.js to show the dynamic insights of the personality profile based on individual and team. 


                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                        Computer Engineer at National Reconstruction Authority)  <span>April 2018 to July 2018 </span>
                        </h2>
                        <p>
                        • Developed Management Information System of earthquake victims database and grant payment system using React JS and Python.<br/>
• Worked on the National Reconstruction Authority website using wordpress.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                        Software Developer at Open Learning Exchange Nepal <span>February 2018 to October 2018</span>
                        </h2>
                        <p>
                        • Developed e-learning software, named Epaath, where students are given a platform to choose their courses and take quizzes..<br/>
• Checked the feasibility of the requirement from the content design team to stack well with Raspberry Pi.<br/>
• LDeveloped an assessment system consisting of adaptive examination, marksheets showing the insights of marks of each student and providing them feedback based on their result by using React JS, chart.js and node JS
<br/>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
