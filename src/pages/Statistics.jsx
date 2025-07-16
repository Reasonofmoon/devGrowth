import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'
import { 
  TrendingUp, 
  Clock, 
  Target,
  Award,
  Calendar,
  Code,
  BookOpen,
  CheckCircle
} from 'lucide-react'

export default function Statistics() {
  // 주간 학습 시간 데이터
  const weeklyStudyData = [
    { day: '월', hours: 2.5, tasks: 3 },
    { day: '화', hours: 3.2, tasks: 4 },
    { day: '수', hours: 1.8, tasks: 2 },
    { day: '목', hours: 4.1, tasks: 5 },
    { day: '금', hours: 3.5, tasks: 4 },
    { day: '토', hours: 5.2, tasks: 6 },
    { day: '일', hours: 2.8, tasks: 3 }
  ]

  // 월별 진행률 데이터
  const monthlyProgressData = [
    { month: '10월', progress: 65, goals: 8 },
    { month: '11월', progress: 72, goals: 10 },
    { month: '12월', progress: 78, goals: 12 },
    { month: '1월', progress: 85, goals: 15 }
  ]

  // 기술별 숙련도 데이터
  const skillsData = [
    { skill: 'HTML', level: 85 },
    { skill: 'CSS', level: 78 },
    { skill: 'JavaScript', level: 65 },
    { skill: 'React', level: 45 },
    { skill: 'Git', level: 70 },
    { skill: 'TypeScript', level: 25 }
  ]

  // 학습 카테고리 분포
  const categoryData = [
    { name: '프론트엔드', value: 45, color: '#3B82F6' },
    { name: '백엔드', value: 20, color: '#10B981' },
    { name: '알고리즘', value: 15, color: '#F59E0B' },
    { name: '도구/환경', value: 12, color: '#8B5CF6' },
    { name: '기타', value: 8, color: '#6B7280' }
  ]

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#6B7280']

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">통계</h1>
        <p className="text-muted-foreground">
          학습 패턴을 분석하고 성장 과정을 시각화하세요 📊
        </p>
      </div>

      {/* 주요 지표 요약 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 학습 시간</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127시간</div>
            <p className="text-xs text-muted-foreground">
              +12시간 (이번 주)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">완료한 과제</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89개</div>
            <p className="text-xs text-muted-foreground">
              +7개 (이번 주)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">연속 학습 일수</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23일</div>
            <p className="text-xs text-muted-foreground">
              최고 기록: 31일
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">평균 진행률</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">
              목표 달성률
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="weekly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="weekly">주간 분석</TabsTrigger>
          <TabsTrigger value="monthly">월간 분석</TabsTrigger>
          <TabsTrigger value="skills">기술 숙련도</TabsTrigger>
          <TabsTrigger value="categories">학습 분야</TabsTrigger>
        </TabsList>

        {/* 주간 분석 */}
        <TabsContent value="weekly" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>주간 학습 시간</CardTitle>
                <CardDescription>
                  이번 주 일별 학습 시간 추이
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyStudyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="hours" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>완료한 과제 수</CardTitle>
                <CardDescription>
                  이번 주 일별 과제 완료 현황
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyStudyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="tasks" stroke="#10B981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>주간 성과 요약</CardTitle>
              <CardDescription>
                이번 주 주요 성과와 개선점
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">23.1시간</div>
                  <div className="text-sm text-muted-foreground">총 학습 시간</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">27개</div>
                  <div className="text-sm text-muted-foreground">완료한 과제</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">3.3시간</div>
                  <div className="text-sm text-muted-foreground">일평균 학습</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 월간 분석 */}
        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>월별 진행률 추이</CardTitle>
              <CardDescription>
                최근 4개월간 학습 진행률 변화
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={monthlyProgressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="progress" fill="#3B82F6" />
                  <Bar dataKey="goals" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 기술 숙련도 */}
        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>기술별 숙련도</CardTitle>
              <CardDescription>
                현재 기술 스택별 숙련도 레벨
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={skillsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="숙련도"
                    dataKey="level"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.3}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            {skillsData.map((skill, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{skill.skill}</CardTitle>
                    <Badge variant={skill.level >= 70 ? "default" : skill.level >= 40 ? "secondary" : "outline"}>
                      {skill.level >= 70 ? "고급" : skill.level >= 40 ? "중급" : "초급"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>숙련도</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 학습 분야 */}
        <TabsContent value="categories" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>학습 분야 분포</CardTitle>
                <CardDescription>
                  시간 투자 비율별 학습 영역
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>분야별 상세</CardTitle>
                <CardDescription>
                  각 학습 분야별 투자 시간과 비율
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryData.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{category.value}%</div>
                        <div className="text-sm text-muted-foreground">
                          {Math.round(category.value * 1.27)}시간
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

