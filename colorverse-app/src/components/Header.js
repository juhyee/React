import React from 'react'
import '../styles/Header.scss'

export default function Header() {
  return (
    <>
     <div className="builder-header">
          <div className="header-util">
            <div className="header-util__contents--left">
              <div className="header-util__logo">
                <div className="logo">
                  <h1 className="blind">colorverse</h1>
                </div>
              </div>
              <div className="header-util__title">
                안녕하세요.~컬러버스 랜드빌더 제목영역입니다.
              </div>
            </div>
            <div className="header-util__contents--center">
              <div className="header-util__select">
                {/* D: select 활성화 시 add class on  */}
                <div className="select">
                  <button className="select__button">
                    {/* D: select__text addClass 랜드빌더 - land/ 아이템 - itme / 에셋 - assets  */}
                    <span className="select__text itme">아이템 빌더</span>
                  </button>
                  <div className="select-layer">
                    <ul className="select-layer__list">
                      <li className="select-layer__item">
                        <i className="icon icon_land"></i>
                        <span>랜드 빌더</span>
                      </li>
                      <li className="select-layer__item">
                        <i className="icon icon_item"></i>
                        <span>아이템 빌더</span>
                      </li>
                      <li className="select-layer__item">
                        <i className="icon icon_assets"></i>
                        <span>에셋 빌더</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-util__contents--right">
              <button className="button--link">단축키</button>
              <button className="button--link">이용가이드</button>
              <button className="button--sm button--setting">
                <i className="icon icon_setting">설정</i>
              </button>
            </div>
          </div>

          <div className="header-tool">
            <div className="header-tool__contents--left">
              <div className="header-tool__menu-select">
                {/* D: select-layer 활성화 시 select addClass on */}
                <div className="select on">
                  <button className="select__button"></button>
                  <div className="select-layer">
                    <p className="select-layer__labal">
                      <span className="blind">colorvers</span>
                      빌더
                    </p>
                    <ul className="select-layer__list">
                      <li className="select-layer__item">
                        <span>아이템 정보</span>
                        <span>Ctrl+I</span>
                      </li>
                      <li className="select-layer__item">
                        <span>아이템 새로 만들기</span>
                        <span>Ctrl+N</span>
                      </li>
                      <li className="select-layer__item">
                        <span>아이템 불러오기</span>
                        <span>Ctrl+O</span>
                      </li>
                      <li className="select-layer__item">
                        <span>아이템 저장</span>
                        <span>Ctrl+S</span>
                      </li>
                      <li className="select-layer__item">
                        <span>편집 중인 아이템 저장</span>
                        <span>Ctrl+Shift+S</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* D: 해당 button--link 클릭시 addClass on */}
              <button className="button--link on">아이템 매니저</button>
              <button className="button--link">아이템 크리에이터</button>
              <button className="button--link">아이템 에디터</button>
              {/* D: button--play 활성화 시 addClass on */}
              <button className="button--lg button--play">
                <span className="button__text">플레이</span>
                <i className="icon icon_play"></i>
              </button>
              <div className="header-tool__pagination">
                <div className="pagination">
                  <button className="pagination__button pagination__button--prev button--lg">
                    <i className="icon icon_btn-arrow">이전</i>
                  </button>
                  <button className="pagination__button pagination__button--next button--lg">
                    <i className="icon icon_btn-arrow">다음</i>
                  </button>
                </div>
              </div>
              <div className="header-tool__list">
                {/* D: 해당 header-tool__item 클릭시 addClass on */}
                <button className="header-tool__item header-tool__item--arrow on">
                  <span className="blind">화살표</span>
                </button>
                <button className="header-tool__item header-tool__item--palm">
                  <span className="blind">손바닥</span>
                </button>
                <button className="header-tool__item header-tool__item--rotation">
                  <span className="blind">초기화</span>
                </button>
                <button className="header-tool__item header-tool__item--scale">
                  <span className="blind">스케일</span>
                </button>
                <button className="header-tool__item header-tool__item--moving">
                  <span className="blind">무빙</span>
                </button>
                <button className="header-tool__item header-tool__item--location">
                  <span className="blind">위치</span>
                </button>
              </div>
            </div>
            <div className="header-tool__contents--right">
              <div className="header-tool__toggle">
                <div className="toggle">
                  <span className="toggle__label">Snap On</span>
                  {/* D: toggle 활성화 시 toggle__button addClass on */}
                  <button className="toggle__button on"></button>
                </div>
                <div className="toggle">
                  <span className="toggle__label">Grid Off</span>
                  {/* D: toggle 활성화 시 toggle__button addClass on */}
                  <button className="toggle__button"></button>
                </div>
              </div>
              <button className="button--save button--lg">
                <span className="button__text">저장</span>
                <i className="icon icon_save"></i>
              </button>
              <button className="button--posting button--lg">
                <span className="button__text">게시</span>
                <i className="icon icon_posting"></i>
              </button>
              <div className="cart-tooltip">
                {/* D: button--cart 활성화 시 addClass on */}
                <button className="cart-tooltip__button button--lg on">
                  <i className="icon icon_cart">장바구니</i>
                </button>
                <div className="cart-tooltip__content">
                  <span>
                    비구매&#32;<span>99+</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}