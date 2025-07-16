import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  BookOpen, 
  CheckCircle, 
  Clock,
  Star,
  ArrowRight,
  Code,
  Globe,
  Database
} from 'lucide-react'

export default function LearningGuide() {
  const [checkedTasks, setCheckedTasks] = useState(new Set())

  const weeklyProgram = [
    {
      week: 1,
      title: "개발 환경 설정 및 기초",
      description: "개발에 필요한 도구들을 설치하고 기본 개념을 익힙니다",
      progress: 80,
      status: "진행중",
      tasks: [
        { id: "w1-1", title: "VS Code 설치 및 설정", completed: true },
        { id: "w1-2", title: "Git 설치 및 GitHub 계정 생성", completed: true },
        { id: "w1-3", title: "Node.js 설치", completed: true },
        { id: "w1-4", title: "HTML 기초 문법 학습", completed: true },
        { id: "w1-5", title: "첫 번째 웹페이지 만들기", completed: false }
      ]
    },
    {
      week: 2,
      title: "CSS 스타일링 마스터",
      description: "웹페이지를 아름답게 꾸미는 CSS 기술을 배웁니다",
      progress: 60,
      status: "진행중",
      tasks: [
        { id: "w2-1", title: "CSS 기초 문법", completed: true },
        { id: "w2-2", title: "Flexbox 레이아웃", completed: true },
        { id: "w2-3", title: "Grid 레이아웃", completed: true },
        { id: "w2-4", title: "반응형 디자인", completed: false },
        { id: "w2-5", title: "CSS 애니메이션", completed: false }
      ]
    },
    {
      week: 3,
      title: "JavaScript 기초",
      description: "웹페이지에 동적 기능을 추가하는 JavaScript를 학습합니다",
      progress: 40,
      status: "예정",
      tasks: [
        { id: "w3-1", title: "변수와 데이터 타입", completed: true },
        { id: "w3-2", title: "함수와 스코프", completed: true },
        { id: "w3-3", title: "DOM 조작", completed: false },
        { id: "w3-4", title: "이벤트 처리", completed: false },
        { id: "w3-5", title: "비동기 프로그래밍", completed: false }
      ]
    },
    {
      week: 4,
      title: "JavaScript 심화",
      description: "ES6+ 문법과 고급 JavaScript 개념을 익힙니다",
      progress: 0,
      status: "예정",
      tasks: [
        { id: "w4-1", title: "ES6+ 문법 (let, const, arrow function)", completed: false },
        { id: "w4-2", title: "구조 분해 할당", completed: false },
        { id: "w4-3", title: "Promise와 async/await", completed: false },
        { id: "w4-4", title: "모듈 시스템", completed: false },
        { id: "w4-5", title: "클래스와 상속", completed: false }
      ]
    },
    {
      week: 5,
      title: "React 기초",
      description: "현대적인 웹 개발의 핵심인 React를 배웁니다",
      progress: 0,
      status: "예정",
      tasks: [
        { id: "w5-1", title: "React 개념과 설치", completed: false },
        { id: "w5-2", title: "컴포넌트와 JSX", completed: false },
        { id: "w5-3", title: "Props와 State", completed: false },
        { id: "w5-4", title: "이벤트 핸들링", completed: false },
        { id: "w5-5", title: "조건부 렌더링", completed: false }
      ]
    },
    {
      week: 6,
      title: "React 심화",
      description: "React Hooks와 상태 관리를 마스터합니다",
      progress: 0,
      status: "예정",
      tasks: [
        { id: "w6-1", title: "useState와 useEffect", completed: false },
        { id: "w6-2", title: "커스텀 훅 만들기", completed: false },
        { id: "w6-3", title: "Context API", completed: false },
        { id: "w6-4", title: "React Router", completed: false },
        { id: "w6-5", title: "폼 처리와 유효성 검사", completed: false }
      ]
    },
    {
      week: 7,
      title: "프로젝트 개발",
      description: "지금까지 배운 내용으로 실제 프로젝트를 만듭니다",
      progress: 0,
      status: "예정",
      tasks: [
        { id: "w7-1", title: "프로젝트 기획 및 설계", completed: false },
        { id: "w7-2", title: "컴포넌트 구조 설계", completed: false },
        { id: "w7-3", title: "API 연동", completed: false },
        { id: "w7-4", title: "스타일링 및 반응형", completed: false },
        { id: "w7-5", title: "테스트 및 디버깅", completed: false }
      ]
    },
    {
      week: 8,
      title: "배포 및 최적화",
      description: "프로젝트를 배포하고 성능을 최적화합니다",
      progress: 0,
      status: "예정",
      tasks: [
        { id: "w8-1", title: "빌드 최적화", completed: false },
        { id: "w8-2", title: "Netlify 배포", completed: false },
        { id: "w8-3", title: "성능 측정 및 개선", completed: false },
        { id: "w8-4", title: "SEO 최적화", completed: false },
        { id: "w8-5", title: "포트폴리오 정리", completed: false }
      ]
    }
  ]

  const todayTasks = [
    { id: "today-1", title: "CSS Grid 레이아웃 실습", difficulty: "중급", time: "30분", icon: Code },
    { id: "today-2", title: "반응형 네비게이션 만들기", difficulty: "고급", time: "45분", icon: Globe },
    { id: "today-3", title: "학습 노트 정리", difficulty: "초급", time: "15분", icon: BookOpen },
    { id: "today-4", title: "Git 커밋 및 푸시", difficulty: "초급", time: "10분", icon: Database }
  ]

  const handleTaskCheck = (taskId) => {
    const newChecked = new Set(checkedTasks)
    if (newChecked.has(taskId)) {
      newChecked.delete(taskId)
    } else {
      newChecked.add(taskId)
    }
    setCheckedTasks(newChecked)
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case '초급': return 'bg-green-100 text-green-800'
      case '중급': return 'bg-yellow-100 text-yellow-800'
      case '고급': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case '완료': return 'bg-green-100 text-green-800'
      case '진행중': return 'bg-blue-100 text-blue-800'
      case '예정': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">학습 가이드</h1>
        <p className="text-muted-foreground">
          8주 완주 프로그램으로 체계적으로 성장하세요 📚
        </p>
      </div>

      <Tabs defaultValue="today" className="space-y-4">
        <TabsList>
          <TabsTrigger value="today">오늘의 과제</TabsTrigger>
          <TabsTrigger value="program">8주 프로그램</TabsTrigger>
          <TabsTrigger value="progress">진행 현황</TabsTrigger>
        </TabsList>

        {/* 오늘의 과제 */}
        <TabsContent value="today" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                오늘의 학습 과제
              </CardTitle>
              <CardDescription>
                오늘 완료해야 할 핵심 과제들입니다. 하나씩 체크해보세요!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {todayTasks.map((task) => {
                  const Icon = task.icon
                  const isChecked = checkedTasks.has(task.id)
                  return (
                    <div key={task.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={() => handleTaskCheck(task.id)}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <span className={`font-medium ${isChecked ? 'line-through text-muted-foreground' : ''}`}>
                            {task.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={getDifficultyColor(task.difficulty)}>
                            {task.difficulty}
                          </Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {task.time}
                          </span>
                        </div>
                      </div>
                      {isChecked && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 8주 프로그램 */}
        <TabsContent value="program" className="space-y-4">
          <div className="grid gap-4">
            {weeklyProgram.map((week) => (
              <Card key={week.week}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Week {week.week}: {week.title}
                        <Badge className={getStatusColor(week.status)}>
                          {week.status}
                        </Badge>
                      </CardTitle>
                      <CardDescription>{week.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{week.progress}%</div>
                      <Progress value={week.progress} className="w-20" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {week.tasks.map((task) => (
                      <div key={task.id} className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          task.completed 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-muted-foreground'
                        }`}>
                          {task.completed && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className={`flex-1 ${
                          task.completed 
                            ? 'line-through text-muted-foreground' 
                            : 'text-foreground'
                        }`}>
                          {task.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  {week.status === '진행중' && (
                    <Button className="w-full mt-4">
                      이어서 학습하기 <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 진행 현황 */}
        <TabsContent value="progress" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>전체 진행률</CardTitle>
                <CardDescription>8주 프로그램 완주까지</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">35%</div>
                <Progress value={35} className="mb-2" />
                <p className="text-sm text-muted-foreground">
                  28개 과제 중 10개 완료
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>이번 주 목표</CardTitle>
                <CardDescription>Week 2 완료까지</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">60%</div>
                <Progress value={60} className="mb-2" />
                <p className="text-sm text-muted-foreground">
                  5개 과제 중 3개 완료
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>학습 통계</CardTitle>
              <CardDescription>지금까지의 학습 성과</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">14</div>
                  <div className="text-sm text-muted-foreground">연속 학습 일수</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">28</div>
                  <div className="text-sm text-muted-foreground">완료한 과제</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">42</div>
                  <div className="text-sm text-muted-foreground">총 학습 시간</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

