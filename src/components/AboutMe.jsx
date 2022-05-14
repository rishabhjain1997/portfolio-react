import React from "react"
import pageBreak from "../assets/shared/page_break.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Using Now:
import { faReact } from "@fortawesome/free-brands-svg-icons"
import firebaseLogo from "../assets/logo/firebase.png"
import tailwindLogo from "../assets/logo/tailwindcss.svg"
import htmlLogo from "../assets/logo/html5.png"
import cssLogo from "../assets/logo/css.png"
import jsLogo from "../assets/logo/javascript.svg"
import pythonLogo from "../assets/logo/python.png"
import tensorflowLogo from "../assets/logo/tensorflow.png"

// Learning
import expressLogo from "../assets/logo/express.png"
import nodeLogo from "../assets/logo/nodejs.svg"
import graphQLLogo from "../assets/logo/graphql.png"
import mongoDBLogo from "../assets/logo/mongodb.png"

// Others
import cLogo from "../assets/logo/c-logo.png"
import javaLogo from "../assets/logo/java.png"
import gitLogo from "../assets/logo/git.png"
import pandasLogo from "../assets/logo/pandas.png"
import githubLogo from "../assets/logo/github.png"
import bootstrapLogo from "../assets/logo/bootstrap.png"
import materializeLogo from "../assets/logo/materialize.png"
import mysqlLogo from "../assets/logo/mysql.png"

