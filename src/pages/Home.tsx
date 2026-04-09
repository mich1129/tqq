import React from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-500 to-green-400 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">谭青青</h1>
            <p className="text-xl md:text-2xl mb-6">广东科学技术职业学院商学院</p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              商务数据分析与应用专业学生，致力于成为数据分析领域的专业人才
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#courses" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                查看课程
              </a>
              <a href="#skills" className="bg-blue-700/80 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                技能展示
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      {/* Personal Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">个人信息</h2>
          <div className="max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-700">基本信息</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-24 text-gray-600">姓名：</span>
                    <span className="font-medium">谭青青</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-24 text-gray-600">学院：</span>
                    <span className="font-medium">广东科学技术职业学院商学院</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-24 text-gray-600">专业：</span>
                    <span className="font-medium">商务数据分析与应用</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-700">学习目标</h3>
                <p className="text-gray-700 leading-relaxed">
                  掌握数据分析核心技能，能够运用专业知识解决实际商业问题，
                  成为数据分析领域的专业人才，为企业决策提供数据支持。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">课程信息</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-700">{course.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {course.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">专业技能</h2>
          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-blue-700 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-400 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">谭青青 - 商务数据分析与应用专业</p>
          <p className="text-gray-400 text-sm">© 2026 个人主页</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;