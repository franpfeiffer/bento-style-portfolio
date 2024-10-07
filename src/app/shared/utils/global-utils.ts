import {
	IDevToolsElement,
	IProjectCard,
	IExperienceCard,
} from '../models/global-interface.ts'
import { v4 as uuid } from 'uuid'
import chess_app from '../../../assets/chessapp.png'
import codeimage_img from '../../../assets/codecanvas.png'
import devminds_img from '../../../assets/devminds-web.png'
import devminds_img_back from '../../../assets/devmind-b2.png'
import devminds_img_b from '../../../assets/devmind-w-square.png'
import rugbyclick_photo from '../../../assets/rugbyclick-photo.png'
import femme_img from '../../../assets/femme-logo.jpg'
import femme_img_bg from '../../../assets/femme-logo-bg.jpg'

export const Projects: IProjectCard[] = [
	{
		id: uuid(),
		project_name: 'RugbyClick',
		description: 'projects-section.projects.rugbyclick',
		screenShot: rugbyclick_photo,
		demoLink: 'https://rugbyclick-test.vercel.app',
		className: 'lg:row-span-3 xl:col-span-4',
		index: 1,
		technologies: ['Nextjs', 'React', 'TypeScript', 'TailwindCSS'],
	},
	{
		id: uuid(),
		project_name: 'Chess App',
		description: 'projects-section.projects.chessapp',
		screenShot: chess_app,
		demoLink: 'https://chesspvp.vercel.app',
		className: 'lg:row-span-2 xl:col-span-4',
		isPrivate: true,
		index: 2,
		technologies: ['React', 'TypeScript', 'CSS3'],
	},
	{
		id: uuid(),
		project_name: 'DevMinds',
		description: 'projects-section.projects.devminds',
		screenShot: devminds_img,
		demoLink: 'https://devminds.vercel.app',
		className: 'lg:row-span-3 xl:col-span-4',
		index: 3,
		technologies: ['Nextjs', 'React', 'TypeScript', 'TailwindCSS'],
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
		position_name: 'DevMinds',
		dates: 'experience-section.companies.devmind.dates',
		url_site: 'https://devminds.vercel.app/',
        git_code: 'https://github.com/franpfeiffer/DevMinds-Landing-page',
		background_url: devminds_img_back,
	},
	{
		id: uuid(),
		company_logo: femme_img,
		company_name: 'Femme',
		position_name: 'Femme',
		dates: 'experience-section.companies.femme.dates',
		url_site: 'https://www.instagram.com/femmelenceria/',
        git_code: 'https://github.com/franpfeiffer/femme',
		background_url: femme_img_bg,
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
		name: 'Tailwind CSS',
		icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
	},
	{
		id: uuid(),
		name: 'Next.js',
		icon: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
		className: 'dark:invert opacity-70',
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
		name: 'C#',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg',
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
		name: 'DaVinci Resolve Studio',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg',
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
