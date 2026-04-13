import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const CoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  // 课程数据 - 这里只实现数据分析技术课程
  const course = {
    id: '2',
    name: '数据分析技术',
    description: '学习数据清洗、数据可视化、统计分析等核心数据分析技术，使用Python库如Pandas、Matplotlib等进行实际数据处理。',
    skills: ['数据分析', 'Pandas', '数据可视化'],
    prerequisites: ['Python基础', '数据采集与处理', '商务数据分析与应用基础'],
    objectives: [
      '掌握数据分析的基本概念和流程',
      '熟练使用Python库进行数据清洗和预处理',
      '学会使用数据可视化工具展示分析结果',
      '掌握基本的统计分析方法',
      '能够运用数据分析技术解决实际商业问题'
    ],
    syllabus: [
      {
        week: 1,
        title: '数据分析概述',
        content: [
          '数据分析的定义和重要性',
          '数据分析的流程和方法',
          '数据分析工具介绍',
          '案例分析：商业数据分析实例'
        ]
      },
      {
        week: 2,
        title: 'Pandas库基础',
        content: [
          'Pandas库的安装和导入',
          'Series和DataFrame的创建',
          '数据读取和保存',
          '基本的数据操作和处理'
        ]
      },
      {
        week: 3,
        title: '数据清洗与预处理',
        content: [
          '缺失值处理',
          '异常值检测和处理',
          '数据类型转换',
          '数据标准化和归一化'
        ]
      },
      {
        week: 4,
        title: '数据探索性分析',
        content: [
          '描述性统计分析',
          '数据分布分析',
          '相关性分析',
          '数据探索工具和技巧'
        ]
      },
      {
        week: 5,
        title: 'Matplotlib数据可视化',
        content: [
          'Matplotlib库介绍',
          '基本图表绘制（折线图、柱状图、饼图）',
          '图表样式和美化',
          '多子图和复杂图表'
        ]
      },
      {
        week: 6,
        title: 'Seaborn高级可视化',
        content: [
          'Seaborn库介绍',
          '统计图表绘制',
          '热力图和相关性矩阵',
          '可视化最佳实践'
        ]
      },
      {
        week: 7,
        title: '统计分析基础',
        content: [
          '概率分布',
          '假设检验',
          '方差分析',
          '回归分析基础'
        ]
      },
      {
        week: 8,
        title: '机器学习入门',
        content: [
          '机器学习基本概念',
          '监督学习和无监督学习',
          '常用机器学习算法介绍',
          'Scikit-learn库使用'
        ]
      },
      {
        week: 9,
        title: '时间序列分析',
        content: [
          '时间序列数据特点',
          '时间序列分析方法',
          '趋势和季节性分析',
          '时间序列预测模型'
        ]
      },
      {
        week: 10,
        title: '文本数据分析',
        content: [
          '文本数据处理方法',
          '分词和特征提取',
          '情感分析',
          '文本挖掘案例'
        ]
      },
      {
        week: 11,
        title: '大数据分析工具',
        content: [
          '大数据概念和特点',
          'Hadoop和Spark简介',
          '分布式计算基础',
          '大数据分析案例'
        ]
      },
      {
        week: 12,
        title: '数据分析项目实战',
        content: [
          '项目需求分析',
          '数据获取和预处理',
          '分析方法选择',
          '结果展示和报告撰写'
        ]
      },
      {
        week: 13,
        title: '项目实践与指导',
        content: [
          '学生项目进展汇报',
          '问题分析和解决',
          '技术指导和建议',
          '项目优化方向'
        ]
      },
      {
        week: 14,
        title: '项目展示与评估',
        content: [
          '学生项目展示',
          ' peer评审',
          '教师点评',
          '项目总结和反思'
        ]
      },
      {
        week: 15,
        title: '课程总结与展望',
        content: [
          '课程内容回顾',
          '数据分析行业趋势',
          '职业发展建议',
          '后续学习资源推荐'
        ]
      },
      {
        week: 16,
        title: '期末考试',
        content: [
          '理论知识考核',
          '实践操作考核',
          '综合能力评估'
        ]
      }
    ],
    assessment: {
      assignments: 30,
      project: 40,
      finalExam: 20,
      participation: 10
    },
    resources: [
      '《Python数据分析》，Wes McKinney著',
      '《数据科学入门》，乔尔·格鲁斯著',
      '《Pandas官方文档》',
      '《Matplotlib官方文档》',
      'Kaggle数据集和竞赛平台',
      'Coursera数据分析相关课程'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">谭青青</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">首页</Link>
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">课程</Link>
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">技能</Link>
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

      {/* Course Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Course Header */}
        <div className="card p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.name}</h1>
              <p className="text-gray-600">高职大二第二学期课程</p>
            </div>
            <button 
              onClick={() => navigate('/')}
              className="mt-4 md:mt-0 btn btn-secondary"
            >
              返回首页
            </button>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">{course.description}</p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {course.skills.map((skill, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>

          {/* Prerequisites */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">先修课程</h3>
            <ul className="list-disc list-inside text-gray-700">
              {course.prerequisites.map((prereq, index) => (
                <li key={index}>{prereq}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Course Objectives */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">课程目标</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {course.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>

        {/* Course Syllabus */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">课程大纲</h2>
          <div className="space-y-8">
            {course.syllabus.map((week) => (
              <div key={week.week} className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">第{week.week}周：{week.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {week.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">评估方式</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">平时作业</h3>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full" style={{ width: `${course.assessment.assignments}%` }}></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">{course.assessment.assignments}%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">项目实践</h3>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full" style={{ width: `${course.assessment.project}%` }}></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">{course.assessment.project}%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">期末考试</h3>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full" style={{ width: `${course.assessment.finalExam}%` }}></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">{course.assessment.finalExam}%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">课堂参与</h3>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full" style={{ width: `${course.assessment.participation}%` }}></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">{course.assessment.participation}%</p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">参考资料</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {course.resources.map((resource, index) => (
              <li key={index}>{resource}</li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
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

export default CoursePage;