import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  FolderOpen, 
  FileText, 
  Code, 
  Image,
  Plus,
  Search,
  Star,
  Calendar,
  Tag
} from 'lucide-react'

export default function FileManager() {
  const [searchTerm, setSearchTerm] = useState('')

  const projectStructure = [
    {
      name: "Week1-HTML-Basics",
      type: "folder",
      date: "2025-01-10",
      files: [
        { name: "index.html", type: "html", size: "2.1 KB" },
        { name: "style.css", type: "css", size: "1.5 KB" },
        { name: "notes.md", type: "markdown", size: "0.8 KB" }
      ]
    },
    {
      name: "Week2-CSS-Styling",
      type: "folder",
      date: "2025-01-15",
      files: [
        { name: "flexbox-practice.html", type: "html", size: "3.2 KB" },
        { name: "grid-layout.html", type: "html", size: "2.8 KB" },
        { name: "responsive.css", type: "css", size: "4.1 KB" },
        { name: "animation.css", type: "css", size: "1.9 KB" }
      ]
    },
    {
      name: "Week3-JavaScript",
      type: "folder",
      date: "2025-01-20",
      files: [
        { name: "variables.js", type: "javascript", size: "1.2 KB" },
        { name: "functions.js", type: "javascript", size: "2.5 KB" },
        { name: "dom-practice.html", type: "html", size: "3.8 KB" }
      ]
    }
  ]

  const codeSnippets = [
    {
      id: 1,
      title: "React 함수형 컴포넌트 템플릿",
      language: "javascript",
      tags: ["React", "Component", "Template"],
      code: `import React from 'react'

function ComponentName() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default ComponentName`,
      favorite: true,
      date: "2025-01-15"
    },
    {
      id: 2,
      title: "CSS Flexbox 중앙 정렬",
      language: "css",
      tags: ["CSS", "Flexbox", "Layout"],
      code: `.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`,
      favorite: false,
      date: "2025-01-12"
    },
    {
      id: 3,
      title: "JavaScript 배열 메서드 체이닝",
      language: "javascript",
      tags: ["JavaScript", "Array", "Methods"],
      code: `const numbers = [1, 2, 3, 4, 5]

const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0)

console.log(result) // 12`,
      favorite: true,
      date: "2025-01-18"
    }
  ]

  const learningNotes = [
    {
      id: 1,
      title: "React Hooks 정리",
      content: "useState, useEffect, useContext 등 주요 훅들의 사용법과 예제",
      tags: ["React", "Hooks"],
      date: "2025-01-20",
      favorite: true
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox",
      content: "언제 Grid를 사용하고 언제 Flexbox를 사용할지에 대한 가이드라인",
      tags: ["CSS", "Layout"],
      date: "2025-01-18",
      favorite: false
    },
    {
      id: 3,
      title: "JavaScript 비동기 처리",
      content: "Promise, async/await, 콜백 함수의 차이점과 사용 시나리오",
      tags: ["JavaScript", "Async"],
      date: "2025-01-16",
      favorite: true
    }
  ]

  const getFileIcon = (type) => {
    switch (type) {
      case 'html': return <FileText className="h-4 w-4 text-orange-500" />
      case 'css': return <FileText className="h-4 w-4 text-blue-500" />
      case 'javascript': return <Code className="h-4 w-4 text-yellow-500" />
      case 'markdown': return <FileText className="h-4 w-4 text-gray-500" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getLanguageColor = (language) => {
    switch (language) {
      case 'javascript': return 'bg-yellow-100 text-yellow-800'
      case 'css': return 'bg-blue-100 text-blue-800'
      case 'html': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">파일 관리</h1>
          <p className="text-muted-foreground">
            프로젝트 파일과 학습 자료를 체계적으로 관리하세요 📁
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          새 파일 생성
        </Button>
      </div>

      {/* 검색 */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="파일, 코드 스니펫, 노트 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">프로젝트 구조</TabsTrigger>
          <TabsTrigger value="snippets">코드 스니펫</TabsTrigger>
          <TabsTrigger value="notes">학습 노트</TabsTrigger>
        </TabsList>

        {/* 프로젝트 구조 */}
        <TabsContent value="projects" className="space-y-4">
          <div className="grid gap-4">
            {projectStructure.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FolderOpen className="h-5 w-5 text-blue-500" />
                      <CardTitle>{project.name}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {project.files.map((file, fileIndex) => (
                      <div key={fileIndex} className="flex items-center justify-between p-2 rounded border hover:bg-accent/50 transition-colors">
                        <div className="flex items-center gap-2">
                          {getFileIcon(file.type)}
                          <span className="font-medium">{file.name}</span>
                          <Badge variant="outline" className={getLanguageColor(file.type)}>
                            {file.type.toUpperCase()}
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">{file.size}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 코드 스니펫 */}
        <TabsContent value="snippets" className="space-y-4">
          <div className="grid gap-4">
            {codeSnippets.map((snippet) => (
              <Card key={snippet.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      <CardTitle className="text-lg">{snippet.title}</CardTitle>
                      {snippet.favorite && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getLanguageColor(snippet.language)}>
                        {snippet.language}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{snippet.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {snippet.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{snippet.code}</code>
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 학습 노트 */}
        <TabsContent value="notes" className="space-y-4">
          <div className="grid gap-4">
            {learningNotes.map((note) => (
              <Card key={note.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      <CardTitle className="text-lg">{note.title}</CardTitle>
                      {note.favorite && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{note.date}</span>
                  </div>
                  <CardDescription>{note.content}</CardDescription>
                  <div className="flex gap-1">
                    {note.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
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

