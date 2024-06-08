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
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Teaching Assistant at Louisiana State University{" "}
                          <span>August 2022 to May 2024 </span>
                        </h2>
                        <p>
                          • Developed an Online Tutor Scheduling platform using
                          ReactJS and SpringBoot, to assist students in
                          arranging appointments with Professors. This system
                          also streamlines scheduling management for both
                          administrators and Professors.
                          <br />• Led as Sprint Manager, overseeing and guiding
                          project development phases with agile methodologies,
                          thereby enhancing team efficiency and project
                          execution through mentorship, support, and adherence
                          to best practices.
                          <br />• Conducted laboratory sessions and classes in
                          Java Programming and Object-Oriented Analysis and
                          Design.
                        </p>
                      </div>
                    </div>
                  </article>

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
                          Software Developer at RapidPlatform Private Limited{" "}
                          <span>November 2018 to June 2022</span>
                        </h2>
                        <p>
                          • Designed and developed a task management software
                          leveraging Business Process Model and Notation (BPMN)
                          diagrams to automate processes using NodeJS, ReactJS
                          integrated with PowerBI for dynamic data
                          visualization, resulting in enhanced task tracking and
                          efficient workflow management, improved customer
                          satisfaction by 40% and reduction in user support
                          request by 15%.
                          <br />• Contributed to the development of a
                          comprehensive personality test profile system,
                          utilizing HEXACO, AB5C, and 6FPQ scales for in-depth
                          personality analysis. Implemented Chart.js for dynamic
                          visualization of individual and team personality
                          insights.
                          <br />• Developed an OCR-based React Native mobile
                          application for efficient invoice uploading and
                          successfully integrated with Xero Accounting software
                          to streamline financial processing, enhancing the
                          overall process by 60%.
                          <br />• Developed a task ranking algorithm using
                          Convolutional Neural Networks (CNN) and Recurrent
                          Neural Networks (RNN) using python, trained to
                          prioritize tasks based on various criteria, resulting
                          in improved task management efficiency.
                          <br />• Utilized TypeScript to maintain type-safe
                          code, resulting in a 60% reduction in type-related
                          runtime errors.
                          <br />• Implemented comprehensive unit testing using
                          Jest, resulting in a 40% reduction in post-release bug
                          reports, thereby enhancing code reliability and
                          overall software quality.
                          <br />• Developed an Outlook Add-in to streamline
                          workflow using NodeJS, ReactJS by facilitating the
                          transfer of emails to third-party task management
                          apps, thereby enhancing user productivity and task
                          organization.
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
                          Computer Engineer at National Reconstruction
                          Authority) <span>April 2018 to July 2018 </span>
                        </h2>
                        <p>
                          • Developed Management Information System of
                          earthquake victims database and grant payment system
                          using React JS and Python.
                          <br />• Worked on the National Reconstruction
                          Authority website using wordpress.
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
                          Software Developer at Open Learning Exchange Nepal{" "}
                          <span>February 2018 to October 2018</span>
                        </h2>
                        <p>
                          • Developed e-learning software, named Epaath, where
                          students are given a platform to choose their courses
                          and take quizzes..
                          <br />
                          • Checked the feasibility of the requirement from the
                          content design team to stack well with Raspberry Pi.
                          <br />
                          • LDeveloped an assessment system consisting of
                          adaptive examination, marksheets showing the insights
                          of marks of each student and providing them feedback
                          based on their result by using React JS, chart.js and
                          node JS
                          <br />
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
