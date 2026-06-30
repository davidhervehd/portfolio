import React from 'react';
import Footer from '../Components/Footer'; // Adjust the path according to your project structure
import BackButton from '../Components/BackButton'; // Import the BackButton component
import CaseStudyIntro from '../Components/CaseStudyIntro';
import '../Styles_css/eSmart.css'; // Adjust the path according to your project structure

export default function DigitalStrom() {
  return (
    <div className="main-content case-study-page">
      <header>
        <img src={`${process.env.PUBLIC_URL}/img/visualcase2.jpg`} alt="Digital Strom Header PetHealthData" className="header-image" />
      </header>
      <div className="content">
        <CaseStudyIntro
          boxClassName="info-box-es"
          projectName="eSmart"
          projectSubtitle="Make the energy tangible"
          headline="Empowering Energy Efficiency with eSMART"
          headlineClassName="titleboxinfo-es"
          logoSrc={`${process.env.PUBLIC_URL}/img/Logo_eSmart.svg`}
          logoAlt="eSmart"
        >
          <p className="textboxinfo">eSMART technology is a system that integrates various sensors and monitoring devices <strong>to collect real-time data on environmental parameters such as temperature, humidity, air quality, light levels</strong>, and more.  This data can be used for various applications such as building automation or energy management.</p>
          <p className="textboxinfo">In my role for their new application, "EVO," I was assigned the responsibility of identifying and implementing solutions that would increase the adoption of the <strong>innovative energy solution</strong>.</p>
        </CaseStudyIntro>
        <div className="role-analysis-box-es">
          <div className="role-content">
            <div className="role-title"><span className="bold-text">My role:</span>
            <span className="semi-bold-text"> Transform problem statements into actionable solutions</span>
            </div>
            <div className="role-description">
              My role involves building upon existing research to delve deeper into user 
              behaviors, preferences, and needs. By leveraging insights from previous marketing studies, I identify gaps, refine hypotheses, and conduct targeted research to gain a deeper understanding of how to make energy consumption/production more tangible to the user.
            </div>
            <div className="role-columns">
              <div className="role-column">
                <div className="role-column-title">Research</div>
                <div className="role-column-text">- Research based on the study of the TAM model (Technology Acceptance Model) to understand user behaviors and preferences.</div>
                <div className="role-column-text">- Exploration of strategies to make energy consumption/production more tangible.</div>
              </div>
              <div className="role-column">
                <div className="role-column-title">Deliverable</div>
                <div className="role-column-text">- Detailed report summarizing findings from literature review and marketing studies.</div>
                <div className="role-column-text">- List of problem statements to guide the ideation design phase.</div>
              </div>
              <div className="role-column">
                <div className="role-column-title">Outcomes</div>
                <div className="role-column-text">- Template recommendations for enhancing the tangibility of energy consumption/production, derived from research insights and problem statements.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Start scroll-driven animations from here */}
        {/* Quotation_1 */}
        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_red.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>An adoption model or construct<br />
              refers to a framework or theory...
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_red.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        {/* Additional text box */}
        <div className="additional-text-box block">
          <p className="title">How to discover the key adoption factors - The adoption model</p>
          <p>An adoption model in marketing refers to a framework or theory that explains how and why consumers adopt new products or innovations. These models typically outline the stages or processes through which individuals progress when deciding to adopt a new product</p>
          <p><strong>How to discover the key adoption factors</strong> related to innovative products to ensure an acceptable and usable product for users. This is what this research is based on in order to highlight factors such as:</p>
        </div>

        {/* Additional text box with padding */}
        <div className="additional-text-box padding block">
          <p className='bullet'>What are the key factors of products and consumer behaviors that ensure an acceptable and usable product for users;</p>
          <p className='bullet2'>To what extent does the consumer's attitude towards innovation impact its adoption;</p>
          <p className='bullet2'>How does the use of innovation impact consumer well-being and satisfaction?</p>
          <p className="boldtitle">The responses to these questions aim to:</p>
          <p className='bullet'><strong>Discover the key adoption factors</strong> related to these products to ensure a product that is acceptable and usable for users.</p>
          <p className='bullet2'>Understand <strong>consumers' attitudes</strong> towards innovation.</p>
          <p className='bullet2'>Uncover the impact on <strong>well-being and satisfaction</strong> after usage.</p>
          <div className="white-space2"></div>

          {/* Adjusted block with animation */}
          <div className='block'>
            <p><em>Concept model of adoption chosen by the researcher and on which further research is based.</em></p>
            <img className="model_adoption" src={`${process.env.PUBLIC_URL}/img/model_adoption.png`} alt="Left Quote"/>
          </div>
        </div>

        <div className="white-space2"></div>
        <div className="additional-text-box block">
          <p>Once the conceptual model is established, here are the steps that were followed to generate a questionnaire and a detailed report.</p>
          <img className="model_adoption" src={`${process.env.PUBLIC_URL}/img/model_questionary.png`} alt="Left Quote"/>
        </div>

        <div className="white-space2"></div>
        <div className="additional-text-box block">
          <p className="title">Conclusion</p>  
          <p>I won't go into the details of the analysis that was produced; however, here are some important points. </p> 
          <p className='bullet'>Consumer attitude towards innovation has a strong influence on adoption. A consumer with a positive attitude will facilitate the adoption of innovation.</p>
          <p className='bullet'>We have also been able to confirm the strong influence of usage intention on innovation adoption.</p>
          <p className='bullet3'>Regarding usage, we found that 2 out of 3 people have adopted the innovation studied, and 1 out of 4 people do not use the product. The data allowed us to observe that buyers adopt more than renters.</p>
          <p>This study has allowed me to confirm my intuition that <strong>perception is a key attribute of the adoption</strong> or acceptance of a new technology. Indeed, a product perceived as complicated will decrease its adoption.</p>
        </div>

        {/* Quotation_2 */}
        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_red.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>Unlocking Adoption: Enhancing Energy<br />
              Tangibility Through User Perception
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_red.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        {/* Additional text box */}
        <div className="additional-text-box block">
  
  {/* Animate this section */}
  <div className="block">
    <p className="title">Make abstract concepts more concrete or perceptible to users</p>
    <p><strong>In the context of energy, tangibility refers to making the abstract concept of energy more concrete or perceptible to users.</strong> This might involve providing tangible representations or physical manifestations of energy, such as visualizations, interactive displays, or tangible objects that represent energy consumption or production. The goal is to help users better understand and engage with energy-related concepts by making them more tangible and accessible.</p>
  </div>

  {/* Animate this section separately */}
  <div className="block">
    <p><strong>The research axes to make energy more tangible to users:</strong></p>
    <p>After some further research in collaboration with the product manager and some stakeholders, I was able to establish a list of problem statements suitable for the start of the design phase...</p>
    <img src={`${process.env.PUBLIC_URL}/img/axes.png`} alt="Google Play Icon" className="comment-axes" />
  </div>

</div>

        {/* Quotation_3 */}
        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_red.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>Transform the problem statement <br />
              into ideation.
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_red.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        {/* Additional text box */}
        <div className="additional-text-box block">
          <p className="title">The research axes to make energy more tangible to users:</p>
          <p>After some further research in collaboration with the product manager and some stakeholders, I was able to establish a list of problem statements suitable for the start of the design phase...</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/axes_2.png`} alt="Left Quote"/>
          <div className="white-space"></div>
          <p>In the context of our <strong>MVP (Minimum Viable Product)</strong> approach, we prioritized features using <strong>the MoSCoW method (Must have, Should have, Could have, Won't have)</strong>. Initially, our focus was on the "Meter" and "Analysis" modules.
          For the "Analysis" module, we decided to begin with presenting and interpreting consumption data, relying on various key indicators such as consumption peaks, etc.</p>
        </div>

        {/* Quotation_4 */}
        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_red.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>Ideation and sketching</em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_red.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        {/* Additional text box */}
        <div className="additional-text-box block">
          <p>Sketching in design is like brainstorming with a pencil and paper. <strong>It's quick, flexible, and helps you explore ideas visually without getting bogged down by digital tools</strong>. You can sketch out different concepts, refine details on the fly, and easily share your ideas with others. It's not just about drawing—it's about sparking creativity, collaborating effectively, and ultimately, coming up with innovative solutions faster. Sketching early in the process allows you to iterate quickly, ensuring that everyone is on the same page before diving into more detailed designs. It's a powerful tool that enhances creativity, speeds up decision-making, and leads to better user experiences.</p>
          <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/sketches.png`} alt="Left Quote"/>
        </div>

        {/* Quotation_5 */}
        <div className="quotation-box block">
          <hr className="quotation-line"/>
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img src={`${process.env.PUBLIC_URL}/img/quot_left_red.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
            </div>
            <div className="quotation-text">
              <em>Sketches to High Fidelity Prototype</em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img src={`${process.env.PUBLIC_URL}/img/quote_right_red.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
            </div>
          </div>
          <hr className="quotation-line"/>
        </div>

        {/* Additional text box */}
        <div className="additional-text-box block">
          <p><strong>These detailed and polished versions provide a realistic representation of the final product</strong>, enabling thorough testing and feedback. This progression from sketches to high-fidelity prototypes ensures that our designs are both innovative and practical, ready for implementation.</p>
          
          {/* Ensure images also animate correctly */}
          <img className="theme_anal block" src={`${process.env.PUBLIC_URL}/img/meters.png`} alt="Left Quote"/>
          <img className="theme_anal block" src={`${process.env.PUBLIC_URL}/img/analysis.png`} alt="Left Quote"/>

          <p>The high-fidelity screens are now ready, <strong>allowing us to move forward with usability testing and gather detailed feedback from users</strong>. With these polished prototypes, we can also begin collaborating with developers to ensure a smooth transition to the final product implementation.</p>
          <div className="white-space"></div>
        </div>
        
        {/* Add the BackButton component at the bottom */}
        <BackButton />

      </div>
      <Footer />
    </div>
  );
}
