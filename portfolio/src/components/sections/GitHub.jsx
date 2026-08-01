import { motion } from 'framer-motion'
import { FiStar, FiGitBranch, FiUsers, FiBook, FiGithub, FiClock, FiExternalLink } from 'react-icons/fi'
import { useGitHub } from '../../hooks/useGitHub'
import { personalInfo } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const langColors = {
  JavaScript: '#F7DF1E', TypeScript: '#3178C6', Python: '#3776AB',
  PHP: '#777BB4', Dart: '#00B4AB', Kotlin: '#7F52FF',
  HTML: '#E34F26', CSS: '#1572B6', Vue: '#42B883',
}

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-card p-5 text-center group hover:border-primary-500/30"
    >
      <div className="flex justify-center mb-2">
        <Icon size={22} style={{ color }} />
      </div>
      <div className="text-2xl font-display font-bold text-white mb-1">{value}</div>
      <p className="text-xs text-slate-500">{label}</p>
    </motion.div>
  )
}

function RepoCard({ repo, index }) {
  const langColor = langColors[repo.language] || '#6366f1'
  const daysAgo = repo.updated_at
    ? Math.floor((Date.now() - new Date(repo.updated_at)) / 86400000)
    : null

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass-card p-5 flex flex-col gap-3 group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <FiBook size={15} className="text-primary-400 flex-shrink-0" />
          <h3 className="text-sm font-semibold text-white truncate group-hover:text-primary-400 transition-colors">
            {repo.name}
          </h3>
        </div>
        <FiExternalLink size={13} className="text-slate-600 group-hover:text-primary-400 flex-shrink-0 transition-colors" />
      </div>

      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
        {repo.description || 'No description available.'}
      </p>

      <div className="flex items-center gap-4 mt-auto">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: langColor }} />
            <span className="text-xs text-slate-500">{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1 text-xs text-slate-500">
          <FiStar size={11} className="text-yellow-500" />
          {repo.stargazers_count ?? 0}
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-500">
          <FiGitBranch size={11} />
          {repo.forks_count ?? 0}
        </div>
        {daysAgo !== null && (
          <div className="flex items-center gap-1 text-xs text-slate-600 ml-auto">
            <FiClock size={11} />
            {daysAgo === 0 ? 'Today' : `${daysAgo}d ago`}
          </div>
        )}
      </div>
    </motion.a>
  )
}

function SkeletonCard() {
  return (
    <div className="glass-card p-5 space-y-3">
      <div className="skeleton h-4 w-2/3 rounded" />
      <div className="skeleton h-3 w-full rounded" />
      <div className="skeleton h-3 w-4/5 rounded" />
      <div className="flex gap-3 mt-2">
        <div className="skeleton h-3 w-16 rounded" />
        <div className="skeleton h-3 w-10 rounded" />
      </div>
    </div>
  )
}

export default function GitHub() {
  const { profile, repos, loading } = useGitHub()

  return (
    <section id="github" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob w-80 h-80 bg-primary-600/8 top-0 right-0" style={{ animationDelay: '1s' }} />
      </div>

      <div className="section-wrapper">
        <SectionHeading
          tag="GitHub"
          title="Open Source"
          highlight="Activity"
          subtitle="My public repositories and contribution activity on GitHub."
        />

        {/* Profile card */}
        {profile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 mb-10 flex flex-col sm:flex-row items-center sm:items-start gap-5"
          >
            <img
              src={profile.avatar_url}
              alt={profile.name}
              className="w-20 h-20 rounded-2xl border-2 border-primary-500/30 shadow-glow-sm"
              loading="lazy"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-display font-bold text-white">{profile.name}</h3>
              <p className="text-slate-400 text-sm mt-0.5">@{profile.login}</p>
              {profile.bio && <p className="text-slate-400 text-sm mt-2">{profile.bio}</p>}
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors"
              >
                <FiGithub size={14} />
                View on GitHub
                <FiExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="glass-card p-5">
                <div className="skeleton h-8 w-16 mx-auto mb-2 rounded" />
                <div className="skeleton h-3 w-20 mx-auto rounded" />
              </div>
            ))
          ) : (
            <>
              <StatCard icon={FiBook}    label="Public Repos"   value={profile?.public_repos ?? '—'} color="#6366f1" />
              <StatCard icon={FiUsers}   label="Followers"      value={profile?.followers ?? '—'}     color="#06b6d4" />
              <StatCard icon={FiGithub}  label="Following"      value={profile?.following ?? '—'}     color="#ec4899" />
              <StatCard icon={FiStar}    label="Total Stars"    value={repos.reduce((a, r) => a + (r.stargazers_count ?? 0), 0)} color="#f59e0b" />
            </>
          )}
        </div>

        {/* Contribution graph embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-5 mb-10 overflow-hidden"
        >
          <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
            <FiGithub size={15} className="text-primary-400" />
            Contribution Activity
          </h4>
          <div className="overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/6366f1/${personalInfo.githubUsername}`}
              alt="GitHub Contribution Chart"
              className="w-full max-w-2xl mx-auto rounded-lg opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
              onError={e => { e.target.style.display = 'none' }}
            />
          </div>
          <p className="text-xs text-slate-600 text-center mt-3">
            GitHub contribution graph for @{personalInfo.githubUsername}
          </p>
        </motion.div>

        {/* Repos */}
        <h3 className="text-lg font-display font-semibold text-white mb-6 flex items-center gap-2">
          <FiBook size={18} className="text-primary-400" />
          Latest Repositories
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : repos.map((repo, i) => <RepoCard key={repo.id} repo={repo} index={i} />)
          }
        </div>
      </div>
    </section>
  )
}
