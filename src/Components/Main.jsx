import React,{ useEffect, useRef } from 'react'
import Typed from 'typed.js'




export default function Main(props) {

    const GitHub = () =>{
        window.open("https://github.com/jai-singh5/Spotify-clone.git");
    } 
    

    // Create Ref element.
   const el = useRef(null);

   useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer.", "Video Editor.", "Web Designer.", "Learner."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 75,
      backSpeed: 50,
      backDelay: 100,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


const onButtonClick = () => {
    const pdfUrl = "Sample.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Jai RESUME (1).docx"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div>
      
      <main>
        <section className="firstSection">
            <div className="leftSection">
                <div>Hi, My Name is <span className="purple">Jai</span></div>
                <div>and I am Passionate</div>
                {/* Element to display typing strings */}
                    <span id="element" ref={el}></span>
                <div className="buttons">
                    <button className="btn mx-1" id="resume" onClick={onButtonClick} value="download">Download Resume</button>
                    <button className="btn mx-1" id="github" onClick={GitHub}value="github">Visit GitHub</button>
                </div>
            </div>

            <div className="rightSection">
                <img src="bg.png" alt=""/>
            </div>
        </section>
        <hr/>
        <section className="secondSection">
            <span className="text-grey"> What I have done so far</span>
            <h1>Work Experience</h1>
            <div className="box">
                <div className="verticle">
                    <img src="ILom.png"alt="" className="image-top"/>

                    <div className="verticle-title">
                        Customer Relationship Executive- Digital One (Dec 2022 - July 2023)
                    </div>
                    <div className="verticle-desc">
                        <span>
                            JOB RESPONSIBILITY :
                            <li>Contacts customers who have made inquiries</li>
                            <li>Answering questions about a company&apos;s products or services</li>
                            <li>Processing orders and transactions</li>
                            <li>Delivering information about a company&apos;s offerings</li>
                            <li>Collecting and analyzing customer feedback</li>
                            <li>Developing and documenting knowledge into helpful content</li>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
   
  )
}
