import React, { useState } from 'react';
import styles from './AboutProject.module.css';

/**
 * Enhanced AboutProject component using progressive disclosure accordion
 * Focuses on e-commerce marketplace research and combating misleading product claims
 */
export default function AboutProject() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const accordionSections = [
    {
      id: 'mission',
      icon: '🎯',
      title: 'Our Mission: Combating Misleading Product Claims',
      preview: 'Building accountability mechanisms for honest e-commerce advertising',
      content: (
        <div>
          <p>
            Digital marketplaces like Amazon, Alibaba, and eBay are "two-sided platforms" where sellers advertise products 
            and buyers make purchasing decisions. However, sellers often make misleading claims about product quality, 
            features, or benefits to attract buyers.
          </p>
          <p>
            Our research focuses on creating mechanisms that hold sellers accountable for their advertising claims, 
            protecting consumers from deceptive practices that lead to poor purchasing decisions and market inefficiencies.
          </p>
          <div className={styles.highlightBox}>
            <strong>Goal:</strong> Design interventions that ensure honest advertising in digital marketplaces, 
            rebuilding consumer trust and market integrity.
          </div>
        </div>
      )
    },
    {
      id: 'marketplace',
      icon: '🛒',
      title: 'How Our E-commerce Marketplace Works',
      preview: 'Real human participants simulate buying and selling with advertising claims',
      content: (
        <div>
          <p>
            Our platform bridges economic theory and user interface design, allowing us to study complex marketplace 
            challenges through human participant interactions in a gamified online simulation of real-world e-commerce conditions.
          </p>
          
          <div className={styles.roleComparison}>
            <div className={styles.buyerSection}>
              <h4>👥 Consumer Experience</h4>
              <p className={styles.experienceDescription}>
                Watch how buyers navigate product advertisements and make purchasing decisions in our marketplace simulation.
              </p>
              <ul>
                <li>Browse product advertisements and evaluate claims</li>
                <li>Make purchasing decisions within budget constraints</li>
                <li>Challenge sellers if they believe claims are misleading</li>
                <li>Rate sellers after purchases to build reputation systems</li>
                <li>Learn from experience to avoid deceptive advertisements</li>
              </ul>
            </div>
            
            <div className={styles.sellerSection}>
              <h4>🏪 Producer Experience</h4>
              <p className={styles.experienceDescription}>
                See how sellers create advertisements and manage their reputation in our experimental platform.
              </p>
              <ul>
                <li>Create product advertisements with quality claims</li>
                <li>Set quality levels and pricing strategies</li>
                <li>Choose to warrant their claims with financial backing</li>
                <li>Face consequences for misleading advertisements</li>
                <li>Build reputation through honest business practices</li>
              </ul>
            </div>
          </div>
          
          <p>
            Just like real e-commerce platforms, our marketplace includes reputation systems, 
            product reviews, and now introduces "Truth Warrants" as an innovative accountability mechanism.
          </p>
          
          <div className={styles.experimentalNote}>
            <strong>Experimental Design:</strong> Participants are randomly assigned to buyer or seller roles, 
            creating authentic market dynamics where real human psychology and decision-making drive the outcomes.
          </div>
        </div>
      )
    },
    {
      id: 'warrants',
      icon: '⚖️',
      title: 'Truth Warrants: Financial Accountability for Sellers',
      preview: 'Sellers back their advertising claims with money to ensure honesty',
      content: (
        <div>
          <p>
            <strong>Truth Warrants</strong> are our innovative solution to misleading product claims. 
            Sellers can voluntarily escrow money to back their advertising claims, creating direct financial accountability.
          </p>
          
          <div className={styles.warrantMechanism}>
            <div className={styles.mechanismStep}>
              <span className={styles.stepNumber}>1</span>
              <div>
                <strong>Seller Makes Claim:</strong> "This product has X feature" or "High quality guaranteed"
              </div>
            </div>
            <div className={styles.mechanismStep}>
              <span className={styles.stepNumber}>2</span>
              <div>
                <strong>Optional Warrant:</strong> Seller can escrow money to back their claim
              </div>
            </div>
            <div className={styles.mechanismStep}>
              <span className={styles.stepNumber}>3</span>
              <div>
                <strong>Buyer Challenge:</strong> If claim is false, buyer can challenge and win the escrowed money
              </div>
            </div>
          </div>

          <div className={styles.comparisonTable}>
            <h4>Truth Warrants vs. Traditional Guarantees</h4>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Traditional Guarantees</th>
                  <th>Truth Warrants</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Linked to specific claims</td>
                  <td>❌ Usually product-wide</td>
                  <td>✅ Specific advertising claims</td>
                </tr>
                <tr>
                  <td>Financial backing</td>
                  <td>⚠️ Sometimes</td>
                  <td>✅ Always when warranted</td>
                </tr>
                <tr>
                  <td>Third-party verification</td>
                  <td>❌ Internal processes</td>
                  <td>✅ Decentralized challenges</td>
                </tr>
                <tr>
                  <td>Immediate consequences</td>
                  <td>❌ Slow dispute resolution</td>
                  <td>✅ Instant financial penalty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'experiments',
      icon: '🔬',
      title: 'Why Virtual Lab Experiments Matter',
      preview: 'Controlled environments reveal how interventions affect marketplace behavior',
      content: (
        <div>
          <p>
            Traditional approaches to combating misleading claims in marketplaces have shown limited efficacy. 
            Our virtual laboratory allows us to test interventions in controlled environments before real-world implementation.
          </p>
          
          <div className={styles.experimentBenefits}>
            <div className={styles.benefit}>
              <h4>🔄 Rapid Testing</h4>
              <p>Test multiple intervention designs quickly and cost-effectively</p>
            </div>
            <div className={styles.benefit}>
              <h4>📊 Controlled Variables</h4>
              <p>Isolate the effects of specific mechanisms on marketplace behavior</p>
            </div>
            <div className={styles.benefit}>
              <h4>🔍 Behavioral Insights</h4>
              <p>Understand how real people respond to accountability mechanisms</p>
            </div>
            <div className={styles.benefit}>
              <h4>📈 Scalable Solutions</h4>
              <p>Design interventions that work across different market conditions</p>
            </div>
          </div>

          <div className={styles.methodologyNote}>
            <p>
              <strong>Our Approach:</strong> Using tools like Empirica, we create replicable experiments 
              that can be run multiple times with different participant groups, ensuring robust and 
              generalizable results for platform governance solutions.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className={styles.aboutProjectSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.mainTitle}>What are we building?</h2>
        <p className={styles.sectionDescription}>
          Explore how our behavioral experiments reveal the mechanisms needed to combat 
          misleading product claims in digital marketplaces.
        </p>
      </div>

      <div className={styles.accordionContainer}>
        {accordionSections.map((section) => (
          <div 
            key={section.id} 
            className={`${styles.accordionItem} ${activeSection === section.id ? styles.active : ''}`}
          >
            <button
              className={styles.accordionHeader}
              onClick={() => toggleSection(section.id)}
              aria-expanded={activeSection === section.id}
              aria-controls={`content-${section.id}`}
            >
              <div className={styles.headerContent}>
                <span className={styles.sectionIcon}>{section.icon}</span>
                <div className={styles.headerText}>
                  <h3 className={styles.sectionTitle}>{section.title}</h3>
                  <p className={styles.sectionPreview}>{section.preview}</p>
                </div>
              </div>
              <span className={styles.chevron}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
            
            {activeSection === section.id && (
              <div 
                id={`content-${section.id}`}
                className={styles.accordionContent}
                role="region"
                aria-labelledby={`header-${section.id}`}
              >
                <div className={styles.contentWrapper}>
                  {section.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>


    </section>
  );
}