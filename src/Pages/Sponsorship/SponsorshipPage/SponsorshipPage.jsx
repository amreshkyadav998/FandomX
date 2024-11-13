import React from 'react';
import SponsorshipSection from './SponsorshipSection.jsx';
import './SponsorshipPage.css';

const SponsorshipPage = () => {
  const sections = [
    {
      id: 1,
      title: 'Save Time on Competitive Intelligence',
      content: [
        'Gain competitive advantage with breakdown of deals and campaigns',
        'Uncover emerging trends by industry, category, or market',
        'Access exclusive custom reporting with lightning-fast turnaround times',
      ],
      image: '/assets/nsp2.png', 
      alignment: 'left',
    },
    {
      id: 1,
      title: 'Negotiate the Right Partnerships',
      content: [
        'Identify ideal partners aligned with your brand values',
        'Maximize reach through strategic collaborations',
        'Build long-term, mutually beneficial relationships',
      ],
      image: '/assets/nsp3.jpg', 
      alignment: 'right',
    },
    {
      id: 2,
      title: 'Optimize Your Marketing Strategy',
      content: [
        'Get personalized insights for targeted marketing',
        'Stay ahead of the competition with trend analysis',
        'Engage your audience with data-driven strategies',
      ],
      image: '/assets/nsp4.jpeg', 
      alignment: 'left',
    },
    {
      id: 3,
      title: 'Discover Opportunities for Brand Growth',
      content: [
        'Uncover untapped markets and customer segments',
        'Expand brand reach with innovative approaches',
        'Strengthen brand equity in competitive landscapes',
      ],
      image: '/assets/nsp5.jpg',
      alignment: 'right',
    },
    {
      id: 4,
      title: 'Enhance Brand Visibility',
      content: [
        'Increase exposure across diverse channels',
        'Leverage impactful content to boost awareness',
        'Create memorable experiences for target audiences',
      ],
      image: '/assets/nsp6.png',
      alignment: 'left',
    },
    {
      id: 5,
      title: 'Boost Campaign Performance',
      content: [
        'Optimize campaigns for higher engagement rates',
        'Utilize analytics to fine-tune strategies',
        'Ensure efficient use of resources for maximum ROI',
      ],
      image: '/assets/nsp8.jpg', 
      alignment: 'right',
    }
  ];

  return (
    <div className="m-9 gap-9 p-9">
      {sections.map((section) => (
        <SponsorshipSection
          key={section.id}
          title={section.title}
          content={section.content}
          image={section.image}
          alignment={section.alignment}
        />
      ))}
    </div>
  );
};

export default SponsorshipPage;
