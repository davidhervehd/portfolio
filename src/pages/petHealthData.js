import React, { useRef, useEffect } from 'react';
import Footer from '../Components/Footer'; // Assurez-vous que le chemin est correct
import BackButton from '../Components/BackButton'; // Assurez-vous que le chemin est correct
import '../Styles_css/petHealthData.css'; // Assurez-vous que le chemin est correct

export default function PetHealthData() {
  const blockRefs = useRef([]); // Utilisation de useRef pour stocker les références des éléments

  useEffect(() => {
    const handleScroll = () => {
      blockRefs.current.forEach((block) => {
        if (block) {
          const rect = block.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Calculer le progrès de défilement
          const start = windowHeight * 0.75; // Commencer à 75% de la hauteur de la fenêtre
          const end = windowHeight * 0.25;   // Finir à 25% de la hauteur de la fenêtre

          // Calculer le progrès de l'animation (0 lorsque l'élément commence à apparaître, 1 quand complètement visible)
          let progress = 1 - (rect.top - end) / (start - end);
          progress = Math.max(0, Math.min(1, progress)); // S'assurer que le progrès est entre 0 et 1

          // Appliquer l'animation basée sur le défilement
          block.style.transform = `scale(${0.5 + progress * 0.5})`; // Scaler de 0.5 à 1
          block.style.opacity = progress; // Faire apparaître de 0 à 1
        }
      });
    };

    window.addEventListener('scroll', handleScroll); // Ajout de l'écouteur de l'événement scroll

    // Initialiser l'animation quand le composant est monté
    handleScroll();

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Le tableau de dépendances vide signifie que cet effet ne s'exécute qu'une fois après le montage

  return (
    <div className="main-content">
      <header>
        <img
          src={`${process.env.PUBLIC_URL}/img/visualcase3.jpg`}
          alt="Digital Strom Header PetHealthData"
          className="header-image-phd"
        />
      </header>
      <div className="content">
        <div className="info-box-phd">
          <p className="titleboxinfo-PHD">Pet Health Data - An Ambitious Project</p>
          <p className="textBoxInfo-PHD">
            <strong>With over 2 million dogs and cats in Switzerland</strong>, the health of our beloved faithful friends is becoming increasingly important and is now part of a global public health system, as animals can also be carriers of viruses in the population. In this context, we were contacted by the SVK (Swiss Association of Small Animal Medicine) <strong>to establish a simple and suitable medical monitoring tool for all pet owners as well as veterinarians.</strong>
          </p>
        </div>
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
        <div className="over-title block2" ref={(el) => blockRefs.current.push(el)}>THE DISCOVERY/UNDERSTAND</div>
        <div className="quotation-box block" ref={(el) => blockRefs.current.push(el)}>
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
        <div className="additional-text-box block" ref={(el) => blockRefs.current.push(el)}>
          <p className="title">. Strategic Alignment through Research and Clarity Workshops</p>
          <p>Our research delved into the functionalities of the app, conducted through extensive questionnaires across numerous practices. While this provided a solid foundation, prioritization was essential to shape the project and ensure alignment among stakeholders. To achieve this, we organized workshops to establish a "Clarity Canvas", fostering cohesion in our strategic directions.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/clarity_canvas.png`} alt="Clarity Canvas"/>
        </div>

        {/* Quotation_2 */}
        <div className="quotation-box block" ref={(el) => blockRefs.current.push(el)}>
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
           <div className="additional-text-box block" ref={(el) => blockRefs.current.push(el)}>
          <p className="title">. Expectations and motivations of pet owners</p>
          <p>Additionally, understanding the expectations and motivations of pet owners was crucial. Collaborating with the product manager, we conducted a questionnaire with approximately twenty owners to grasp the "Job To Be Done" and outline the user's mental model. This questionnaire, featuring both open and closed questions, yielded valuable insights.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/mental_model.png`} alt="Clarity Canvas"/>
        </div>

        {/* Quotation_3 */}
        <div className="quotation-box block" ref={(el) => blockRefs.current.push(el)}>
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
        <div className="additional-text-box block" ref={(el) => blockRefs.current.push(el)}>
          <p>Utilizing this data, I meticulously developed 4 <strong>"User Personas"</strong>, which were then enriched through user interviews conducted via video conference. The aim was to reinforce the importance of <strong>key behavioral considerations</strong> in creating effective personas. With this qualitative data foundation firmly in place, we were well-positioned to formulate hypotheses and proceed with confidence.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/persona.png`} alt="User Personas"/>
        </div>

        {/* Quotation_4 */}
        <div className="over-title block2" ref={(el) => blockRefs.current.push(el)}>DEFINE</div>
        <div className="quotation-box block" ref={(el) => blockRefs.current.push(el)}>
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
        <div className="additional-text-box block" ref={(el) => blockRefs.current.push(el)}>
          <p className="title">. The validation/consolidation phase</p>
          <p>This phase was aimed at allowing us to verify the assumptions made in the first phase. To do so, we conducted contextual inquiries directly in the veterinary practices. We were able to observe both types of users in one place. The idea was to validate the directions taken and solidify our users' mental model, thus refining our scenarios and storyboards.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/scenario.png`} alt="Scenario"/>
        </div>

        {/* Quotation_5 */}
        <div className="quotation-box block" ref={(el) => blockRefs.current.push(el)}>
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
        <div className="additional-text-box block" ref={(el) => blockRefs.current.push(el)}>
          <p className="title">. Defining Taxonomy: Classifying and Organizing!</p>
          <p>The difficulty in this exercise was to find a vocabulary that simply describes specific concepts that are understandable for pet owners and acceptable for veterinarians. Therefore, I chose the "Card Sorting" method to group "Post-its" into families that represented the content of the site.</p>
          <p>The written topics were based on the workshops conducted with stakeholders, as well as the data collected during user interviews. Participants from both sides then had to assemble the topics into groups and assign a name to each group. Experience showed that Pet owners could classify the topics into groups quite well, but had difficulty naming certain groups, especially those related to medical prevention.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/architecture.png`} alt="Architecture"/>
        </div>

        {/* Continue applying the same logic for all remaining elements */}

        {/* Additional text box with image */}
        <div className="additional-text-box block" ref={(el) => blockRefs.current.push(el)}>
          <p className="title">. Defining the main users Flows</p>
          <p>When collecting information, we also prioritized specific tasks and defined the "Red Routes". Red Routes are the main features of the app and what the user expects in the app (based on their mental model). This completed the architecture of the application and created the "Product Backlog" (list of completed tasks) for the development team.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/user_flow.png`} alt="User Flow"/>
        </div>

        {/* Continue applying the same logic for all elements that should have animations */}

      </div>

      {/* Add the BackButton component at the bottom */}
      <BackButton />
      <Footer />
    </div>
  );
}
