import React, { useState } from 'react';
import { 
  FiHome, 
  FiBook, 
  FiUsers, 
  FiLayers, 
  FiBell, 
  FiFileText, 
  FiBarChart, 
  FiSettings, 
  FiHelpCircle, 
  FiLogOut,
  FiSearch,
  FiMoreHorizontal,
  FiClock,
  FiCheckCircle,
  FiAward,
  FiTrendingUp,
  FiUser
} from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('UX Basics');
  

  const chartData = [
    { name: 'Mon', ux: 95, python: 85 },
    { name: 'Tue', ux: 100, python: 75 },
    { name: 'Wed', ux: 85, python: 90 },
    { name: 'Thu', ux: 95, python: 85 },
    { name: 'Fri', ux: 110, python: 95 },
    { name: 'Sat', ux: 75, python: 100 },
    { name: 'Sun', ux: 90, python: 85 }
  ];

  const sidebarItems = [
    { icon: FiHome, label: 'Overview', active: true },
    { icon: FiBook, label: 'My courses' },
    { icon: FiUsers, label: 'Classroom' },
    { icon: FiLayers, label: 'Categories' },
    { icon: FiBell, label: 'Announcements' },
    { icon: FiFileText, label: 'Tests' },
    { icon: FiBarChart, label: 'Reports' },
    { icon: FiSettings, label: 'Settings' }
  ];

  const upcomingTests = [
    { title: 'UX Basics', date: '25 Jun 2024', color: 'bg-orange-500' },
    { title: 'HTML & CSS', date: '26 Jun 2024', color: 'bg-blue-500' },
    { title: 'Python Basics', date: '27 Jun 2024', color: 'bg-green-500' },
    { title: 'UI Basics', date: '28 Jun 2024', color: 'bg-purple-500' },
    { title: 'Javascript for Beginners', date: '29 Jun 2024', color: 'bg-teal-500' }
  ];

  const announcements = [
    { title: 'School Fees Update!', description: 'Dear students, ensure all the unpaid fees are...', priority: 'high' },
    { title: 'Exam Warning!!!', description: '2 weeks to exam, ensure all fees are paid b...', priority: 'urgent' },
    { title: 'Update on School Certificate', description: 'Dear students, find your new certificate...', priority: 'normal' },
    { title: 'From the VC\'s Office', description: 'Dear Students, I implore you to bear with th...', priority: 'normal' },
    { title: 'From the Student Affairs', description: 'All students are expected to purchase a ne...', priority: 'normal' },
    { title: 'Update on Approved Dressing', description: 'Students are not expected to exceed their...', priority: 'normal' }
  ];

  const classroomData = [
    { 
      title: 'UX Basics', 
      students: 5, 
      category: 'UI/UX', 
      duration: '6h 55min', 
      completion: '50/100 (50%)', 
      instructor: 'Baba Kaothat',
      avatar: '👨‍🏫'
    },
    { 
      title: 'HTML & CSS', 
      students: 5, 
      category: 'Coding', 
      duration: '1h 45min', 
      completion: '25/55 (45.4%)', 
      instructor: 'Jebke Afoope',
      avatar: '👨‍💻'
    },
    { 
      title: 'Python Basics', 
      students: 5, 
      category: 'Coding', 
      duration: '5h 25min', 
      completion: '5/20 (25%)', 
      instructor: 'Eze Chinedu',
      avatar: '👩‍💻'
    },
    { 
      title: 'UI Basics', 
      students: 5, 
      category: 'UI/UX', 
      duration: '1h 40min', 
      completion: '50/85 (58.8%)', 
      instructor: 'Desmond Tutu',
      avatar: '👨‍🎨'
    },
    { 
      title: 'Javascript for Beginners', 
      students: 5, 
      category: 'Coding', 
      duration: '5h 20min', 
      completion: '20/45 (44.4%)', 
      instructor: 'Nneka Chukwu',
      avatar: '👩‍💻'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 text-white">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <FiBook className="text-white" />
            </div>
            <span className="text-xl font-bold">Braicademy</span>
          </div>
          
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                  item.active ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-64 p-6 space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white rounded-lg cursor-pointer transition-colors">
            <FiHelpCircle size={20} />
            <span>Support</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white rounded-lg cursor-pointer transition-colors">
            <FiLogOut size={20} />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                  F
                </div>
                <div>
                  <div className="text-sm font-medium">Folasayo Ogunnaike</div>
                  <div className="text-xs text-gray-500">Student</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Stats and Chart */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-teal-600 mb-2">
                    <FiClock size={20} />
                    <span className="text-sm font-medium">Watch Time</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">04:00:48</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-green-600 mb-2">
                    <FiCheckCircle size={20} />
                    <span className="text-sm font-medium">Completed Courses</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">02</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <FiAward size={20} />
                    <span className="text-sm font-medium">Certificates</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">02</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-orange-600 mb-2">
                    <FiTrendingUp size={20} />
                    <span className="text-sm font-medium">Courses in Progress</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">03</div>
                </div>
              </div>

              {/* Study Statistics Chart */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Study Statistics</h3>
                  <div className="flex items-center gap-4">
                    <select 
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option>UX Basics</option>
                      <option>Python Basics</option>
                    </select>
                    <select className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Line 
                        type="monotone" 
                        dataKey="ux" 
                        stroke="#14b8a6" 
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="python" 
                        stroke="#f59e0b" 
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Classroom Section */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Classroom</h3>
                    <div className="flex items-center gap-4">
                      <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                        <option>Category</option>
                      </select>
                      <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                        <option>Duration</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Completion Rate</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Instructor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {classroomData.map((course, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <input type="checkbox" className="rounded border-gray-300" />
                              <span className="font-medium text-gray-900">{course.title}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex -space-x-1">
                              {[...Array(course.students)].map((_, i) => (
                                <div key={i} className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white text-xs flex items-center justify-center">
                                  {course.avatar}
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{course.category}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{course.duration}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{course.completion}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                              <span className="text-sm text-gray-600">{course.instructor}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-gray-400 hover:text-gray-600">
                              <FiMoreHorizontal size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column - Upcoming Tests and Announcements */}
            <div className="space-y-6">
              {/* Upcoming Tests */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Tests</h3>
                <div className="space-y-3">
                  {upcomingTests.map((test, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${test.color}`}></div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{test.title}</div>
                        <div className="text-sm text-gray-500">{test.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors">
                  See All
                </button>
              </div>

              {/* Announcements */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Announcements</h3>
                  <button className="text-sm text-teal-600 hover:text-teal-700">See All</button>
                </div>
                <div className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        announcement.priority === 'urgent' ? 'bg-red-500' : 
                        announcement.priority === 'high' ? 'bg-orange-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">{announcement.title}</div>
                        <div className="text-xs text-gray-500 mt-1 line-clamp-2">{announcement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;