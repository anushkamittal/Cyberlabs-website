import React, {Component} from "react";

class About extends Component {
  render() {
    return (
      <div id='About'>
        <div className="content" id="ajax-content">
          <div className="text-intro">
            <h1>About Us</h1>
            <div className="one-column">
              <p>
                <i>The important thing is to not stop questioning.</i>
                -Albert Einstein</p>
            </div>
            <div className="two-column">
              <p>We are a team of individuals from multiple disciplines, driven by the desire
                of implementing solutions-ubounded by the limits of knowledge or techical
                know-how. The problem statement address issues ranging from solving social
                problems and cultural oportunities to building some cool gadgets. It was founded
                post inpiration on the footsteps of MIT MEDIA LABS by an enthusiatic and ticking
                learner who discovered a scope beyond rote learning and plain-vanilla
                implementations of the common problems and sci-fi solutions.</p>
              <p>Cyber Labs provides a platform to discuss debate and explore the viable and
                easy solutions, be it tech or non-tech to problems via a project-based approach.
                With hopes to par the levels of exposure, we are delightful for the fact that
                Cyber Labs is the first direct interface between Indian School of Mines and
                Massachusetts Institute of Technology.
              </p>
            </div>
            <div className="clear"/>
            <br/>
            <br/>
            <br/>
            <h1 style={{
              width: "70%"
            }}>Frequently Asked Questions</h1>
            <div className="one-column">
              <p>What is Cyber Labs ?</p>
            </div>
            <div className="two-column">
              <p>You should join Cyber Labs if you are looking for a practical hand into
                implementing various simple and advanced affairs which may range from writing
                some scripts for searching a file on your PC to creating your own wifi .exe or
                creating our own fancy displays. As it works on collective collaboration, be
                ready to keep your eyes and ears open to share some cognitives with the peers.
              </p>
            </div>
            <div className="clear"/>
            <div className="one-column">
              <p>Who should join Cyber Labs?</p>
            </div>
            <div className="two-column">
              <p>Cyber Labs is an initiative where students create some awesome projects which
                may fall in any of the three domains : Solving Social Problems
                <br/>
                Preserving Indian Culture by creating tech that go hand-in-hand with it
                <br/>
                Creating some really cool stuff
              </p>
            </div>
            <div className="clear"/>
            <div className="one-column">
              <p>Who should not join Cyber Labs?</p>
            </div>
            <div className="two-column">
              <p>If innovation isn't in your vocabulary then probably we aren't your cup of
                tea. If you expect to use our resources to get an Internship in MIT or something
                similar, PLEASE DO NOT...Zero... nothing... nada... zilch... nix.. join. The
                members will be together working on their jobs with adequate dedication and
                justified time-commitment.
              </p>
            </div>
            <div className="clear"/>
            <div className="one-column">
              <p>Still have queries regarding joining, who will address ?</p>
            </div>
            <div className="two-column">
              <p>
                You can ask any of the members or find
                <a href="http://mohitchawla.in/">this guy</a>..!
              </p>
            </div>
            <div className="clear"/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    )
  }
}

export default About