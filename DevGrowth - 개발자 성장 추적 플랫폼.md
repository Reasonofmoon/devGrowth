# DevGrowth - 개발자 성장 추적 플랫폼

> 매일 조금씩 성장하는 개발자를 위한 개인 맞춤형 학습 관리 플랫폼

## 🎯 프로젝트 개요

DevGrowth는 개발자의 체계적인 성장을 지원하는 웹 애플리케이션입니다. 8주 완주 프로그램을 통해 초보 개발자부터 중급 개발자까지 단계별로 학습할 수 있도록 도와줍니다.

## ✨ 주요 기능

### 📊 대시보드
- 오늘의 학습 현황 및 진행률 표시
- 연속 학습 일수 추적
- 빠른 액션 버튼으로 주요 기능 접근
- 오늘의 과제 목록 및 완료 상태

### 📚 학습 가이드
- **8주 완주 프로그램**: 체계적인 단계별 학습 커리큘럼
- **오늘의 과제**: 일일 학습 목표 및 체크리스트
- **진행 현황**: 전체 및 주간 진행률 시각화
- **인터랙티브 체크리스트**: 실시간 진행 상황 업데이트

### 📁 파일 관리
- **프로젝트 구조**: 날짜별 학습 프로젝트 관리
- **코드 스니펫**: 재사용 가능한 코드 조각 저장소
- **학습 노트**: 개념 정리 및 메모 관리
- **태그 시스템**: 효율적인 분류 및 검색

### 🎯 목표 관리
- **SMART 목표 설정**: 단기/중기/장기 목표 관리
- **진행률 추적**: 목표별 달성률 시각화
- **성취 기록**: 완료한 목표 및 마일스톤 관리
- **데드라인 관리**: 목표 기한 설정 및 알림

### 📈 통계 및 분석
- **학습 패턴 분석**: 주간/월간 학습 시간 추이
- **기술 숙련도**: 레이더 차트로 스킬 레벨 시각화
- **학습 분야 분포**: 시간 투자 비율 분석
- **성과 지표**: 완료한 과제 수, 연속 학습 일수 등

### ⚙️ 설정
- **개인 프로필**: 이름, 레벨, 일일 목표 설정
- **알림 설정**: 학습 리마인더 및 진행 상황 알림
- **외관 설정**: 테마, 언어, 컴팩트 모드
- **데이터 관리**: 백업, 복원, 초기화

## 🛠️ 기술 스택

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 🚀 시작하기

### 개발 환경 설정

1. **의존성 설치**
   ```bash
   pnpm install
   ```

2. **개발 서버 실행**
   ```bash
   pnpm run dev
   ```
   브라우저에서 `http://localhost:5173`으로 접속

3. **프로덕션 빌드**
   ```bash
   pnpm run build
   ```

4. **빌드 미리보기**
   ```bash
   pnpm run preview
   ```

### Netlify 배포

1. **빌드 생성**
   ```bash
   pnpm run build
   ```

2. **Netlify에 배포**
   - Netlify 대시보드에서 "New site from Git" 선택
   - GitHub 저장소 연결
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Deploy 실행

또는 Netlify CLI 사용:
```bash
# Netlify CLI 설치
npm install -g netlify-cli

# 배포
netlify deploy --prod --dir=dist
```

## 📱 반응형 디자인

- **Desktop First**: 개발자의 주 작업 환경 최적화
- **Mobile Optimized**: 이동 중 학습 확인 가능
- **Tablet Friendly**: 코드 리뷰 및 학습에 적합

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: #3B82F6 (파란색 - 신뢰감)
- **Secondary**: #10B981 (초록색 - 성장)
- **Accent**: #F59E0B (주황색 - 에너지)
- **Neutral**: #6B7280 (회색 - 차분함)

### 타이포그래피
- **Heading & Body**: Inter (가독성 우수)
- **Code**: Fira Code (코드 친화적)

## 📊 8주 학습 프로그램

1. **Week 1**: 개발 환경 설정 및 HTML 기초
2. **Week 2**: CSS 스타일링 마스터
3. **Week 3**: JavaScript 기초
4. **Week 4**: JavaScript 심화 (ES6+)
5. **Week 5**: React 기초
6. **Week 6**: React 심화 (Hooks, Context)
7. **Week 7**: 프로젝트 개발
8. **Week 8**: 배포 및 최적화

## 💾 데이터 저장

- **로컬 스토리지**: 학습 진행 상황, 설정 등
- **세션 스토리지**: 임시 데이터
- **내보내기/가져오기**: JSON 형태로 데이터 백업 가능

## 🔧 개발 가이드

### 프로젝트 구조
```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── ui/             # shadcn/ui 컴포넌트
│   └── Layout.jsx      # 메인 레이아웃
├── pages/              # 페이지 컴포넌트
│   ├── Dashboard.jsx
│   ├── LearningGuide.jsx
│   ├── FileManager.jsx
│   ├── Goals.jsx
│   ├── Statistics.jsx
│   └── Settings.jsx
├── lib/                # 유틸리티 함수
├── assets/             # 정적 자산
├── App.jsx             # 메인 앱 컴포넌트
└── main.jsx            # 엔트리 포인트
```

### 컴포넌트 가이드라인
- 함수형 컴포넌트 사용
- React Hooks 활용
- shadcn/ui 컴포넌트 우선 사용
- Tailwind CSS로 스타일링

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🙏 감사의 말

- [shadcn/ui](https://ui.shadcn.com/) - 아름다운 UI 컴포넌트
- [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 우선 CSS 프레임워크
- [Lucide](https://lucide.dev/) - 깔끔한 아이콘 라이브러리
- [Recharts](https://recharts.org/) - React 차트 라이브러리

---

**DevGrowth와 함께 매일 성장하는 개발자가 되어보세요! 🚀**

