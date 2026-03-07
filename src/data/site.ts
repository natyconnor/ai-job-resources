type Prompt = {
	title: string;
	tag: string;
	text: string;
	followUps?: string[];
};

type PromptGroup = {
	title: string;
	description?: string;
	theme?: "default" | "cover-letter";
	prompts: Prompt[];
};

type CalloutCard = {
	title: string;
	tag?: string;
	description: string;
	bullets?: string[];
	prompt?: string;
};

type ToolCard = {
	title: string;
	href: string;
	image?: string;
	description?: string;
	highlights?: string[];
};

type Tip = {
	title: string;
	text: string;
};

type Section = {
	id: string;
	eyebrow: string;
	title: string;
	description: string;
	strategyDescription?: string;
	tips: Tip[];
	promptGroups: PromptGroup[];
	showStrategyDiagram?: boolean;
	calloutCards?: CalloutCard[];
	toolCards?: ToolCard[];
};

export const site = {
	title: "Using AI to Enhance Your Job Search",
	eyebrow: "Talk resources",
	heading: "Using AI to Enhance Your Job Search",
	description:
		"A companion page for practical prompting tips, reusable examples, and resources from the talk.",
};

export const sections: Section[] = [
	{
		id: "resume-cover-letter",
		eyebrow: "Section 1",
		title: "Resume & Cover Letter",
		description:
			"Use these prompting tips and starter prompts to improve your resume and cover letter workflow.",
		tips: [
			{
				title: "Be specific",
				text:
					"Customize prompts to the role you're applying for to highlight relevant skills and experience. Decide the tone, word count, and details as needed.",
			},
			{
				title: "Use multiple prompts/models",
				text: "Try a few times and choose from the best of the responses.",
			},
			{
				title: "Get Meta",
				text:
					"Have it ask you clarifying questions to help it out. Or have it write an ideal prompt with your experience.",
			},
			{
				title: "Edit",
				text:
					"Check if generated content is accurate. Use AI prompts as a starting point to enhance your resume or cover letter.",
			},
		],
		promptGroups: [
			{
				title: "Resume prompts",
				theme: "default",
				prompts: [
					{
						title: "Resume feedback",
						tag: "Resume",
						text:
							"Give me constructive feedback on my resume for applying to this job. Give me ideas for improvement and ask any clarifying questions that would help me improve my resume",
					},
					{
						title: "Resume bullets",
						tag: "Resume",
						text:
							'Write 4 resume bullet points, with metrics, based on the following job description for a "Data Science Intern". Use my current resume below for reference:',
						followUps: [
							"Can you rewrite these bullet points to be slightly less wordy?",
							"I don't have metrics like this, what should I do for my bullet points?",
						],
					},
				],
			},
			{
				title: "Cover letter prompts",
				theme: "cover-letter",
				prompts: [
					{
						title: "Cover letter draft",
						tag: "Cover letter",
						text:
							"Write a cover letter for the following job description using my resume for reference and keep it less than 400 words:",
					},
					{
						title: "Tailor to the role",
						tag: "Cover letter",
						text:
							"Rewrite my cover letter so it is more tailored to this role. Highlight the 2 to 3 qualifications from the job description that matter most and connect them to my experience without sounding generic.",
					},
					{
						title: "Stronger opening",
						tag: "Cover letter",
						text:
							"Give me 5 different opening paragraphs for this cover letter. Make them sound specific, confident, and aligned with the role rather than generic or overly formal.",
					},
					{
						title: "Shorter version",
						tag: "Cover letter",
						text:
							"Condense this cover letter to about 250 words while keeping the strongest examples and preserving a professional but natural tone.",
					},
				],
			},
		],
	},
	{
		id: "applying-to-jobs",
		eyebrow: "Section 2",
		title: "Applying to Jobs",
		description: "",
		strategyDescription:
			"Most people focus on online applications because they are easy, but they usually produce the fewest results. Referrals and cold outreach take more effort, but they often lead to better opportunities.",
		tips: [],
		showStrategyDiagram: true,
		calloutCards: [
			{
				title: "How to ask for a referral",
				tag: "Referral",
				description:
					"A strong referral request should make the ask explicit and make your value legible. Do not just ask for help. Show why you are a credible fit and make it easy for the other person to forward or support you.",
				bullets: [
					"Include your ask directly: referral, recruiter intro, or hiring manager connection.",
					"Include your value: 2 to 3 lines on relevant experience, impact, or domain fit.",
					"Include the role link and enough context to make helping easy.",
				],
				prompt:
					"Write a referral request email for a job application. Keep it concise, warm, and specific. Mention the exact role, include a direct ask for a referral or recruiter connection, and add 2 to 3 sentences that clearly explain the value I bring based on my background. End with a low-pressure close. Ask me clarifying questions first if you need more context.",
			},
		],
		promptGroups: [
			{
				title: "Cold outreach prompts",
				prompts: [
					{
						title: "Cold outreach to someone in a similar role",
						tag: "Networking",
						text:
							"Write a cold outreach message to someone working at [Company] in a similar role as a [Senior Software Development Engineer], ask for help on how to connect to the hiring manager",
					},
					{
						title: "Cold outreach to the hiring manager",
						tag: "Hiring manager",
						text:
							"Write a cold outreach message to someone who is the Hiring Manager for a [Senior Software Development Engineer] position",
					},
				],
			},
			{
				title: "Finding jobs prompts",
				theme: "cover-letter",
				prompts: [
					{
						title: "Related job titles",
						tag: "Search",
						text:
							"What are the most common titles for software engineering roles that are similar to a software engineer?",
					},
					{
						title: "LinkedIn boolean search",
						tag: "Search",
						text:
							"Write me a linkedin boolean search to look for these kinds of mid-level backend engineering roles",
					},
					{
						title: "Google boolean search",
						tag: "Search",
						text:
							'Write a boolean query to search on Google for a "Software Engineering" position that is remote and on the job board sites greenhouse or lever or ashby',
					},
				],
			},
		],
		toolCards: [
			{
				title: "Hunter.IO",
				description: "Find corporate emails for cold outreach.",
				href: "https://hunter.io",
				image: "https://hunter.io/assets/default-DZUisU9p.jpg",
			},
			{
				title: "Jobright.AI",
				description: "Find matching job descriptions, cater your resume, and auto-apply.",
				href: "https://jobright.ai",
				image: "https://jobright.ai/newimages/seo_logo.png",
			},
		],
	},
	{
		id: "interview-prep",
		eyebrow: "Section 3",
		title: "Interview Prep",
		description:
			"Use AI to generate likely interview questions, practice strong responses, and tighten your stories before the real conversation.",
		tips: [],
		calloutCards: [
			{
				title: "STAR method",
				tag: "Framework",
				description:
					"Use STAR to structure behavioral answers so they are concrete, credible, and easy to follow.",
				bullets: [
					"Situation: Describe the situation you were in.",
					"Task: Describe the task you had to do. Challenges, Constraints, Deadlines, etc.",
					"Action (verb): Describe the action you took. Teamwork, Leadership, Initiative, etc.",
					"Result: Describe the outcome of your actions. Achievements, Improvements, Cost Saving, etc.",
				],
				prompt:
					"Take this interview story and rewrite it using the STAR method. Make it concise, confident, and specific. If any part is weak or missing, tell me what details I should add.",
			},
		],
		promptGroups: [
			{
				title: "Interview prep prompts",
				description: "Use these to generate realistic practice questions and draft strong answers.",
				prompts: [
					{
						title: "Common interview questions",
						tag: "Interview",
						text:
							"Compile a common list of interview questions for a [Job Title] and provide strong, confident answers I can use",
					},
					{
						title: "Behavioral questions",
						tag: "Behavioral",
						text:
							"Compile a common list of behavioral questions for a [Job Title] and provide strong, confident answers I can use",
					},
					{
						title: "Technical questions",
						tag: "Technical",
						text:
							"Compile a common list of technical questions for a [Job Title] and provide strong, confident answers I can use",
					},
				],
			},
		],
		toolCards: [
			{
				title: "LinkedIn Role Play",
				description: "Practice having conversations and get feedback with an AI.",
				highlights: [
					"Good for low-stakes speaking practice",
					"Helps rehearse tone, confidence, and delivery",
					"Useful when you want more repetition than a single mock interview",
				],
				href: "https://www.linkedin.com/learning/role-play/",
			},
			{
				title: "Wispr Flow",
				description: "Advanced dictation software to input your voice into AI chat.",
				highlights: [
					"Good for capturing spoken thoughts quickly",
					"Helpful for brainstorming and refining answers verbally",
					"Can make practice feel more natural than typing everything first",
				],
				href: "https://wisprflow.ai/",
			},
			{
				title: "Accelerate Your Job Search with AI Specialization",
				description: "Google course on job searching with AI.",
				highlights: [
					"Good for building a repeatable process",
					"Covers AI use across multiple parts of the job search",
					"Useful if you want a more guided learning path",
				],
				href: "https://www.coursera.org/google-specializations/google-accelerate-your-job-search-with-ai",
			},
		],
	},
];
