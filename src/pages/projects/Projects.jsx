import React from "react";
import i2 from "../../../public/Project-img.png";
import i3 from "../../../public/Project-img2.png";
import i4 from "../../../public/Project-img3.png";
import i5 from "../../../public/Project-img4.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
const Projects = () => {
  return (
    <div>
      <div id="proj" className="home-third">
        <h1>My Projects</h1>
        <div className="home-third-min">
          <div className="home-third-min1">
            <img src={i2} alt="" />
            <h4>Crypto Clone</h4>

            <div className="gitt">
              <Link className="link" to="https://github.com/IbrohimMac/Crypto">
                <div className="git">
                  <FaGithub className="iGit" />
                  <p>View Code</p>
                </div>
              </Link>
              <Link className="link" to="https://cryptto-website.netlify.app/">
                <div className="git">
                  <MdExitToApp className="iGit" />
                  <p>Live Preview</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="home-third-min1">
            <img src={i3} alt="" />
            <h4>McDonald's Clone</h4>

            <div className="gitt">
              <Link
                className="link"
                to="https://github.com/IbrohimMac/McDonalds"
              >
                <div className="git">
                  <FaGithub className="iGit" />
                  <p>View Code</p>
                </div>
              </Link>
              <Link
                className="link"
                to="https://mc-donalds-ibrohim.netlify.app/"
              >
                <div className="git">
                  <MdExitToApp className="iGit" />
                  <p>Live Preview</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="home-third-min1">
            <img src={i4} alt="" />
            <h4>Spotify Clone</h4>

            <div className="gitt">
              <Link className="link" to="https://github.com/IbrohimMac/Spotify">
                <div className="git">
                  <FaGithub className="iGit" />
                  <p>View Code</p>
                </div>
              </Link>
              <Link className="link" to="https://spotify-webs1te.netlify.app/">
                <div className="git">
                  <MdExitToApp className="iGit" />
                  <p>Live Preview</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="home-third-min1">
            <img src={i5} alt="" />
            <h4>Countries</h4>
            <div className="gitt">
              <Link
                className="link"
                to="https://github.com/IbrohimMac/Countries"
              >
                <div className="git">
                  <FaGithub className="iGit" />
                  <p>View Code</p>
                </div>
              </Link>
              <Link className="link" to="https://countries-i.netlify.app/">
                <div className="git">
                  <MdExitToApp className="iGit" />
                  <p>Live Preview</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
