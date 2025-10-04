import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Award, 
  Search, 
  Star, 
  MapPin, 
  Clock,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Brain,
  Network
} from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('job-seekers')
  const [searchQuery, setSearchQuery] = useState('')
  const [stats, setStats] = useState({
    totalJobs: 12847,
    successfulReferrals: 8932,
    activeUsers: 45621,
    companies: 2341
  })

  // Simulate real-time stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        totalJobs: prev.totalJobs + Math.floor(Math.random() * 3),
        successfulReferrals: prev.successfulReferrals + Math.floor(Math.random() * 2),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5),
        companies: prev.companies + Math.floor(Math.random() * 1)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      salary: "$120k - $180k",
      type: "Full-time",
      referrals: 12,
      skills: ["React", "TypeScript", "Next.js"]
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateLabs",
      location: "San Francisco, CA",
      salary: "$140k - $200k",
      type: "Full-time",
      referrals: 8,
      skills: ["Strategy", "Analytics", "Leadership"]
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "AI Solutions",
      location: "New York, NY",
      salary: "$130k - $190k",
      type: "Full-time",
      referrals: 15,
      skills: ["Python", "ML", "Statistics"]
    }
  ]

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithms match you with the perfect opportunities based on your skills and career goals."
    },
    {
      icon: <Network className="h-8 w-8 text-green-600" />,
      title: "Smart Referral Network",
      description: "Connect with industry professionals and get referred to your dream job through our intelligent network."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with multi-factor authentication and end-to-end encryption."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Real-time Updates",
      description: "Get instant notifications about job matches, referral requests, and application status updates."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Network className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Referral Platform
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            🚀 Now with AI-Powered Job Matching
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Transform Your Career with
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Smart Referrals
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with industry professionals, get referred to top companies, and accelerate your career growth 
            through our AI-powered networking platform.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for jobs, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalJobs.toLocaleString()}</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.successfulReferrals.toLocaleString()}</div>
              <div className="text-gray-600">Successful Referrals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{stats.activeUsers.toLocaleString()}</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{stats.companies.toLocaleString()}</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of professional networking with cutting-edge features designed to accelerate your career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Built for Everyone</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're seeking opportunities, providing referrals, or recruiting talent, we have the perfect solution for you.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="job-seekers" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Job Seekers</span>
              </TabsTrigger>
              <TabsTrigger value="referrers" className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>Referrers</span>
              </TabsTrigger>
              <TabsTrigger value="recruiters" className="flex items-center space-x-2">
                <Briefcase className="h-4 w-4" />
                <span>Recruiters</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="job-seekers" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-3xl font-bold mb-4">Find Your Dream Job</h4>
                  <p className="text-lg text-gray-600 mb-6">
                    Discover opportunities tailored to your skills and career goals. Get referred by industry professionals 
                    and increase your chances of landing your dream job.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>AI-powered job recommendations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Direct referrals from employees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Real-time application tracking</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Start Job Search <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="grid gap-4">
                  {featuredJobs.map((job) => (
                    <Card key={job.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h5 className="font-semibold text-lg">{job.title}</h5>
                            <p className="text-gray-600">{job.company}</p>
                          </div>
                          <Badge variant="secondary">{job.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {job.referrals} referrals
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {job.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-green-600">{job.salary}</span>
                          <Button size="sm" variant="outline">
                            Apply Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="referrers" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-3xl font-bold mb-4">Earn Rewards for Referrals</h4>
                  <p className="text-lg text-gray-600 mb-6">
                    Help talented professionals find great opportunities while earning points and recognition. 
                    Build your professional network and make a meaningful impact.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Earn points for successful referrals</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Track referral progress in real-time</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Build your professional reputation</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    Start Referring <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-2xl font-bold mb-2">Referral Rewards</h5>
                    <p className="text-gray-600">Earn points and unlock exclusive benefits</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>Successful Referral</span>
                      <Badge className="bg-yellow-100 text-yellow-800">+500 points</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>Candidate Hired</span>
                      <Badge className="bg-green-100 text-green-800">+1000 points</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>Monthly Top Referrer</span>
                      <Badge className="bg-purple-100 text-purple-800">+2000 points</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recruiters" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-3xl font-bold mb-4">Find Top Talent Faster</h4>
                  <p className="text-lg text-gray-600 mb-6">
                    Access a network of pre-screened candidates referred by trusted professionals. 
                    Reduce hiring time and improve candidate quality with our intelligent platform.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Access to pre-screened candidates</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Reduce time-to-hire by 60%</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Advanced analytics and insights</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Start Recruiting <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h5 className="text-xl font-bold mb-6">Recruitment Analytics</h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Time to Hire</span>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                        <span className="font-semibold text-green-600">-60%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Candidate Quality</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-semibold">4.8/5</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Referral Success Rate</span>
                      <span className="font-semibold text-blue-600">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost per Hire</span>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-green-600 mr-1 rotate-180" />
                        <span className="font-semibold text-green-600">-45%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who have already accelerated their careers through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Professional Referral Platform</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming careers through intelligent networking and referrals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Job Search</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Referrals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Companies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Professional Referral Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
