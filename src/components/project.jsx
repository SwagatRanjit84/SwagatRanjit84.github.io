import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <div id="project">
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Outlook Addin</a></h3>
											<span>Details</span>
											To make it easier for users to be able to better track, delegate and get stuff done we want to make it easier for them to move their emails from Outlook to do task in third party apps.
											<p className="icon">
												<span><a href="https://github.com/SwagatRanjit84/outlookAddin"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 55</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">COMPARISON OF PRODUCTS OF AMAZON AND EBAY</a></h3>
											<span>Details</span>Implemented scrapy libraries for comparing similar phones of Amazon and Ebay.
											<p className="icon">
												<span><a href="https://github.com/SwagatRanjit84/AmazonScrapyDJango"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Taskrank Prediction</a></h3>
											<span>Details</span>Tasks ranking algorithm was trained based on their priority, assignee, start date, due date, and network weights were updated by changes of user feedback
											<p className="icon">
												<span><a href="https://github.com/SwagatRanjit84/TaskRank-Prediction-Using-RNN"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Invoice Uploader</a></h3>
											<span>Details</span>User can upload the invoice, system scans, crops the image and saves it.
											<p className="icon">
												<span><a href="https://github.com/SwagatRanjit84/invoice-uploader"><i className="icon-github" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							
							
						</div>
					</div>
				</section>
      </div>
    )
  }
}