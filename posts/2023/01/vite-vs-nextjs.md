# Vite vs Next.js

웹 프론트엔드 개발자로서, 항상 최적의 도구를 찾는 것이 중요합니다. 이번에는 **ReactJS** 기반의 두 가지 대표적인 빌드 도구, **Vite**와 **Next.js**를 비교해보겠습니다.

ReactJS 기반으로 비교하는 이유는 ReactJS가 현대 웹 애플리케이션 개발에 널리 사용되고 있기 때문입니다. 또한, ReactJS는 컴포넌트 기반의 설계를 도입함으로써 재사용 가능한 코드 작성을 쉽게 해주어 개발 시간을 단축시키는 장점이 있습니다. 이런 이유로 ReactJS를 기준으로 Vite와 Next.js를 비교하게 되었습니다.

## Vite

![Vite](https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60)

[Vite](https://vitejs.dev/)는 빠른 개발 서버 시작 시간과 HMR(Hot Module Replacement) 반응 속도를 제공합니다. Vite는 모듈을 미리 번들하지 않고 필요할 때 ES 모듈을 통해 불러오므로 초기 로드 시간이 획기적으로 줄어듭니다.

### ReactJS에 Vite 설치 및 빌드 과정

Vite는 모던 프론트엔드 환경을 위한 빌드 도구입니다. Vite는 빠른 콜드 서버 시작, 빠른 HMR 및 진정한 on-demand 컴파일을 제공합니다.

아래는 ReactJS 프로젝트에 Vite를 설치하고, 빌드하는 과정을 단계별로 설명한 것입니다.

#### Step 1: 프로젝트 폴더 생성 및 이동

```bash
mkdir my-vite-project
cd my-vite-project
```

#### Step 2: React + TypeScript 템플릿으로 Vite 프로젝트 생성

```bash
yarn create vite my-vite-project --template react-ts
```

#### Step 3: 프로젝트 폴더로 이동

```bash
cd my-vite-project
```

#### Step 4: 의존성 설치

프로젝트의 의존성을 설치합니다.

```bash
yarn install
```

#### Step 5: 로컬 서버 실행

로컬 서버를 실행하려면 다음 명령어를 입력합니다.

```bash
yarn dev
```

만약 다른 포트를 사용하고 싶다면, `vite.config.js` 파일을 만들고 다음과 같이 설정을 추가합니다:

```js
// vite.config.js
export default {
  server: {
    port: 5173,
  },
};
```

이제 다음의 명령어로 서버를 실행할 수 있습니다.

```bash
yarn vite
```

#### Step 6: 프로젝트 빌드

프로덕션용으로 프로젝트를 빌드하려면 다음 명령어를 사용합니다.

```bash
yarn build
```

빌드 결과물은 `dist` 폴더에 생성됩니다.

이렇게 해서 ReactJS 프로젝트에 Vite를 설치하고 빌드하는 과정이 끝났습니다. 이제 프로젝트를 자유롭게 개발하실 수 있습니다!

## Next.js

![Next.js](https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60)

[Next.js](https://nextjs.org/)는 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), API 라우트 등의 기능을 제공합니다. 이는 검색 엔진 최적화(SEO)를 위해 중요한 요소입니다.

### Next.js 설치 및 빌드 과정

Next.js는 React 애플리케이션을 위한 효율적인 프레임워크입니다. 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), API 라우트 등을 지원합니다.

아래는 Next.js 프로젝트를 생성하고 빌드하는 단계별 과정을 설명한 것입니다.

#### Step 1: 프로젝트 폴더 생성 및 이동

```bash
mkdir my-next-project
cd my-next-project
```

#### Step 2: Next.js 앱 생성

```bash
yarn create next-app
```

#### Step 3: 의존성 설치

프로젝트의 의존성을 설치합니다.

```bash
yarn install
```

#### Step 4: 개발 서버 실행

로컬에서 개발 서버를 실행하려면 다음 명령어를 입력합니다.

```bash
yarn dev
```

기본적으로 Next.js는 3000번 포트를 사용합니다. 다른 포트를 사용하려면 `-p` 옵션을 추가하면 됩니다.

```bash
yarn dev -p 5173
```

#### Step 5: 프로젝트 빌드

프로덕션용으로 프로젝트를 빌드하려면 다음 명령어를 사용합니다.

```bash
yarn build
```

빌드 결과물은 `.next` 폴더에 생성됩니다.

이렇게 해서 Next.js 프로젝트를 생성하고 빌드하는 과정이 끝났습니다. 이제 프로젝트를 자유롭게 개발하실 수 있습니다!

## 결론

Vite와 Next.js는 각각의 장점을 가지고 있습니다. Vite는 빠른 개발 환경을 제공하고, Next.js는 SSR과 SSG를 통해 SEO를 향상시킵니다. 따라서 프로젝트의 요구 사항에 따라 적합한 도구를 선택하면 됩니다.

더 자세한 내용을 알고 싶다면 아래 YouTube 링크를 확인해보세요.

[![ReactJS Vite vs Next.js](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
