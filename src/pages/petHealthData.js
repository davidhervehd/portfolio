import React from 'react';
import Footer from '../Components/Footer'; // Assurez-vous que le chemin est correct
import BackButton from '../Components/BackButton'; // Assurez-vous que le chemin est correct
import CaseStudyIntro from '../Components/CaseStudyIntro';
import '../Styles_css/petHealthData.css'; // Assurez-vous que le chemin est correct

export default function PetHealthData() {
  return (
    <div className="main-content case-study-page">
      <header>
        <img
          src={`${process.env.PUBLIC_URL}/img/visualcase3.jpg`}
          alt="Digital Strom Header PetHealthData"
          className="header-image-phd"
        />
      </header>
      <div className="content">
        <CaseStudyIntro
          boxClassName="info-box-phd"
          projectName="Pet Health Data"
          projectSubtitle="Smarter pet health experiences"
          headline="Pet Health Data - An Ambitious Project"
          headlineClassName="titleboxinfo-PHD"
          logoSrc={`${process.env.PUBLIC_URL}/img/Logo_PHD.svg`}
          logoAlt="Pet Health Data"
        >
          <p className="textBoxInfo-PHD">
            <strong>With over 2 million dogs and cats in Switzerland</strong>, the health of our beloved faithful friends is becoming increasingly important and is now part of a global public health system, as animals can also be carriers of viruses in the population. In this context, we were contacted by the SVK (Swiss Association of Small Animal Medicine) <strong>to establish a simple and suitable medical monitoring tool for all pet owners as well as veterinarians.</strong>
          </p>
        </CaseStudyIntro>
        <div className="role-analysis-box-phd">
          <div className="role-content">
            <div className="role-title">
              <span className="bold-text">My role:</span>
              <span className="semi-bold-text"> Understand, define, ideate, and iterate.</span>
            </div>
            <div className="role-description">
              In large-scale projects, it's sometimes challenging to determine where and how to start. Fortunately, "Design Thinking" comes to our aid. With this methodology, I created the "UX Road Map," serving as a reference for the entire team and providing a solid foundation for our decisions. Initially, understanding the motivations of veterinarians was crucial, followed by those of pet owners, which proved to be quite distinct.
            </div>
            <div className="role-columns">
              <div className="role-column">
                <div className="role-column-title">Research</div>
                <div className="role-column-text">- User interviews Survey</div>
                <div className="role-column-text">- Stakeholder workshops</div>
              </div>
              <div className="role-column">
                <div className="role-column-title">Deliverable</div>
                <div className="role-column-text">- Mental Model, Job to be done, Personas/User scenario, User journey, Site Mapping</div>
                <div className="role-column-text">- Wireframing, High fidelity Prototype</div>
              </div>
              <div className="role-column">
                <div className="role-column-title">Outcomes</div>
                <div className="role-column-text">- A Clear Roadmap for Development: A structured plan delineating key milestones, tasks, and timelines to guide the development process efficiently and effectively.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Start animations from here */}
        {/* Quotation_1 */}
        <div className="over-title block2">THE DISCOVERY/UNDERSTAND</div>
        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_blue.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>We organized workshops to establish<br /> 
              a Clarity Canvas, fostering cohesion<br /> 
              in our strategic directions.
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_blue.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        {/* Additional text box with image */}
        <div className="additional-text-box block">
          <p className="title">Strategic Alignment through Research and Clarity Workshops</p>
          <p>Our research delved into the functionalities of the app, conducted through extensive questionnaires across numerous practices. While this provided a solid foundation, prioritization was essential to shape the project and ensure alignment among stakeholders. To achieve this, we organized workshops to establish a "Clarity Canvas", fostering cohesion in our strategic directions.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/clarity_canvas.png`} alt="Clarity Canvas"/>
        </div>

        {/* Quotation_2 */}
        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_blue.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>Outline the contours of the user's mental <br /> 
              model and understand the<br /> 
              "Job To Be Done."
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_blue.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

           {/* Additional text box with image */}
           <div className="additional-text-box block">
          <p className="title">Expectations and motivations of pet owners</p>
          <p>Additionally, understanding the expectations and motivations of pet owners was crucial. Collaborating with the product manager, we conducted a questionnaire with approximately twenty owners to grasp the "Job To Be Done" and outline the user's mental model. This questionnaire, featuring both open and closed questions, yielded valuable insights.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/mental_model.png`} alt="Clarity Canvas"/>
        </div>

        {/* Quotation_3 */}
        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_blue.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>Key behavioral considerations<br /> 
              are essential to good personas.
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_blue.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        {/* Additional text box with image */}
        <div className="additional-text-box block">
          <p>Utilizing this data, I meticulously developed 4 <strong>"User Personas"</strong>, which were then enriched through user interviews conducted via video conference. The aim was to reinforce the importance of <strong>key behavioral considerations</strong> in creating effective personas. With this qualitative data foundation firmly in place, we were well-positioned to formulate hypotheses and proceed with confidence.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/persona.png`} alt="User Personas"/>
        </div>

        {/* Quotation_4 */}
        <div className="over-title block2">DEFINE</div>
        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_blue.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>This phase was aimed at allowing us<br /> 
              to verify the assumptions made <br /> 
              in the first phase.
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_blue.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        {/* Additional text box with image */}
        <div className="additional-text-box block">
          <p className="title">The validation/consolidation phase</p>
          <p>This phase was aimed at allowing us to verify the assumptions made in the first phase. To do so, we conducted contextual inquiries directly in the veterinary practices. We were able to observe both types of users in one place. The idea was to validate the directions taken and solidify our users' mental model, thus refining our scenarios and storyboards.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/scenario.png`} alt="Scenario"/>
        </div>

        {/* Quotation_5 */}
        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_blue.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>A well-organized app has a significant<br /> 
              impact on how the audience searches, <br /> 
              finds, and experiences the website.
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_blue.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        {/* Additional text box with image */}
        <div className="additional-text-box block">
          <p className="title">Defining Taxonomy: Classifying and Organizing!</p>
          <p>The difficulty in this exercise was to find a vocabulary that simply describes specific concepts that are understandable for pet owners and acceptable for veterinarians. Therefore, I chose the "Card Sorting" method to group "Post-its" into families that represented the content of the site.</p>
          <p>The written topics were based on the workshops conducted with stakeholders, as well as the data collected during user interviews. Participants from both sides then had to assemble the topics into groups and assign a name to each group. Experience showed that Pet owners could classify the topics into groups quite well, but had difficulty naming certain groups, especially those related to medical prevention.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/architecture.png`} alt="Architecture"/>
        </div>

        <div className="additional-text-box block">
          <p className="title">Defining the main users Flows</p>
          <p>When collecting information, we also prioritized specific tasks and defined the "Red Routes". Red Routes are the main features of the app and what the user expects in the app (based on their mental model). This completed the architecture of the application and created the "Product Backlog" (list of completed tasks) for the development team.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/user_flow.png`} alt="User Flow"/>
        </div>

        <div className="over-title block2">IDEATION</div>
        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_blue.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>Sketches give you an idea of the structure<br />
              and visual hierarchy of your design.<br />
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_blue.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        <div className="additional-text-box block">
          <p className="title">Sketches to generate ideas quickly.</p>
          <p>Sketches are an important phase as they force you, despite their lack of precision, to consider the visual hierarchy, the number of UI elements to be placed on the page, or even the number of screens needed to achieve a specific user task flow. It also allows for concrete feedback and validation of the best ideas with stakeholders.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/sketching.png`} alt="Sketching"/>
        </div>

        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_blue.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>Wireframing allows for the implementation<br />
              of the entire navigation structure.<br />
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_blue.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        <div className="additional-text-box block">
          <p className="title">Wireframing the navigation structure</p>
          <p>The "Wireframing" phase is a crucial stage of the project, marking the final step before creating the "High Fidelity Prototype." Wireframing involves constructing the entire navigation structure, offering a precise overview of the application. In implementing the wireframe, the approach was to utilize an existing library. For our project, developers opted for Angular to develop the application, benefiting from its excellent library for wireframe development.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/wireframing.png`} alt="Wireframing"/>
        </div>

        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_blue.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>At this point, there should be<br />
              no more surprises!<br />
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_blue.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        <div className="additional-text-box block">
          <p className="title">High Fidelity Prototype and design system</p>
          <p>After validating the artistic direction with the client (including fonts, colors, and logos), only the completion of the "High Fidelity Prototype" remained. At this stage, there should be no surprises, as it's about bringing the project to life and infusing the application with emotional depth. I also developed the design system, encompassing all UI elements such as buttons, checkboxes, and steppers, aligning them with the artistic decisions made.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/hifi.png`} alt="High Fidelity Prototype"/>
        </div>

        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_blue.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>It's akin to an architect handing over<br />
              blueprints to construction engineers<br />
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_blue.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        <div className="additional-text-box block">
          <p className="title">Developer handoff and deliverables</p>
          <p>It is of utmost importance to always collaborate closely with developers! Indeed, decisions regarding UX/UI design have a significant impact on application development timelines. Certain solutions will entail longer or shorter development times.</p>
          <p>Moreover, handing over templates and user flows to the development team is crucial. To use an analogy, it's akin to an architect handing over blueprints to construction engineers. The plans must be precise and clear to ensure the proper execution of the work.</p>
          <p><em>All deliverables are available for viewing upon request. Please feel free to inquire for further details.</em></p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/final_template.png`} alt="Final template"/>
        </div>

        <div className="white-space"></div>

      </div>

      {/* Add the BackButton component at the bottom */}
      <BackButton />
      <Footer />
    </div>
  );
}
