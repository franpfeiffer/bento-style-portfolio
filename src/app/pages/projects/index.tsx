import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@uidotdev/usehooks'
import { useTranslation } from 'react-i18next'
import { FiFilter, FiSearch } from 'react-icons/fi'
import { MdClear } from 'react-icons/md'

import Header from '../../theme/components/Header'
import Footer from '../../theme/components/Footer/Footer'
import ProjectCard from '../../theme/components/ProjectCard/ProjectCard'
import { Projects } from '../../shared/utils/global-utils'
import { IProjectCard } from '../../shared/models/global-interface'
import { useTranslateStore } from '../../shared/stores/useTranslateStore'
import { switchLanguage } from '../../shared/utils/translate-utils'

const Project = () => {
    const { t } = useTranslation('global')
    const [isMobile, setIsMobile] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedFilter, setSelectedFilter] = useState('all')
    const [filteredProjects, setFilteredProjects] = useState<IProjectCard[]>(Projects)
    const mobile = useMediaQuery('only screen and (max-width : 768px)')

    const showTranslateToggle = useTranslateStore(state => state.showTranslateToggle)
    const setShowTranslateToggle = useTranslateStore(state => state.setShowTranslateToggle)

    const handleTranslateToggle = () => {
        if (showTranslateToggle) {
            setShowTranslateToggle(false)
        }
    }

    useEffect(() => {
        setIsMobile(mobile)
    }, [isMobile])

    const allTechnologies = [...new Set(Projects.flatMap(project => project.technologies))]

    useEffect(() => {
        let filtered = Projects

        if (searchTerm) {
            filtered = filtered.filter(project =>
                project.project_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.technologies.some(tech =>
                    tech.toLowerCase().includes(searchTerm.toLowerCase())
                ) ||
                t(project.description).toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        if (selectedFilter !== 'all') {
            if (selectedFilter === 'work') {
                filtered = filtered.filter(project => !project.isPrivate)
            } else if (selectedFilter === 'personal') {
                filtered = filtered.filter(project => project.isPrivate)
            } else {
                filtered = filtered.filter(project =>
                    project.technologies.includes(selectedFilter)
                )
            }
        }

        setFilteredProjects(filtered)
    }, [searchTerm, selectedFilter, t])

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedFilter('all')
    }

    return (
        <div
            onClick={handleTranslateToggle}
            className='w-full bg-moonlit select-none text-midnight flex flex-col items-center subpixel-antialiased dark:bg-dusky dark:text-noon scroll-smooth gap-5 lg:gap-10 mb-10'
        >
            <div className='w-full flex items-center justify-center mt-16 lg:mt-[3rem] fixed z-20'>
                {showTranslateToggle && (
                    <div className='w-full h-full relative max-w-5xl px-5 xl:max-w-7xl '>
                        <div className='w-auto h-auto absolute flex flex-col gap-2 px-5 py-4 -top-1 z-20 right-36 lg:right-[15rem] lg:top-4 bg-white dark:bg-raisin-black rounded-xl'>
                            <button
                                title='English'
                                className='text-sm font-medium cursor-pointer'
                                onClick={() => switchLanguage('en')}
                            >
                                English
                            </button>
                            <button
                                title='Spanish'
                                className='text-sm font-medium cursor-pointer'
                                onClick={() => switchLanguage('es')}
                            >
                                Spanish
                            </button>
                            <button
                                title='argentino'
                                className='text-sm font-medium cursor-pointer'
                                onClick={() => switchLanguage('arg')}
                            >
                                🧉
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <Header />

            <main className='w-full flex flex-col gap-10 items-center max-w-5xl px-5 xl:max-w-7xl mt-[5.5rem]'>
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className='w-full text-center py-8'
                >
                    <h1 className='text-4xl lg:text-5xl font-bold mb-4'>
                        {t('projects-page.title')}
                    </h1>
                    <p className='text-lg opacity-70 max-w-2xl mx-auto'>
                        {t('projects-page.description')}
                    </p>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='w-full flex flex-col gap-4'
                >
                    <div className='relative'>
                        <FiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <input
                            type='text'
                            placeholder={t('projects-page.search-placeholder')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='w-full pl-12 pr-4 py-3 bg-white dark:bg-raisin-black rounded-2xl border-2 border-transparent focus:border-neon-blue outline-none transition-all duration-300'
                        />
                    </div>

                    <div className='flex flex-wrap gap-3 items-center'>
                        <div className='flex items-center gap-2'>
                            <FiFilter className='text-gray-400' />
                            <span className='text-sm font-medium opacity-70'>
                                {t('projects-page.filter-by')}:
                            </span>
                        </div>

                        <div className='flex flex-wrap gap-2'>
                            <button
                                onClick={() => setSelectedFilter('all')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedFilter === 'all'
                                    ? 'bg-neon-blue text-white'
                                    : 'bg-white dark:bg-raisin-black hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                {t('projects-page.filters.all')}
                            </button>
                            <button
                                onClick={() => setSelectedFilter('work')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedFilter === 'work'
                                    ? 'bg-neon-blue text-white'
                                    : 'bg-white dark:bg-raisin-black hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                {t('projects-page.filters.work')}
                            </button>
                            <button
                                onClick={() => setSelectedFilter('personal')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedFilter === 'personal'
                                    ? 'bg-neon-blue text-white'
                                    : 'bg-white dark:bg-raisin-black hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                {t('projects-page.filters.personal')}
                            </button>

                            {allTechnologies.slice(0, 6).map(tech => (
                                <button
                                    key={tech}
                                    onClick={() => setSelectedFilter(tech)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedFilter === tech
                                        ? 'bg-neon-blue text-white'
                                        : 'bg-white dark:bg-raisin-black hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    {tech}
                                </button>
                            ))}
                        </div>

                        {(searchTerm || selectedFilter !== 'all') && (
                            <button
                                onClick={clearFilters}
                                className='flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors duration-300'
                            >
                                <MdClear />
                                {t('projects-page.clear-filters')}
                            </button>
                        )}
                    </div>

                    <div className='text-sm opacity-70'>
                        {t('projects-page.showing-results', { count: filteredProjects.length, total: Projects.length })}
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='w-full'
                >
                    {filteredProjects.length > 0 ? (
                        <div className='w-full grid auto-rows-[380px] lg:auto-rows-[140px] grid-cols-8 gap-4'>
                            {filteredProjects.map((project: IProjectCard) => {
                                return <ProjectCard {...project} key={project.id} />
                            })}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='text-center py-16'
                        >
                            <h3 className='text-2xl font-semibold mb-4'>
                                {t('projects-page.no-results.title')}
                            </h3>
                            <p className='opacity-70 mb-6'>
                                {t('projects-page.no-results.description')}
                            </p>
                            <button
                                onClick={clearFilters}
                                className='px-6 py-3 bg-neon-blue text-white rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300'
                            >
                                {t('projects-page.clear-filters')}
                            </button>
                        </motion.div>
                    )}
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className='w-full grid grid-cols-2 lg:grid-cols-4 gap-4 py-8'
                >
                    <div className='bg-white dark:bg-raisin-black rounded-2xl p-6 text-center'>
                        <div className='text-3xl font-bold text-neon-blue mb-2'>
                            {Projects.length}
                        </div>
                        <div className='text-sm opacity-70'>
                            {t('projects-page.stats.total-projects')}
                        </div>
                    </div>
                    <div className='bg-white dark:bg-raisin-black rounded-2xl p-6 text-center'>
                        <div className='text-3xl font-bold text-green-500 mb-2'>
                            {Projects.filter(p => !p.isPrivate).length}
                        </div>
                        <div className='text-sm opacity-70'>
                            {t('projects-page.stats.work-projects')}
                        </div>
                    </div>
                    <div className='bg-white dark:bg-raisin-black rounded-2xl p-6 text-center'>
                        <div className='text-3xl font-bold text-purple-500 mb-2'>
                            {Projects.filter(p => p.isPrivate).length}
                        </div>
                        <div className='text-sm opacity-70'>
                            {t('projects-page.stats.personal-projects')}
                        </div>
                    </div>
                    <div className='bg-white dark:bg-raisin-black rounded-2xl p-6 text-center'>
                        <div className='text-3xl font-bold text-orange-500 mb-2'>
                            {allTechnologies.length}
                        </div>
                        <div className='text-sm opacity-70'>
                            {t('projects-page.stats.technologies')}
                        </div>
                    </div>
                </motion.section>
            </main>

            <Footer />
        </div>
    )
}

export default Project
