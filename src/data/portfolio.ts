import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Swarup Dhar",
    "title": "Sales & Marketing Professional",
    "email": "Swarupdhar8@gmail.com",
    "phone": "+91 8473088485",
    "linkedin": "https://www.linkedin.com/in/swarup-dr/",
    "github": "",
    "location": "Assam, India",
    "summary": "Outbound and Inbound Marketing professional with expertise in targeted prospecting, optimized workflows, and effective communication. Experienced in LinkedIn Sales Navigator, Boolean search, and CRM systems, with a strong ability to solve problems and deliver results that support revenue growth in fast-paced environments."
  },
  "experience": [
    {
      "title": "Sales and Marketing Specialist",
      "company": "DevVoid",
      "dates": "02/2022 - 10/2024",
      "description": "Led the company's outbound marketing function, including email outreach, campaign management, and social media prospecting.",
      "highlights": [
        "Managed and grew DevVoid’s social media presence.",
        "Executed high conversion outbound campaigns using LinkedIn Sales Navigator and AI tools.",
        "Created and published content to improve visibility and engagement.",
        "Trained and led a team of 20 lead generation representatives.",
        "Overachieved sales targets, contributing to monthly revenue of over $200,000."
      ]
    },
    {
      "title": "Lead Gen Manager",
      "company": "Agent On Tube",
      "dates": "01/2025 - 10/2025",
      "description": "Freelance role focusing on inside sales and lead generation.",
      "highlights": [
        "Helped 100+ clients generate leads using LinkedIn Sales Navigator.",
        "Delivered organized lead data for client pipelines.",
        "Built strong repeat-business relationships."
      ]
    },
    {
      "title": "Inside Sales Freelancer",
      "company": "Upwork",
      "dates": "05/2021 - 02/2022",
      "description": "Freelance position focused on supporting client lead pipelines.",
      "highlights": []
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Commerce",
      "institution": "Assam University",
      "years": "01/2016 - 12/2018",
      "gpa": ""
    },
    {
      "degree": "Higher Secondary",
      "institution": "Vivekananda College",
      "years": "01/2014 - 12/2015",
      "gpa": ""
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": []
};

export const sectionConfig: SectionConfig = {
  "hero": "floating-shapes",
  "about": "modern",
  "experience": "detailed",
  "projects": "showcase",
  "skills": "categories",
  "skillsDisplay": "hero",
  "contact": "card",
  "colorPalette": "slate"
};