const AboutMe = () => {
  return (
    <div className="bg-gradient-radial from-gray-100 via-gray-200 to-gray-400">
      <div className="pt-20 md:pt-28 lg:pt-36 w-72 lg:w-[700px] md:w-96 mx-auto flex flex-col items-center">
        <div className="w-52 lg:w-96 py-4 lg:py-6 border-8 border-black font-bold text-center text-sm lg:text-2xl lg:tracking-widest">
          ABOUT ME
        </div>
        <div className="mt-8  md:mt-16 md:mt-20">
          <p className="text-justify text-sm lg:text-base font-light">
            I'm Rishabh. I am an incoming student at the University of Virginia.
            I have significant professional experience as a backend developer,
            having worked at Bank of America for 2+ years. Lately, I have been
            working on independent fullstack web development projects in the
            health-tech industry. I have also been pursuing research in the
            sustainable energy industry using Deep Learning and Machine
            Learning.
          </p>
          <br />
          {/* <br className="lg:block hidden" /> */}
          <p className="text-justify  text-sm lg:text-base font-light">
            I am learning Node.js and Express to build fullstack MERN
            applications. Next, I plan to learn Server Side Rendering using
            Next.js, GraphQL and Headless CMS platforms. I have also been
            looking at Blockchain and Web3 resources. I have also been
            practising problem solving in Python on Leetcode, having completed
            100+ problems on the platform.
          </p>
        </div>
        <button className="mt-10 md:mt-16 lg:mt-20 w-32 py-2 border-l-4 border-r-4 border-black font-bold text-center text-sm">
          EXPLORE
        </button>
        <img
          src={pageBreak}
          alt="logo"
          className="h-3 w-40 md:w-52 xl:w-64 mt-14 md:mt-20"
        />
      </div>
      <div className="pt-24 md:pt-32 lg:pt-28 w-72  md:w-96 lg:w-[900px] xl:w-[1018px] mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col items-start">
          <div className="flex flex-col lg:flex-row lg:space-x-12 w-full items-start">
            <div className="flex flex-col w-full">
              <h2 className="text-lg font-bold">DATA SCIENCE</h2>
              <p className="self-center mt-6 text-sm text-justify font-light">
                I am experienced in machine learning, supervised and
                unsupervised algorithms and use data visualization techniques to
                present the results. I use Python, Scikit Learn, Pandas, Numpy
                and Seaborn for my data projects.
              </p>
            </div>
            <div className="flex flex-col w-full">
              <h2 className="mt-14 lg:mt-0 text-lg font-bold">
                FRONT-END DEVELOPMENT
              </h2>
              <p className="self-center mt-6 text-sm text-justify font-light">
                I like to code front-end components from scratch, and enjoy
                bringing ideas to life in the browser. I am experienced in
                Vanilla JS, HTML and CSS and I have currently been pursuing
                React and Tailwind projects.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 lg:self-center lg:mt-16">
            <h2 className="mt-14 text-lg font-bold">BACK-END DEVELOPMENT</h2>
            <p className="self-center mt-6 text-sm text-justify font-light">
              I am experienced in developing API resources that integrate
              front-end components with databases and servers. I am currently
              learning Express and Node.JS to create full-stack MERN
              applications.
            </p>
          </div>
        </div>
        <img
          src={pageBreak}
          alt="logo"
          className="h-3 w-40  md:w-52 xl:w-64 mt-24 md:mt-32"
        />
      </div>
      <div className="py-24 lg:py-28 w-72  md:w-[500px]  lg:w-[900px] xl:w-[1018px] mx-auto flex flex-col items-center">
        <div className="w-52 lg:w-96 py-4 lg:py-6 border-8 border-black font-bold text-center text-sm lg:text-2xl lg:tracking-widest">
          SKILLS
        </div>

        <h3 className="mt-16 lg:mt-20 text-3xl font-bold lg:self-start lg:ml-20">
          USING NOW:
        </h3>
        <div className="flex lg:hidden flex-col items-stretch space-y-16 pt-16 w-full md:space-y-0 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faReact}
              className="text-sky-400 h-20 w-20"
            />
            <h4 className="text-center mt-4 text-xl tracking-widest">REACT</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={firebaseLogo} alt="logo" className="h-20 mx-auto" />
            <h4 className="text-center mt-4 text-xl tracking-widest">
              FIREBASE
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={tailwindLogo}
              alt="logo"
              className="h-14 md:mt-3 mx-auto"
            />
            <h4 className="text-center mt-7 text-xl tracking-widest">
              TAILWIND
            </h4>
          </div>
        </div>
        <div className="hidden w-full lg:grid grid-cols-4 gap-4 gap-y-12 mt-16">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faReact}
              className="text-sky-400 h-20 w-20"
            />
            <h4 className="text-center mt-4 text-xl tracking-widest">REACT</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={firebaseLogo} alt="logo" className="h-20 mx-auto" />
            <h4 className="text-center mt-4 text-xl tracking-widest">
              FIREBASE
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={tailwindLogo}
              alt="logo"
              className="h-14 md:mt-3 mx-auto"
            />
            <h4 className="text-center mt-7 text-xl tracking-widest">
              TAILWIND
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={htmlLogo} alt="logo" className="h-14 md:mt-3 mx-auto" />
            <h4 className="text-center mt-7 text-xl tracking-widest">HTML</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={cssLogo} alt="logo" className="h-14 md:mt-3 mx-auto" />
            <h4 className="text-center mt-7 text-xl tracking-widest">CSS</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={jsLogo} alt="logo" className="h-14 md:mt-3 mx-auto" />
            <h4 className="text-center mt-7 text-xl tracking-widest">JS</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={pythonLogo} alt="logo" className="h-14 md:mt-3 mx-auto" />
            <h4 className="text-center mt-7 text-xl tracking-widest">PYTHON</h4>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={tensorflowLogo}
              alt="logo"
              className="h-14 md:mt-3 mx-auto"
            />
            <h4 className="text-center mt-7 text-xl tracking-widest">
              TENSORFLOW
            </h4>
          </div>
        </div>
        <h3 className="mt-16 lg:mt-20 text-3xl font-bold lg:self-start lg:ml-20">
          LEARNING:
        </h3>
        <div className="flex lg:hidden flex-col items-stretch space-y-16 pt-16 w-full md:space-y-0 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center">
            <img src={expressLogo} alt="logo" className="h-20 mx-auto" />
            <h4 className="text-center mt-4 text-xl tracking-widest">
              EXPRESS
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={graphQLLogo} alt="logo" className="h-20 mx-auto" />
            <h4 className="text-center mt-4 text-xl tracking-widest">
              GRAPHQL
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={mongoDBLogo}
              alt="logo"
              className="h-14 md:mt-3 mx-auto"
            />
            <h4 className="text-center mt-7 text-xl tracking-widest">
              MONGODB
            </h4>
          </div>
        </div>
        <div className="hidden w-full lg:grid grid-cols-4 gap-4 gap-y-12 mt-16">
          <div className="flex flex-col items-center">
            <img src={expressLogo} alt="logo" className="h-20 mx-auto" />
            <h4 className="text-center mt-4 text-xl tracking-widest">
              EXPRESS
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={graphQLLogo} alt="logo" className="h-20 mx-auto" />
            <h4 className="text-center mt-4 text-xl tracking-widest">
              GRAPHQL
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={mongoDBLogo}
              alt="logo"
              className="h-14 md:mt-3 mx-auto"
            />
            <h4 className="text-center mt-7 text-xl tracking-widest">
              MONGODB
            </h4>
          </div>

          <div className="flex flex-col items-center">
            <img src={nodeLogo} alt="logo" className="h-14 md:mt-3 mx-auto" />
            <h4 className="text-center mt-7 text-xl tracking-widest">NODEJS</h4>
          </div>
        </div>
        <div className="hidden lg:block w-full">
          <h3 className="mt-16 lg:mt-20 text-3xl font-bold lg:self-start lg:ml-20">
            OTHER SKILLS:
          </h3>
          <div className="hidden w-full lg:grid grid-cols-4 gap-4 gap-y-12 mt-16">
            <div className="flex flex-col items-center">
              <img src={cLogo} alt="logo" className="h-20 mx-auto" />
              <h4 className="text-center mt-4 text-xl tracking-widest">C++</h4>
            </div>
            <div className="flex flex-col items-center">
              <img src={javaLogo} alt="logo" className="h-20 mx-auto" />
              <h4 className="text-center mt-4 text-xl tracking-widest">JAVA</h4>
            </div>
            <div className="flex flex-col items-center">
              <img src={gitLogo} alt="logo" className="h-14 md:mt-3 mx-auto" />
              <h4 className="text-center mt-7 text-xl tracking-widest">GIT</h4>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={pandasLogo}
                alt="logo"
                className="h-14 md:mt-3 mx-auto"
              />
              <h4 className="text-center mt-7 text-xl tracking-widest">
                PANDAS
              </h4>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={githubLogo}
                alt="logo"
                className="h-14 md:mt-3 mx-auto"
              />
              <h4 className="text-center mt-7 text-xl tracking-widest">
                GITHUB
              </h4>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={bootstrapLogo}
                alt="logo"
                className="h-14 md:mt-3 mx-auto"
              />
              <h4 className="text-center mt-7 text-xl tracking-widest">
                BOOTSTRAP
              </h4>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={materializeLogo}
                alt="logo"
                className="h-14 md:mt-3 mx-auto"
              />
              <h4 className="text-center mt-7 text-xl tracking-widest">
                MATERIALIZE
              </h4>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={mysqlLogo}
                alt="logo"
                className="h-14 md:mt-3 mx-auto"
              />
              <h4 className="text-center mt-7 text-xl tracking-widest">SQL</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
