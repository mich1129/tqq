import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // 课程数据
  const courses = [
    {
      id: 1,
      name: 'Python基础',
      description: '掌握Python编程语言的基本语法、数据类型、控制结构和函数等核心概念，为后续的数据分析学习打下基础。',
      skills: ['Python', '编程基础', '语法规则']
    },
    {
      id: 2,
      name: '数据分析技术',
      description: '学习数据清洗、数据可视化、统计分析等核心数据分析技术，使用Python库如Pandas、Matplotlib等进行实际数据处理。',
      skills: ['数据分析', 'Pandas', '数据可视化']
    },
    {
      id: 3,
      name: '数据采集与处理',
      description: '掌握网络爬虫技术、API数据获取、数据清洗和预处理方法，能够从各种数据源获取并处理数据。',
      skills: ['网络爬虫', 'API调用', '数据清洗']
    },
    {
      id: 4,
      name: '供应链数据分析',
      description: '学习供应链管理中的数据分析方法，包括需求预测、库存优化、物流路径分析等，提升供应链效率。',
      skills: ['供应链管理', '需求预测', '库存优化']
    },
    {
      id: 5,
      name: '数据库原理与应用',
      description: '了解数据库的基本原理，掌握SQL语言，能够设计和操作关系型数据库，为数据存储和管理提供支持。',
      skills: ['SQL', '数据库设计', '数据管理']
    }
  ];

  // 技能数据
  const skills = [
    { name: 'Python', level: 85 },
    { name: '数据分析', level: 80 },
    { name: 'SQL', level: 75 },
    { name: '数据可视化', level: 70 },
    { name: '网络爬虫', level: 65 },
    { name: '供应链分析', level: 60 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">谭青青</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">首页</Link>
              <Link to="#courses" className="text-gray-700 hover:text-indigo-600 font-medium">课程</Link>
              <Link to="#skills" className="text-gray-700 hover:text-indigo-600 font-medium">技能</Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              谭青青
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              广东科学技术职业学院商学院
            </p>
            <p className="text-lg md:text-xl mb-10 text-indigo-100 max-w-2xl mx-auto">
              商务数据分析与应用专业学生，致力于成为数据分析领域的专业人才
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="#courses" className="btn btn-secondary bg-white text-indigo-600 hover:bg-indigo-50">
                查看课程
              </Link>
              <Link to="#skills" className="btn btn-primary bg-indigo-700 hover:bg-indigo-800">
                技能展示
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">个人信息</h2>
          <div className="max-w-4xl mx-auto card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">基本信息</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-28 text-gray-600 font-medium">姓名：</span>
                    <span className="font-medium">谭青青</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-28 text-gray-600 font-medium">学院：</span>
                    <span className="font-medium">广东科学技术职业学院商学院</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-28 text-gray-600 font-medium">专业：</span>
                    <span className="font-medium">商务数据分析与应用</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-28 text-gray-600 font-medium">年级：</span>
                    <span className="font-medium">高职大二第二学期</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">学习目标</h3>
                <p className="text-gray-700 leading-relaxed">
                  掌握数据分析核心技能，能够运用专业知识解决实际商业问题，
                  成为数据分析领域的专业人才，为企业决策提供数据支持。
                  希望通过系统学习，获得扎实的技术基础和实践经验，
                  为未来的职业发展打下坚实的基础。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">课程信息</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            以下是我学习的核心课程，涵盖了数据分析领域的各个方面
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Link 
                key={course.id} 
                to={`/course/${course.id}`} 
                className="card p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600">{course.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {course.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">专业技能</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            以下是我掌握的专业技能和熟练度
          </p>
          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between mb-3">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-indigo-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">谭青青</h3>
              <p className="text-gray-400">商务数据分析与应用专业</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2026 个人主页</p>
              <p className="text-gray-500 text-sm">广东科学技术职业学院商学院</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;