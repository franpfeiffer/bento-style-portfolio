import {
    IDevToolsElement,
    IProjectCard,
    IExperienceCard,
} from '../models/global-interface.ts'
import { v4 as uuid } from 'uuid'
import t2_img from '../../../assets/t2.png'
import stda_img from '../../../assets/stda.png'
import term2_img from '../../../assets/term2.png'
import devminds_img_back from '../../../assets/devmind-b2.png'
import devminds_img_b from '../../../assets/devmind-w-square.png'
import gsk_img from '../../../assets/gsk.png'
import gaucho_img from '../../../assets/gaucho-logo.webp'
import gaucho_img_bg from '../../../assets/gauchodigital-bg.webp'
import pokerpay_img from '../../../assets/pokerpay.png'
import showdown_img from '../../../assets/showdown.png'
import vsr_img from '../../../assets/vsr.jpg'
import bdm_img from '../../../assets/bdm.jpg'

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
        project_name: 'Saber te da aire',
        description: 'projects-section.projects.stda',
        screenShot: stda_img,
        demoLink: 'https://sabertedaaire.com.ar/',
        className: 'lg:row-span-2 xl:col-span-4',
        index: 2,
        technologies: ['React', 'JavaScript', 'CSS3'],
    },
    {
        id: uuid(),
        project_name: 'Virus Sincicial Respiratorio',
        description: 'projects-section.projects.vsr',
        screenShot: vsr_img,
        demoLink: 'https://virusvsr.com/',
        className: 'lg:row-span-3 xl:col-span-4',
        isPrivate: false,
        index: 3,
        technologies: ['HTML', 'CSS3', 'JavaScript'],
    },
    {
        id: uuid(),
        project_name: 'Basta de Meningitis',
        description: 'projects-section.projects.bdm',
        screenShot: bdm_img,
        demoLink: 'https://www.bastademeningitis.com.ar/',
        className: 'lg:row-span-2 xl:col-span-4',
        isPrivate: false,
        index: 4,
        technologies: ['JavaScript', 'HTML', 'CSS3'],
    },
    {
        id: uuid(),
        project_name: 'TERM2',
        description: 'projects-section.projects.term2',
        screenShot: term2_img,
        demoLink: 'https://github.com/franpfeiffer/term2.nvim',
        className: 'lg:row-span-3 xl:col-span-4',
        isPrivate: true,
        index: 5,
        technologies: ['Lua'],
    },
    {
        id: uuid(),
        project_name: 'T2',
        description: 'projects-section.projects.t2',
        screenShot: t2_img,
        demoLink: 'https://github.com/franpfeiffer/t2',
        className: 'lg:row-span-2 xl:col-span-4',
        isPrivate: true,
        index: 6,
        technologies: ['Go', 'Ruby', 'Json'],
    },
    {
        id: uuid(),
        project_name: 'PokerPay',
        description: 'projects-section.projects.pokerpay',
        screenShot: pokerpay_img,
        demoLink: 'https://pokerpay.pfeifferf.com/',
        className: 'lg:row-span-3 xl:col-span-4',
        isPrivate: true,
        index: 7,
        technologies: ['React', 'TailwindCSS', 'Typescript'],
    },
    {
        id: uuid(),
        project_name: 'Showdown Analizer',
        description: 'projects-section.projects.showdown',
        screenShot: showdown_img,
        demoLink: 'https://showdown.pfeifferf.com/',
        className: 'lg:row-span-2 xl:col-span-4',
        isPrivate: true,
        index: 8,
        technologies: ['Go', 'HTMX', 'Docker'],
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
        icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
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
]
