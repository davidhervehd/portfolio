import React from 'react';
import Footer from '../Components/Footer';
import BackButton from '../Components/BackButton'; // Import the BackButton component
import '../Styles_css/digitalStrom.css';

export default function DigitalStrom() {
  return (
    <div className="main-content case-study-page">
      <header>
        <img
          src={`${process.env.PUBLIC_URL}/img/headerDigitalStrom.jpg`}
          alt="Digital Strom Header"
          className="header-image"
        />
      </header>
      <div className="content">
        <div className="info-box-ds">
          <p className="titleboxinfo-ds">Enhancing UX through Comprehensive Feedback Analysis</p>
          <p className="texteboxinfo-ds">DigitalSTROM is a Swiss-based company that specializes in smart home technology. They offer solutions for controlling and automating various aspects of home systems such as lighting, heating, security, and more. I was in charge of relaunching the mobile app for iOS and Android.</p>
          <p className="texteboxinfo-ds">One aspect of my role involved <strong>consolidating user requirements</strong> by leveraging the network platform to gather valuable feedback.</p>
        </div>
        
        {/* My role */}
        <div className="role-analysis-box">
          <div className="role-content">
            <div className="role-title"><span className="bold-text">My role:</span>
            <span className="semi-bold-text"> Conduct a Thematic analysis</span>
            </div>
            <div className="role-description">
              During my time with the company, I suggested and executed the concept of conducting thematic analysis to extract valuable insights from user feedback. This method enabled us to gain a deeper understanding of user needs and preferences, consequently resulting in enhancements to the app's functionality and user experience.
            </div>
            <div className="role-columns">
              <div className="role-column">
                <div className="role-column-title">Research</div>
                <div className="role-column-text">Conducting the thematic analysis, including familiarization with the data and identifying key elements.</div>
              </div>
              <div className="role-column">
                <div className="role-column-title">Deliverable</div>
                <div className="role-column-text">Transforming the identified elements into usable outputs, such as generating codes, grouping them into themes, and analyzing emerging themes.</div>
              </div>
              <div className="role-column">
                <div className="role-column-title">Outcomes</div>
                <div className="role-column-text">Achieving clear definition and naming of themes, and presenting results in a detailed report.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Start scroll-driven animations from here */}
        <div className="view">
          {/* Quotation_1 */}
          <div className="quotation-box block">
            <hr className="quotation-line"/>
            <div className="quotation">
              <div className="quotation-mark-container top-container">
                <img src={`${process.env.PUBLIC_URL}/img/quot_left.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
              </div>
              <div className="quotation-text">
                <em>I needed a powerful tool for UX research that was<br />
                   flexible, accessible, and transparent.
                </em>
              </div>
              <div className="quotation-mark-container bottom-container">
                <img src={`${process.env.PUBLIC_URL}/img/quote_right.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
              </div>
            </div>
            <hr className="quotation-line"/>
          </div>

          {/* Additional text box */}
          <div className="additional-text-box block">
            <p className="title">The Methodical Journey through Thematic Analysis</p>
            <p>Based on the project constraints and schedule, I required a method that was accessible, meaning <strong>no need for equipment</strong>, transparent so I could document my analysis and <strong>showcase my process and decision-making</strong>, and something powerful that allows for a deep understanding and discovery of underlying meanings and insights. I opted for "thematic analysis" based on the methodology developed by Braun and Clarke.</p>
            <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/theme_analysis.png`} alt="Left Quote"/>
          </div>

          {/* Quotation_2 */}
          <div className="quotation-box block">
            <hr className="quotation-line"/>
            <div className="quotation">
              <div className="quotation-mark-container top-container">
                <img src={`${process.env.PUBLIC_URL}/img/quot_left.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
              </div>
              <div className="quotation-text">
                <em>Embarking on the Exploration Journey:<br />
                  Sources of Rich UserData.
                </em>
              </div>
              <div className="quotation-mark-container bottom-container">
                <img src={`${process.env.PUBLIC_URL}/img/quote_right.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
              </div>
            </div>
            <hr className="quotation-line"/>
          </div>

          {/* Additional text box */}
          <div className="additional-text-box block">
            <p className="title">DigitalSTROM User Group - The Heartbeat of Brand Devotion</p>
            <p>The DigitalSTROM User Group goes beyond being a simple forum; it is a focus group of our most dedicated customers and prospects. Acknowledging its potential, we take this space seriously as a communication platform, using it to showcase our expertise, pinpoint shortcomings, and gather insights for potential product innovations. This immersive engagement helps establish DigitalSTROM as a reference in our sector.</p>
            <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/facebook_figures.png`} alt="Left Quote"/>
          </div>

          {/* Quotation_3 */}
          <div className="quotation-box block">
            <hr className="quotation-line"/>
            <div className="quotation">
              <div className="quotation-mark-container top-container">
                <img src={`${process.env.PUBLIC_URL}/img/quot_left.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
              </div>
              <div className="quotation-text">
                <em>Reviews on Google Play and Apple Store,<br />
                - Decoding User Sentiments
                </em>
              </div>
              <div className="quotation-mark-container bottom-container">
                <img src={`${process.env.PUBLIC_URL}/img/quote_right.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
              </div>
            </div>
            <hr className="quotation-line"/>
          </div>

          {/* Additional text box */}
          <div className="additional-text-box block">
            <p>Our second source of qualitative data emanates from the feedback left by users on Google Play and Apple Store. These platforms offer a treasure trove of insights into user opinions on our products, providing valuable fodder for the final stages of our thematic analysis.</p>
          </div>

          {/* Two columns with icons and text */}
          <div className="two-column-section block">
            <div className="column">
              <img src={`${process.env.PUBLIC_URL}/img/google-play.png`} alt="Google Play Icon" className="column-icon" />
              <p>
                Delving into the <strong>Google Play</strong> realm as of August 11, 2022, the Ds Smart Home app boasts a commendable 3.4-star rating, accompanied by <strong>82 reviews</strong> and over <strong>5,000 downloads</strong>. Users commend the app's improved speed, marking a notable advancement from its predecessor, the dS Home Control app.
              </p>
            </div>
            <div className="column">
              <img src={`${process.env.PUBLIC_URL}/img/apple.png`} alt="Apple Store Icon" className="column-icon" />
              <p>
                Meanwhile, <strong>Apple Store reviews</strong> present a more nuanced picture with a 2.6/5-star rating from <strong>60 reviews</strong>, signaling areas of improvement such as stability on iOS devices.
              </p>
            </div>
          </div>

          {/* Additional text box */}
          <div className="additional-text-box block">
            <p className="title">Standpoint on App Reviews: A Concrete Source for UX Enhancement</p>
            <p>These tangible examples of user comments provide a solid foundation for our analysis. They constitute a wealth of detailed data that must be navigated with care. The analysis should go beyond mere description, avoiding getting lost in the details. This sets the stage for the next chapter, where we will break down and organize this rich data, tagging quotations with appropriate codes to uncover significant themes.</p>
          </div>

          {/* Quotation_4 */}
          <div className="quotation-box block">
            <hr className="quotation-line"/>
            <div className="quotation">
              <div className="quotation-mark-container top-container">
                <img src={`${process.env.PUBLIC_URL}/img/quot_left.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
              </div>
              <div className="quotation-text">
                <em>Coding refers to the process of labelling <br /> 
                segments of text with the appropriate codes.
                </em>
              </div>
              <div className="quotation-mark-container bottom-container">
                <img src={`${process.env.PUBLIC_URL}/img/quote_right.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
              </div>
            </div>
            <hr className="quotation-line"/>
          </div>

          {/* Additional text box */}
          <div className="additional-text-box block">
            <p className="title">Encoding the qualitative data</p>
            <p>There’s no one way to conduct a thematic analysis. I've selected a method of analysis that I believed suited the type and volume of data I've collected. The method involves encoding the qualitative data (in our case, the comments). In this context, coding refers to the process of labeling segments of text with the appropriate codes.</p>
          </div>

          <div className="additional-text-box2 block">
            <p>Codes can be:<br />
            <strong>- Descriptive:</strong> They describe what the data is about<br />
            <strong>- Interpretive:</strong> They are an analytical reading of the data, adding the researcher's interpretive lens to it.</p>
            Let's delve into a concrete example.
          </div>

          {/* Image case */}
          <div className="additional-image-case block">
            <img src={`${process.env.PUBLIC_URL}/img/Comment.png`} alt="Google Play Icon" className="comment" />
          </div>
          <img src={`${process.env.PUBLIC_URL}/img/fleche_bas.png`} alt="Google Play Icon" className="column-icon2 block" />

          {/* Two columns with titles and text */}
          <div className="block">
            <div className="two-column-section block">
              <div className="column">
                <div className="column-title">Descriptive Code</div>
                <p>
                  <strong>Code Name: "Technical Issue"</strong><br /><br />
                  <strong>Description:</strong> This code describes a specific technical problem mentioned in the comment, such as the sudden shutdown of the old Alexa app without prior notification.
                </p>
              </div>
              <div className="column">
                <div className="column-title">Interpretative Code</div>
                <p>
                  <strong>Code Name: "User Frustration"</strong><br /><br />
                  <strong>Description:</strong> This code interprets the underlying emotion or sentiment conveyed in the comment, indicating the user's frustration with the lack of information provided by the company and the difficulties encountered in operating the new app.
                </p>
              </div>
            </div>
            <div className="additional-text-box2">
              <p>What is unique about thematic analysis is that it acknowledges that analysis happens at an intuitive level. It is through the process of immersion in data and considering connections and interconnections between codes, concepts and themes that an « aha » moment happens."</p>
            </div>
          </div>

          {/* Quotation_5 */}
          <div className="quotation-box block">
            <hr className="quotation-line"/>
            <div className="quotation">
              <div className="quotation-mark-container top-container">
                <img src={`${process.env.PUBLIC_URL}/img/quot_left.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
              </div>
              <div className="quotation-text">
                <em>I uncovered four main themes, categorizing them <br />based on their occurrence percentage</em>
              </div>
              <div className="quotation-mark-container bottom-container">
                <img src={`${process.env.PUBLIC_URL}/img/quote_right.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
              </div>
            </div>
            <hr className="quotation-line"/>
          </div>

          {/* Additional text boxes */}
          <div className="additional-text-box2 block">
            <p>After applying the method to <strong>over 100 comments</strong>, I meticulously reviewed the data to <strong>identify recurring themes</strong>, carefully examining each piece for patterns. Through iterative analysis, I uncovered four main themes and categorized them based on their <strong>occurrence percentage</strong>. I further investigated to pinpoint sub-themes related to these main themes. This iterative approach ensured the precision and clarity of the thematic structure, providing a foundational understanding for defining requirements and tasks needed in the UX/UI landscape.</p>
          </div>
          <div className="additional-text-box2 block">
            <p>For the sake of confidentiality in this example, I'm not going to provide any precise figures, but rather an example of themes and sub-themes that I've found, and how they have been organized and represented.</p>
          </div>

          {/* Image case */}
          <div className="additional-image-case block">
            <img src={`${process.env.PUBLIC_URL}/img/Tableau_analyse.png`} alt="Tableau Analyse" className="comment" />
          </div>

          {/* Quotation_6 */}
          <div className="quotation-box block">
            <hr className="quotation-line"/>
            <div className="quotation">
              <div className="quotation-mark-container top-container">
                <img src={`${process.env.PUBLIC_URL}/img/quot_left.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
              </div>
              <div className="quotation-text">
                <em>Defining: Stage 2 in the<br /> design thinking process</em>
              </div>
              <div className="quotation-mark-container bottom-container">
                <img src={`${process.env.PUBLIC_URL}/img/quote_right.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
              </div>
            </div>
            <hr className="quotation-line"/>
          </div>

          {/* Additional text box */}
          <div className="additional-text-box block">
            <p className="title">Produce the report</p>
            <p>Now that we've compiled a detailed report on the most recurring themes and established a robust understanding of customer needs, we have a solid foundation to either define a <strong>list of problem statements or a set of requirements</strong>. This compilation will serve as the starting point to guide the remainder of our design efforts.</p>
            <p>Upon completing the compilation of our requirements list, it becomes essential to <strong>prioritize the tasks</strong> ahead. This process is conducted collaboratively with stakeholders. Once priorities are established, we obtain a clear list of requirement allowing us to commence the ideation phase by creating low-fidelity wireframes, but that’s another story :)</p>
            <p><i>Example of final design</i></p>
            <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/final_design.png`} alt="Left Quote"/>
          </div>

        </div> {/* End of view div */}

        <div className="white-space"></div>

      </div>
       {/* Add the BackButton component at the bottom */}

      <Footer />
    </div>
  );
}
