# Storybook 인스톨

```sh
npx -p @storybook/cli sb init
```

# Storybook 인스톨 문제 해결 방법

```sh
# 설치 시, 모든 피어 종속 모듈 제외 설정
npx --legacy-peer-deps sb init
```

## 참고

- [github.com/storybookjs/storybook/issues](https://github.com/storybookjs/storybook/issues/12983#issuecomment-773273829)
- [--legacy-peer-deps](https://docs.npmjs.com/cli/v7/commands/npm-install#configuration)