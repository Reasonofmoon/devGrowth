import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { 
  User, 
  Bell, 
  Palette,
  Download,
  Upload,
  Trash2,
  Shield,
  Moon,
  Sun,
  Globe,
  Clock
} from 'lucide-react'

export default function Settings() {
  const [profile, setProfile] = useState({
    name: '김개발',
    email: 'kim.developer@example.com',
    level: 'beginner',
    dailyGoal: 2,
    timezone: 'Asia/Seoul'
  })

  const [notifications, setNotifications] = useState({
    dailyReminder: true,
    weeklyReport: true,
    goalDeadline: true,
    achievements: true,
    emailNotifications: false
  })

  const [appearance, setAppearance] = useState({
    theme: 'system',
    language: 'ko',
    compactMode: false
  })

  const handleProfileChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const handleNotificationChange = (field, value) => {
    setNotifications(prev => ({ ...prev, [field]: value }))
  }

  const handleAppearanceChange = (field, value) => {
    setAppearance(prev => ({ ...prev, [field]: value }))
  }

  const exportData = () => {
    // 데이터 내보내기 로직
    console.log('데이터 내보내기')
  }

  const importData = () => {
    // 데이터 가져오기 로직
    console.log('데이터 가져오기')
  }

  const resetData = () => {
    // 데이터 초기화 로직
    if (confirm('모든 데이터를 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
      console.log('데이터 초기화')
    }
  }

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground">
          개인 설정을 관리하고 앱을 맞춤화하세요 ⚙️
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">프로필</TabsTrigger>
          <TabsTrigger value="notifications">알림</TabsTrigger>
          <TabsTrigger value="appearance">외관</TabsTrigger>
          <TabsTrigger value="data">데이터</TabsTrigger>
        </TabsList>

        {/* 프로필 설정 */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                개인 정보
              </CardTitle>
              <CardDescription>
                기본 프로필 정보를 관리합니다
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="level">현재 레벨</Label>
                  <Select value={profile.level} onValueChange={(value) => handleProfileChange('level', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">초급자</SelectItem>
                      <SelectItem value="intermediate">중급자</SelectItem>
                      <SelectItem value="advanced">고급자</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dailyGoal">일일 학습 목표 (시간)</Label>
                  <Select value={profile.dailyGoal.toString()} onValueChange={(value) => handleProfileChange('dailyGoal', parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1시간</SelectItem>
                      <SelectItem value="2">2시간</SelectItem>
                      <SelectItem value="3">3시간</SelectItem>
                      <SelectItem value="4">4시간</SelectItem>
                      <SelectItem value="5">5시간 이상</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">시간대</Label>
                <Select value={profile.timezone} onValueChange={(value) => handleProfileChange('timezone', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Asia/Seoul">한국 표준시 (KST)</SelectItem>
                    <SelectItem value="America/New_York">동부 표준시 (EST)</SelectItem>
                    <SelectItem value="Europe/London">그리니치 표준시 (GMT)</SelectItem>
                    <SelectItem value="Asia/Tokyo">일본 표준시 (JST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button>프로필 저장</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 알림 설정 */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                알림 설정
              </CardTitle>
              <CardDescription>
                받고 싶은 알림을 선택하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>일일 학습 리마인더</Label>
                  <p className="text-sm text-muted-foreground">
                    매일 설정한 시간에 학습 알림을 받습니다
                  </p>
                </div>
                <Switch
                  checked={notifications.dailyReminder}
                  onCheckedChange={(checked) => handleNotificationChange('dailyReminder', checked)}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>주간 리포트</Label>
                  <p className="text-sm text-muted-foreground">
                    매주 학습 진행 상황 요약을 받습니다
                  </p>
                </div>
                <Switch
                  checked={notifications.weeklyReport}
                  onCheckedChange={(checked) => handleNotificationChange('weeklyReport', checked)}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>목표 마감일 알림</Label>
                  <p className="text-sm text-muted-foreground">
                    목표 마감일이 다가오면 알림을 받습니다
                  </p>
                </div>
                <Switch
                  checked={notifications.goalDeadline}
                  onCheckedChange={(checked) => handleNotificationChange('goalDeadline', checked)}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>성취 알림</Label>
                  <p className="text-sm text-muted-foreground">
                    새로운 성취를 달성했을 때 알림을 받습니다
                  </p>
                </div>
                <Switch
                  checked={notifications.achievements}
                  onCheckedChange={(checked) => handleNotificationChange('achievements', checked)}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>이메일 알림</Label>
                  <p className="text-sm text-muted-foreground">
                    중요한 알림을 이메일로도 받습니다
                  </p>
                </div>
                <Switch
                  checked={notifications.emailNotifications}
                  onCheckedChange={(checked) => handleNotificationChange('emailNotifications', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 외관 설정 */}
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                외관 설정
              </CardTitle>
              <CardDescription>
                앱의 모양과 느낌을 맞춤화하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>테마</Label>
                <Select value={appearance.theme} onValueChange={(value) => handleAppearanceChange('theme', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4" />
                        라이트 모드
                      </div>
                    </SelectItem>
                    <SelectItem value="dark">
                      <div className="flex items-center gap-2">
                        <Moon className="h-4 w-4" />
                        다크 모드
                      </div>
                    </SelectItem>
                    <SelectItem value="system">시스템 설정 따르기</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>언어</Label>
                <Select value={appearance.language} onValueChange={(value) => handleAppearanceChange('language', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ko">한국어</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ja">日本語</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>컴팩트 모드</Label>
                  <p className="text-sm text-muted-foreground">
                    더 많은 정보를 한 화면에 표시합니다
                  </p>
                </div>
                <Switch
                  checked={appearance.compactMode}
                  onCheckedChange={(checked) => handleAppearanceChange('compactMode', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 데이터 관리 */}
        <TabsContent value="data" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                데이터 관리
              </CardTitle>
              <CardDescription>
                학습 데이터를 백업하고 관리하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Button variant="outline" onClick={exportData}>
                  <Download className="mr-2 h-4 w-4" />
                  데이터 내보내기
                </Button>
                <Button variant="outline" onClick={importData}>
                  <Upload className="mr-2 h-4 w-4" />
                  데이터 가져오기
                </Button>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label className="text-destructive">위험 구역</Label>
                <p className="text-sm text-muted-foreground">
                  아래 작업들은 되돌릴 수 없습니다. 신중하게 진행하세요.
                </p>
                <Button variant="destructive" onClick={resetData}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  모든 데이터 초기화
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>저장소 사용량</CardTitle>
              <CardDescription>
                현재 사용 중인 로컬 저장소 현황
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>학습 진행 데이터</span>
                  <span className="text-sm text-muted-foreground">2.3 MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>코드 스니펫</span>
                  <span className="text-sm text-muted-foreground">1.8 MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>학습 노트</span>
                  <span className="text-sm text-muted-foreground">0.9 MB</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center font-medium">
                  <span>총 사용량</span>
                  <span>5.0 MB</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

