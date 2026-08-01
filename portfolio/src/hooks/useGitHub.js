import { useState, useEffect } from 'react'

const GITHUB_USER = 'Rediet2077'

export function useGitHub() {
  const [profile, setProfile]   = useState(null)
  const [repos, setRepos]       = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`),
        ])

        if (!profileRes.ok) throw new Error('GitHub API error')

        const profileData = await profileRes.json()
        const reposData   = await reposRes.json()

        setProfile(profileData)
        setRepos(Array.isArray(reposData) ? reposData : [])
      } catch (err) {
        setError(err.message)
        // Use fallback data
        setProfile({
          login: GITHUB_USER,
          name:  'Rediet Sharew',
          public_repos: 20,
          followers: 45,
          following: 60,
          avatar_url: `https://avatars.githubusercontent.com/${GITHUB_USER}`,
          html_url: `https://github.com/${GITHUB_USER}`,
          bio: 'Full-Stack Developer | Software Engineering Student',
        })
        setRepos([
          { id:1, name:'campus-safety-system',      description:'Real-time campus safety alert platform', stargazers_count:12, forks_count:3, language:'JavaScript', html_url:'#', updated_at:'2025-06-01' },
          { id:2, name:'ecommerce-recommendation',  description:'E-commerce with AI recommendations',      stargazers_count:8,  forks_count:2, language:'Python',     html_url:'#', updated_at:'2025-05-15' },
          { id:3, name:'bakery-management',         description:'Full bakery ERP system',                  stargazers_count:6,  forks_count:1, language:'PHP',        html_url:'#', updated_at:'2025-04-20' },
          { id:4, name:'library-management',        description:'Digital library platform with Django',    stargazers_count:5,  forks_count:1, language:'Python',     html_url:'#', updated_at:'2025-03-10' },
          { id:5, name:'collaborative-editor',      description:'Real-time collaborative document editor', stargazers_count:9,  forks_count:2, language:'JavaScript', html_url:'#', updated_at:'2025-07-01' },
          { id:6, name:'portfolio',                 description:'Personal developer portfolio',            stargazers_count:4,  forks_count:0, language:'JavaScript', html_url:'#', updated_at:'2025-07-15' },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchGitHub()
  }, [])

  return { profile, repos, loading, error }
}
