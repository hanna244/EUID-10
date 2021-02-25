import './BeverageItem.scss'
import React from 'react'

const BeverageItem = () => {
  return (
    <>
      <li className="beverageList__item">
        <a
          className="beverageList__button"
          href="/"
          role="button"
          aria-haspopup="true"
          aria-pressed="false"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src="https://yamoo9.github.io/assets/images/ediya/iced-cherry-blossoms-latte.png"
              width="323"
              height="323"
              alt=""
            />
            <figcaption>ICED 벚꽃라떼</figcaption>
          </figure>
        </a>

        <div
          className="beverageList__dialog"
          hidden
          role="dialog"
          aria-modal="false"
          aria-labelledby="ediya-menu__item-1"
        >
          <h3
            className="beverageList__dialog--name"
            id="beverageList__dialog-1"
          >
            ICED 벚꽃라떼<span lang="en">Cherry Blossom Latte</span>
          </h3>

          <p>
            은은한 벚꽃향과 라즈베리 화이트 초콜릿 토핑이 올라간 핑크빛 라떼
          </p>

          <div className="beverageList__dialog--multiColumn is-2">
            <dl>
              <dt>칼로리</dt>
              <dd>(393kcal)</dd>
              <dt>당류</dt>
              <dd>(35g)</dd>
              <dt>단백질</dt>
              <dd>(7g)</dd>
              <dt>포화지방</dt>
              <dd>(18.6g)</dd>
              <dt>나트륨</dt>
              <dd>(149mg)</dd>
              <dt>카페인</dt>
              <dd>(0mg)</dd>
            </dl>
          </div>

          <button
            className="resetButtonutton is-close-dialog"
            type="button"
            title="닫기"
            aria-label="음료 정보 패널 닫기"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </li>

      <li className="berrgeListst__item">
        <a
          className="beverageList__button"
          href="/"
          role="button"
          aria-haspopup="true"
          aria-pressed="false"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src="https://yamoo9.github.io/assets/images/ediya/hot-cherry-blossoms-latte.png"
              width="323"
              height="323"
              alt=""
            />
            <figcaption>HOT-벚꽃라떼</figcaption>
          </figure>
        </a>
        <div
          className="beverageList__dialog"
          hidden
          role="dialog"
          aria-modal="false"
          aria-labelledby="ediya-menu__item-2"
        >
          <h3
            className="beverageList__dialog--name"
            id="beverageList__dialog-2"
          >
            HOT 벚꽃라떼<span lang="en">Cherry Blossom Latte</span>{' '}
          </h3>
          <p>
            은은한 벚꽃향과 라즈베리 화이트 초콜릿 토핑이 올라간 핑크빛 라떼
          </p>
          <div className="beverageList__dialog--multiColumn is-2">
            <dl>
              <dt>칼로리</dt>
              <dd>(430kcal)</dd>
              <dt>당류</dt>
              <dd>(38g)</dd>
              <dt>단백질</dt>
              <dd>(10g)</dd>
              <dt>포화지방</dt>
              <dd>(19.0g)</dd>
              <dt>나트륨</dt>
              <dd>(149mg)</dd>
              <dt>카페인</dt>
              <dd>(0mg)</dd>
            </dl>
          </div>
          <button
            className="resetButtonutton is-close-dialog"
            type="button"
            title="닫기"
            aria-label="음료 정보 패널 닫기"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </li>
      <li className="berrgeListst__item">
        <a
          className="beverageList__button"
          href="/"
          role="button"
          aria-haspopup="true"
          aria-pressed="false"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src="https://yamoo9.github.io/assets/images/ediya/iced-brownie-chocolate.png"
              width="323"
              height="323"
              alt=""
            />
            <figcaption>ICED-브라우니-쇼콜라</figcaption>
          </figure>
        </a>
        <div
          className="beverageList__dialog"
          hidden
          role="dialog"
          aria-modal="false"
          aria-labelledby="ediya-menu__item-3"
        >
          <h3
            className="beverageList__dialog--name"
            id="beverageList__dialog-3"
          >
            ICED 브라우니 쇼콜라<span lang="en">Brownie Chocolate</span>
          </h3>
          <p>
            깊고 진한 초콜릿의 맛에 부드러운 휘핑크림과 브라우니를 함께 어울러져
            고급스러운 디저트 같은 초콜릿 음료
          </p>
          <div className="beverageList__dialog--multiColumn is-2">
            <dl>
              <dt>칼로리</dt>
              <dd>(503kcal)</dd>
              <dt>당류</dt>
              <dd>(42g)</dd>
              <dt>단백질</dt>
              <dd>(9g)</dd>
              <dt>포화지방</dt>
              <dd>(20.8g)</dd>
              <dt>나트륨</dt>
              <dd>(262mg)</dd>
              <dt>카페인</dt>
              <dd>(12mg)</dd>
            </dl>
          </div>
          <button
            className="resetButtonutton is-close-dialog"
            type="button"
            title="닫기"
            aria-label="음료 정보 패널 닫기"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </li>
      <li className="berrgeListst__item">
        <a
          className="beverageList__button"
          href="/"
          role="button"
          aria-haspopup="true"
          aria-pressed="false"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src="https://yamoo9.github.io/assets/images/ediya/hot-brownie-chocolate.png"
              width="323"
              height="323"
              alt=""
            />
            <figcaption>HOT-브라우니-쇼콜라</figcaption>
          </figure>
        </a>
        <div
          className="beverageList__dialog"
          hidden
          role="dialog"
          aria-modal="false"
          aria-labelledby="ediya-menu__item-4"
        >
          <h3
            className="beverageList__dialog--name"
            id="beverageList__dialog-4"
          >
            HOT 브라우니 쇼콜라<span lang="en">Brownie Chocolate</span>
          </h3>
          <p>
            깊고 진한 초콜릿의 맛에 부드러운 휘핑크림과 브라우니를 함께 어울러져
            고급스러운 디저트 같은 초콜릿 음료
          </p>
          <div className="beverageList__dialog--multiColumn is-2">
            <dl>
              <dt>칼로리</dt>
              <dd>(503kcal)</dd>
              <dt>당류</dt>
              <dd>(42g)</dd>
              <dt>단백질</dt>
              <dd>(9g)</dd>
              <dt>포화지방</dt>
              <dd>(20.9g)</dd>
              <dt>나트륨</dt>
              <dd>(299mg)</dd>
              <dt>카페인</dt>
              <dd>(12mg)</dd>
            </dl>
          </div>
          <button
            className="resetButtonutton is-close-dialog"
            type="button"
            title="닫기"
            aria-label="음료 정보 패널 닫기"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </li>
      <li className="berrgeListst__item">
        <a
          className="beverageList__button"
          href="/"
          role="button"
          aria-haspopup="true"
          aria-pressed="false"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src="https://yamoo9.github.io/assets/images/ediya/jeju-green-tangerine-tea.png"
              width="323"
              height="323"
              alt=""
            />
            <figcaption>제주청귤-오리지널</figcaption>
          </figure>
        </a>
        <div
          className="beverageList__dialog"
          hidden
          role="dialog"
          aria-modal="false"
          aria-labelledby="ediya-menu__item-5"
        >
          <h3
            className="beverageList__dialog--name"
            id="beverageList__dialog-5"
          >
            제주청귤 오리지널
            <span lang="en">Jeju Green Tangerine Tea</span>
          </h3>
          <p>
            청정 제주지역에서 자라난 귀한 청귤의 풍부한 과육을 맛볼 수 있는
            새콤달콤한 홈메이드 스타일 과일차
          </p>
          <div className="beverageList__dialog--multiColumn is-2">
            <dl>
              <dt>칼로리</dt>
              <dd>(218kcal)</dd>
              <dt>당류</dt>
              <dd>(51g)</dd>
              <dt>단백질</dt>
              <dd>(0g)</dd>
              <dt>포화지방</dt>
              <dd>(0.1g)</dd>
              <dt>나트륨</dt>
              <dd>(4mg)</dd>
              <dt>카페인</dt>
              <dd>(0mg)</dd>
            </dl>
          </div>
          <button
            className="resetButtonutton is-close-dialog"
            type="button"
            title="닫기"
            aria-label="음료 정보 패널 닫기"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </li>
      <li className="berrgeListst__item">
        <a
          className="beverageList__button"
          href="/"
          role="button"
          aria-haspopup="true"
          aria-pressed="false"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src="https://yamoo9.github.io/assets/images/ediya/jeju-green-tangerine-blossom.png"
              width="323"
              height="323"
              alt=""
            />
            <figcaption>제주청귤-블라썸</figcaption>
          </figure>
        </a>
        <div
          className="beverageList__dialog"
          hidden
          role="dialog"
          aria-modal="false"
          aria-labelledby="ediya-menu__item-6"
        >
          <h3
            className="beverageList__dialog--name"
            id="beverageList__dialog-6"
          >
            제주청귤 블라썸
            <span lang="en">Jeju Green Tangerine Tea</span>
          </h3>
          <p>
            청귤의 새콤함이 복숭아, 포도 등의 다양한 과일향과 함께 어우러져
            밸런스가 훌륭한 블렌딩티
          </p>
          <div className="beverageList__dialog--multiColumn is-2">
            <dl>
              <dt>칼로리</dt>
              <dd>(202kcal)</dd>
              <dt>당류</dt>
              <dd>(46g)</dd>
              <dt>단백질</dt>
              <dd>(1g)</dd>
              <dt>포화지방</dt>
              <dd>(0.1g)</dd>
              <dt>나트륨</dt>
              <dd>(5mg)</dd>
              <dt>카페인</dt>
              <dd>(0mg)</dd>
            </dl>
          </div>
          <button
            className="resetButtonutton is-close-dialog"
            type="button"
            title="닫기"
            aria-label="음료 정보 패널 닫기"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </li>
      <li className="berrgeListst__item">
        <a
          className="beverageList__button"
          href="/"
          role="button"
          aria-haspopup="true"
          aria-pressed="false"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src="https://yamoo9.github.io/assets/images/ediya/pomegranate-tea.png"
              width="323"
              height="323"
              alt=""
            />
            <figcaption>석류-오리지널</figcaption>
          </figure>
        </a>
        <div
          className="beverageList__dialog"
          hidden
          role="dialog"
          aria-modal="false"
          aria-labelledby="ediya-menu__item-7"
        >
          <h3
            className="beverageList__dialog--name"
            id="beverageList__dialog-7"
          >
            석류 오리지널<span lang="en">Pomegranate Tea</span>
          </h3>
          <p>
            석류 특유의 산뜻한 향과 깔끔한 뒷맛이 느껴지며, 과육이 한알 한알
            살아있는 붉은 빛의 매력적인 과일차
          </p>
          <div className="beverageList__dialog--multiColumn is-2">
            <dl>
              <dt>칼로리</dt>
              <dd>(210kcal)</dd>
              <dt>당류</dt>
              <dd>(42g)</dd>
              <dt>단백질</dt>
              <dd>(0g)</dd>
              <dt>포화지방</dt>
              <dd>(0.1g)</dd>
              <dt>나트륨</dt>
              <dd>(5mg)</dd>
              <dt>카페인</dt>
              <dd>(0mg)</dd>
            </dl>
          </div>
          <button
            className="resetButtonutton is-close-dialog"
            type="button"
            title="닫기"
            aria-label="음료 정보 패널 닫기"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </li>
      <li className="berrgeListst__item">
        <a
          className="beverageList__button"
          href="/"
          role="button"
          aria-haspopup="true"
          aria-pressed="false"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src="https://yamoo9.github.io/assets/images/ediya/pomegranate-apple-lime.png"
              width="323"
              height="323"
              alt=""
            />
            <figcaption>석류-애플라임</figcaption>
          </figure>
        </a>
        <div
          className="beverageList__dialog"
          hidden
          role="dialog"
          aria-modal="false"
          aria-labelledby="ediya-menu__item-8"
        >
          <h3
            className="beverageList__dialog--name"
            id="beverageList__dialog-8"
          >
            석류 애플라임<span lang="en">Pomegranate Apple Lime</span>
          </h3>
          <p>
            산뜻한 석류에 다양한 과일과 꽃, 그리고 샴페인의 향이 더해져 보다
            깊고 중후한 맛이 느껴지는 블렌딩티
          </p>
          <div className="beverageList__dialog--multiColumn is-2">
            <dl>
              <dt>칼로리</dt>
              <dd>(220kcal)</dd>
              <dt>당류</dt>
              <dd>(42g)</dd>
              <dt>단백질</dt>
              <dd>(1g)</dd>
              <dt>포화지방</dt>
              <dd>(0.1g)</dd>
              <dt>나트륨</dt>
              <dd>(7mg)</dd>
              <dt>카페인</dt>
              <dd>(0mg)</dd>
            </dl>
          </div>
          <button
            className="resetButtonutton is-close-dialog"
            type="button"
            title="닫기"
            aria-label="음료 정보 패널 닫기"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </li>
    </>
  )
}

export default BeverageItem
