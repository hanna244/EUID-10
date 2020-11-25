# 오프라인 학습

2020년 11월 25일. 학습 목표는 다음과 같습니다.

<br/>

## 🎛 운영체제 구성

💻 Macbook Pro의 운영체제인 OSX 사용법에 대해 안내합니다.

- Mac OSX 운영체제 기본 활용 방법 안내

<br/>

## ⚙️ 개발 환경 구성

개발에 필요한 환경을 구성합니다.

- [웹 브라우저 **Chrome** 구성](https://bit.ly/3622bw6)
- [Mac OS용 패캐지 매니저 **Homebrew** 구성](https://bit.ly/363WDBr)
- [Node.js 버전 관리 매니저 <abbr title="Node Version Manager">**NVM**</abbr> 구성](https://bit.ly/2J97X6e)
- [버전 관리 도구 **Git** 구성](https://bit.ly/3fwoq0i)
- [보다 강력한 터미널 앱 **iTerm2** 구성](https://bit.ly/2UW7HKw)
- <details>
    <summary><a href="https://sass-lang.com/install">Sass 개발 환경</a> 구성 가이드</summary>
    <!-- <br/> -->

    ### Sass 패키지 설치
    
    **Node.js 사용자**라면 다음의 명령을 실행하여 Dart Sass를 설치합니다.

    ```sh
    $ npm i -g sass
    ```

    > **NOTE.** 🐧  
    > 다만, 이 방법으로 설치할 경우 다소 느리게 작동하는 순수 JavaScript 구현용 Sass가 설치됩니다.
    > 그럼에도 사용하는 환경인 인터페이스는 동일하므로 보다 빠른 속도가 필요할 때 다른 방법으로 설치 교체할 수 있습니다.

    Mac OSX, Linux 사용자인 경우 **Homebrew**를 사용해 Dart Sass를 설치해 활용하는 것을 권장합니다.

    ```sh
    $ brew install sass/sass/sass
    ```

    ### [Dart Sass란?](https://github.com/sass/dart-sass#why-dart)

    Dart Sass는 기존의 Ruby Sass를 대체합니다. Dart Sass는 다음의 이점을 가집니다.

    - **빠릅니다.** Ruby보다 월등히 빠르며, C++과 거의 비슷한 속도를 보입니다. ([Dart VM 활용](https://github.com/sass/dart-sass/blob/master/perf.md))
    - Dart VM은 별도의 의존 종속성을 가지지 않고, 독립적으로 실행되어 컴파일합니다.<br/>그리고 **JavaScript로 컴파일되므로 NPM을 통해 쉽게 사용 가능합니다.**
    - **사용하기 쉽습니다.** Dart는 C++보다 높은 수준의 언어이므로 메모리 관리 및 빌드 시스템 구성에 많은 시간을 쏟을 필요가 없습니다.


    ### Sass 버전 확인 및 도움말

    먼저 아래 옵션 중 하나를 사용하여 Sass를 설치 한 다음, `sass --version`을 실행하여 올바르게 설치되었는지 확인하세요.
    Sass 명령어 사용을 위한 도움말을 보려면 `sass --help` 명령을 실행합니다.

    ```sh
    $ sass --version
    $ sass --help
    ```

    ### Sass 컴파일

    명령어 환경에 Sass를 설치하면 Sass 파일(`.sass`, `.scss`)을 실행하여 CSS 파일(`.css`)로 컴파일 할 수 있습니다.
  
    ```sh
    # sass <인풋_파일> <아웃풋_파일>
    $ sass src/scss/index.scss src/css/index.css
    ```

  </details>

<br/>

## 🎨 디자인 환경 구성

디자인 파일을 열고, 편집하기 위한 환경을 구성합니다.

- [Figma 설치 및 구성](https://figma.com)
- [Spoqa Han Sans 글꼴 설치](https://spoqa.github.io/spoqa-han-sans/ko-KR/#download)

<br/>

## 🍿 Netflix 실습

한나님의 실습 결과물을 검토한 후, 개선. 그리고 **실제 제작 과정에서 필요한 Tip & Knowhow를 전합니다.**

- 모바일 전용 페이지 컨펌(Confirm) → 문제 확인 / 개선 방향 검토
- UI 디자인 시안 → 코드 핸드오프(Hand-off) 라이브 시연 → 실습