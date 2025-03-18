module.exports = {
  // 환경 설정: 브라우저와 Node.js 환경에서 실행될 것임을 명시합니다.
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  // extends: ESLint 규칙을 확장하여 사용할 기본 설정입니다.
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended', // TypeScript 권장 규칙
    'next', // Next.js 권장 규칙을 추가합니다.
    'next/core-web-vitals', // Next.js의 Core Web Vitals 권장 사항 적용
    'plugin:prettier/recommended', // Prettier 통합을 포함한 설정
    'plugin:@next/next/recommended',
  ],
  // parser: ESLint에게 TypeScript 코드를 분석하게 할 파서를 설정합니다.
  parser: '@typescript-eslint/parser',
  // parserOptions: 파싱할 ECMAScript 버전 및 모듈에 대한 옵션
  parserOptions: {
    ecmaVersion: 'latest', // 최신 ECMAScript 버전을 사용합니다.
    sourceType: 'module', // 모듈 시스템 사용 설정
    ecmaFeatures: {
      jsx: true, // JSX 파싱 활성화
    },
  },
  // plugins: ESLint에서 사용할 추가 플러그인 목록
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier' // Prettier 플러그인 활성화
  ],
  // rules: 프로젝트에 특화된 규칙 설정
  rules: {
    'prettier/prettier': 'error', // Prettier 규칙 위반을 에러로 표시
    'react/react-in-jsx-scope': 'off', // Next.js에서는 React를 import하지 않아도 됩니다.
    '@typescript-eslint/explicit-module-boundary-types': 'off' // 함수의 반환 타입 명시 강제 해제
  },
  // settings: ESLint 플러그인의 추가적인 정보를 설정
  settings: {
    react: {
      version: 'detect', // ESLint 플러그인이 React 버전을 자동으로 감지하도록 설정
    },
  },
};
