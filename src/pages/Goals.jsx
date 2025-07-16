import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Target, 
  Calendar, 
  CheckCircle,
  Clock,
  Plus,
  TrendingUp,
  Award,
  Flag
} from 'lucide-react'

export default function Goals() {
  const shortTermGoals = [
    {
      id: 1,
      title: "CSS Grid 마스터하기",
      description: "CSS Grid의 모든 속성을 이해하고 실제 레이아웃에 적용",
      progress: 75,
      deadline: "2025-01-25",
      status: "진행중",
      category: "기술 스킬"
    },
    {
      id: 2,
      title: "React 컴포넌트 10개 만들기",
      description: "재사용 가능한 React 컴포넌트 라이브러리 구축",
      progress: 40,
      deadline: "2025-01-30",
      status: "진행중",
      category: "프로젝트"
    },
    {
      id: 3,
      title: "JavaScript 알고리즘 문제 20개 풀기",
      description: "코딩 테스트 대비 기본 알고리즘 문제 해결",
      progress: 100,
      deadline: "2025-01-20",
      status: "완료",
      category: "문제 해결"
    }
  ]

  const mediumTermGoals = [
    {
      id: 1,
      title: "포트폴리오 웹사이트 완성",
      description: "개인 브랜딩을 위한 반응형 포트폴리오 사이트 제작",
      progress: 30,
      deadline: "2025-02-15",
      status: "진행중",
      category: "프로젝트"
    },
    {
      id: 2,
      title: "React + TypeScript 프로젝트",
      description: "TypeScript를 활용한 중급 규모의 React 애플리케이션 개발",
      progress: 15,
      deadline: "2025-02-28",
      status: "계획중",
      category: "기술 스킬"
    }
  ]

  const longTermGoals = [
    {
      id: 1,
      title: "프론트엔드 개발자 취업",
      description: "원하는 회사에 프론트엔드 개발자로 입사하기",
      progress: 25,
      deadline: "2025-04-30",
      status: "진행중",
      category: "커리어"
    },
    {
      id: 2,
      title: "오픈소스 프로젝트 기여",
      description: "GitHub의 인기 오픈소스 프로젝트에 의미있는 기여하기",
      progress: 5,
      deadline: "2025-06-30",
      status: "계획중",
      category: "커뮤니티"
    }
  ]

  const achievements = [
    {
      id: 1,
      title: "첫 번째 웹사이트 완성",
      description: "HTML, CSS, JavaScript로 만든 첫 프로젝트",
      date: "2025-01-10",
      category: "마일스톤"
    },
    {
      id: 2,
      title: "연속 학습 7일 달성",
      description: "일주일 동안 매일 학습 목표 달성",
      date: "2025-01-15",
      category: "습관"
    },
    {
      id: 3,
      title: "React 첫 컴포넌트 작성",
      description: "React를 사용한 첫 번째 함수형 컴포넌트 완성",
      date: "2025-01-18",
      category: "기술"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case '완료': return 'bg-green-100 text-green-800'
      case '진행중': return 'bg-blue-100 text-blue-800'
      case '계획중': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case '기술 스킬': return 'bg-purple-100 text-purple-800'
      case '프로젝트': return 'bg-blue-100 text-blue-800'
      case '문제 해결': return 'bg-green-100 text-green-800'
      case '커리어': return 'bg-red-100 text-red-800'
      case '커뮤니티': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const GoalCard = ({ goal, showDeadline = true }) => (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            <CardTitle className="text-lg">{goal.title}</CardTitle>
          </div>
          <Badge className={getStatusColor(goal.status)}>
            {goal.status}
          </Badge>
        </div>
        <CardDescription>{goal.description}</CardDescription>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={getCategoryColor(goal.category)}>
            {goal.category}
          </Badge>
          {showDeadline && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {goal.deadline}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>진행률</span>
            <span>{goal.progress}%</span>
          </div>
          <Progress value={goal.progress} />
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">목표 관리</h1>
          <p className="text-muted-foreground">
            체계적인 목표 설정으로 성장을 가속화하세요 🎯
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          새 목표 추가
        </Button>
      </div>

      {/* 목표 현황 요약 */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 목표</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              활성 목표 수
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">완료율</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">43%</div>
            <p className="text-xs text-muted-foreground">
              평균 달성률
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">이번 달</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              완료 예정 목표
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">성취</CardTitle>
            <Award className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              달성한 목표
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="short" className="space-y-4">
        <TabsList>
          <TabsTrigger value="short">단기 목표</TabsTrigger>
          <TabsTrigger value="medium">중기 목표</TabsTrigger>
          <TabsTrigger value="long">장기 목표</TabsTrigger>
          <TabsTrigger value="achievements">성취</TabsTrigger>
        </TabsList>

        {/* 단기 목표 */}
        <TabsContent value="short" className="space-y-4">
          <div className="grid gap-4">
            {shortTermGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </TabsContent>

        {/* 중기 목표 */}
        <TabsContent value="medium" className="space-y-4">
          <div className="grid gap-4">
            {mediumTermGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </TabsContent>

        {/* 장기 목표 */}
        <TabsContent value="long" className="space-y-4">
          <div className="grid gap-4">
            {longTermGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </TabsContent>

        {/* 성취 */}
        <TabsContent value="achievements" className="space-y-4">
          <div className="grid gap-4">
            {achievements.map((achievement) => (
              <Card key={achievement.id}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <Badge variant="outline" className={getCategoryColor(achievement.category)}>
                      {achievement.category}
                    </Badge>
                  </div>
                  <CardDescription>{achievement.description}</CardDescription>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {achievement.date}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

