import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Target, 
  Clock, 
  Flame,
  CheckCircle,
  PlayCircle,
  FileText,
  Code
} from 'lucide-react'

export default function Dashboard() {
  const [todayProgress, setTodayProgress] = useState(0)
  const [weekProgress, setWeekProgress] = useState(0)
  const [streak, setStreak] = useState(0)
  const [studyTime, setStudyTime] = useState(0)

  // 로컬 스토리지에서 데이터 로드
  useEffect(() => {
    const savedData = localStorage.getItem('devgrowth-progress')
    if (savedData) {
      const data = JSON.parse(savedData)
      setTodayProgress(data.todayProgress || 0)
      setWeekProgress(data.weekProgress || 0)
      setStreak(data.streak || 0)
      setStudyTime(data.studyTime || 0)
    }
  }, [])

  const quickActions = [
    {
      title: '오늘의 과제 시작',
      description: '일일 학습 체크리스트 확인',
      icon: PlayCircle,
      action: () => window.location.href = '/learning',
      color: 'bg-blue-500'
    },
    {
      title: '새 프로젝트 생성',
      description: '새로운 학습 프로젝트 시작',
      icon: FileText,
      action: () => window.location.href = '/files',
      color: 'bg-green-500'
    },
    {
      title: '학습 노트 작성',
      description: '오늘 배운 내용 정리',
      icon: BookOpen,
      action: () => window.location.href = '/files',
      color: 'bg-purple-500'
    },
    {
      title: '코드 스니펫 저장',
      description: '유용한 코드 조각 보관',
      icon: Code,
      action: () => window.location.href = '/files',
      color: 'bg-orange-500'
    }
  ]

  const todayTasks = [
    { id: 1, title: 'JavaScript 기초 문법 복습', completed: true },
    { id: 2, title: 'React 컴포넌트 실습', completed: true },
    { id: 3, title: '프로젝트 구조 설계', completed: false },
    { id: 4, title: 'Git 커밋 및 푸시', completed: false },
    { id: 5, title: '학습 노트 정리', completed: false }
  ]

  const completedTasks = todayTasks.filter(task => task.completed).length
  const totalTasks = todayTasks.length
  const progressPercentage = (completedTasks / totalTasks) * 100

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">
          오늘도 성장하는 개발자가 되어보세요! 🚀
        </p>
      </div>

      {/* 주요 지표 카드들 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">오늘의 진행률</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedTasks}/{totalTasks}</div>
            <Progress value={progressPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {progressPercentage.toFixed(0)}% 완료
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">연속 학습 일수</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{streak}일</div>
            <p className="text-xs text-muted-foreground">
              꾸준함이 실력이 됩니다
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">이번 주 진행률</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{weekProgress}%</div>
            <Progress value={weekProgress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              주간 목표 달성률
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">학습 시간</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{studyTime}분</div>
            <p className="text-xs text-muted-foreground">
              오늘 누적 시간
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 빠른 액션 */}
        <Card>
          <CardHeader>
            <CardTitle>빠른 액션</CardTitle>
            <CardDescription>
              자주 사용하는 기능들에 빠르게 접근하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-auto p-4"
                  onClick={action.action}
                >
                  <div className={`p-2 rounded-md ${action.color} mr-3`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {action.description}
                    </div>
                  </div>
                </Button>
              )
            })}
          </CardContent>
        </Card>

        {/* 오늘의 과제 */}
        <Card>
          <CardHeader>
            <CardTitle>오늘의 과제</CardTitle>
            <CardDescription>
              오늘 완료해야 할 학습 목표들입니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {todayTasks.map((task) => (
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
                  {task.completed && (
                    <Badge variant="secondary" className="text-xs">
                      완료
                    </Badge>
                  )}
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" onClick={() => window.location.href = '/learning'}>
              전체 과제 보기
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

