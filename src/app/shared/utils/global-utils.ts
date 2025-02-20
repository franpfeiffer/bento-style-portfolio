import {
	IDevToolsElement,
	IProjectCard,
	IExperienceCard,
} from '../models/global-interface.ts'
import { v4 as uuid } from 'uuid'
import t2_img from '../../../assets/t2.png'
import limpify_img from '../../../assets/limpify.png'
import codeimage_img from '../../../assets/codecanvas.png'
import devminds_img_back from '../../../assets/devmind-b2.png'
import devminds_img_b from '../../../assets/devmind-w-square.png'
import gsk_img from '../../../assets/gsk.png'
import gaucho_img from '../../../assets/gaucho-logo.webp'
import gaucho_img_bg from '../../../assets/gauchodigital-bg.webp'

export const Projects: IProjectCard[] = [
	{
		id: uuid(),
		project_name: 'Herpes Zoster',
		description: 'projects-section.projects.gsk',
		screenShot: gsk_img,
		demoLink: 'https://www.hablemosdezoster.com/',
		className: 'lg:row-span-3 xl:col-span-4',
		index: 1,
		technologies: ['Next', 'React', 'TypeScript', 'TailwindCSS'],
	},
	{
		id: uuid(),
		project_name: 'Limpify',
		description: 'projects-section.projects.limpify',
		screenShot: limpify_img,
		demoLink: 'https://limpify-demo.vercel.app/',
		className: 'lg:row-span-2 xl:col-span-4',
		index: 2,
		technologies: ['React', 'TypeScript', 'CSS3'],
	},
	{
		id: uuid(),
		project_name: 'T2',
		description: 'projects-section.projects.t2',
		screenShot: t2_img,
		demoLink: 'https://github.com/franpfeiffer/t2',
		className: 'lg:row-span-3 xl:col-span-4',
		isPrivate: true,
		index: 3,
		technologies: ['Go', 'Ruby', 'Json'],
	},
	{
		id: uuid(),
		project_name: 'Codimage',
		description: 'projects-section.projects.codimage',
		screenShot: codeimage_img,
		demoLink: 'https://codimage.vercel.app/',
		className: 'lg:row-span-2 xl:col-span-4',
        isPrivate: true,
		index: 4,
		technologies: ['Nextjs', 'React', 'TypeScript', 'TailwindCSS'],
	},
]
export const Experiences: IExperienceCard[] = [
	{
		id: uuid(),
		company_logo: devminds_img_b,
		company_name: 'DevMinds',
		position_name: 'Software Developer',
		dates: 'experience-section.companies.devmind.dates',
		url_site: 'https://devminds.vercel.app/',
        git_code: 'https://github.com/franpfeiffer/DevMinds-Landing-page',
		background_url: devminds_img_back,
	},
	{
		id: uuid(),
		company_logo: gaucho_img,
		company_name: 'Gaucho Digital',
		position_name: 'Software Developer',
		dates: 'experience-section.companies.gaucho.dates',
		url_site: 'https://gaucho.digital/',
        git_code: 'https://github.com/MarcoSavarin0/landing-for-gaucho',
		background_url: gaucho_img_bg,
	},
]

export const DevTools: IDevToolsElement[] = [
	{
		id: uuid(),
		name: 'HTML5',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
	},
	{
		id: uuid(),
		name: 'CSS3',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
	},
	{
		id: uuid(),
		name: 'Tailwind CSS',
		icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
	},
	{
		id: uuid(),
		name: 'JavaScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
	},
	{
		id: uuid(),
		name: 'TypeScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
	},
	{
		id: uuid(),
		name: 'React',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		id: uuid(),
		name: 'Golang',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
	},
	{
		id: uuid(),
		name: 'Java',
		icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
	},
	{
		id: uuid(),
		name: 'Node.js',
		icon: 'https://www.svgrepo.com/show/355140/node.svg',
	},
	{
		id: uuid(),
		name: 'SQL',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Sql_data_base_with_logo.svg',
	},
	{
		id: uuid(),
		name: 'Figma',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
	},
	{
		id: uuid(),
		name: 'Adobe Premiere Pro',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg',
	},
	{
		id: uuid(),
		name: 'Adobe Illustrator',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
	},
	{
		id: uuid(),
		name: 'Adobe Photoshop',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
	},
	{
		id: uuid(),
		name: 'Adobe After Effects',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg',
	},
]
