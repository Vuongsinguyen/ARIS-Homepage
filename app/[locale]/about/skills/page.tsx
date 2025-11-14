import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';
import SkillsChart from './SkillsChart';

export async function generateMetadata() {
  return {
    title: 'Skills & Abilities | ARIS',
    description: 'Explore ARIS comprehensive skill set and technical expertise across various domains.',
  };
}

export default async function SkillsPage() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/about/skills';
  const locale = pathname.split('/')[1] || 'en';

  const skillsData = [
    { skill: 'Data Science & Analytics', value: 4.5, fullMark: 5 },
    { skill: 'Web Development', value: 5.0, fullMark: 5 },
    { skill: 'Mobile Development', value: 5.0, fullMark: 5 },
    { skill: 'UI/UX Design', value: 4.5, fullMark: 5 },
    { skill: 'DevOps & Cloud', value: 4.0, fullMark: 5 },
    { skill: 'Quality Assurance', value: 4.75, fullMark: 5 },
    { skill: 'Project Management', value: 4.5, fullMark: 5 },
    { skill: 'AI & Machine Learning', value: 3.5, fullMark: 5 },
  ];

  const technicalSkills = [
    {
      category: 'Frontend Development',
      skills: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass']
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Python', 'Java', 'PHP', 'Go', 'Ruby', 'Express.js', 'Django', 'Spring Boot', 'Laravel']
    },
    {
      category: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Xamarin', 'Ionic', 'Cordova']
    },
    {
      category: 'Database & Storage',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase', 'AWS DynamoDB', 'Oracle']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible']
    },
    {
      category: 'Data & Analytics',
      skills: ['Python (Pandas, NumPy)', 'R', 'SQL', 'Tableau', 'Power BI', 'Apache Spark', 'Hadoop', 'TensorFlow']
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Communication', level: 90 },
    { name: 'Team Collaboration', level: 95 },
    { name: 'Project Management', level: 85 },
    { name: 'Client Relations', level: 90 },
    { name: 'Adaptability', level: 95 },
    { name: 'Leadership', level: 80 },
    { name: 'Creativity', level: 85 }
  ];

  return (
    <div className="space-y-8">
      {/* Skills Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Skills & Abilities
          </h2>
          <p className="text-xl opacity-90">
            Our Comprehensive Technical Expertise
          </p>
        </div>
      </div>

      {/* Skills Overview Radar Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Technical Proficiency Overview
        </h3>
        <SkillsChart skillsData={skillsData} />
      </div>

      {/* Technical Skills Grid */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Technical Skills & Technologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((category, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Professional & Soft Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softSkills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Expertise */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Certifications & Expertise Areas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl">🏆</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AWS Certified</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Solutions Architect, Developer</p>
          </div>
          <div className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 dark:text-green-400 text-xl">🎯</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google Cloud</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Professional Cloud Architect</p>
          </div>
          <div className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">🔐</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security+</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">CompTIA Security Certification</p>
          </div>
          <div className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 dark:text-orange-400 text-xl">📊</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">PMP Certified</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Project Management Professional</p>
          </div>
        </div>
      </div>

      {/* Continuous Learning */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Commitment to Continuous Learning
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Technology evolves rapidly, and so do we. Our team dedicates significant time and resources
            to staying current with the latest technologies, methodologies, and industry best practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-300">Training Hours/Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Certifications Held</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-300">Conferences Attended</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Ready to Leverage Our Expertise?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Let's discuss how our skills and experience can help bring your project to life.
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
        >
          Start a Project →
        </Link>
      </div>
    </div>
  );
}