import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>A final year Computer Science Student at Amrita School of Engineering, Coimbatore.</p>
                    <p>I love to build apps, optimize algorithms and develop solutions</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What do I do?</span>
                <h2 className="colorlib-heading">My areas of expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>I have a good understanding important data structures and algorithms.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>I am skilled in web development with various technology stacks.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <div className="desc">
                    <h3>Application development</h3>
                    <p>I have been the fullstack developer of various projects, as well as a part of fullstack development teams</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <div className="desc">
                    <h3>Machine Learning</h3>
                    <p>Although a beginner as yet, I am well versed with important machine learning algorithms </p>
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
