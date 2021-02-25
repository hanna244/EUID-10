// 스토어 생성
// 리듀서 함수, 초기 상태
// createStore(reducer, initialState)

// 생성된 스토어 객체
// 상태 가져오기: .getState()
// 상태 변경 요청: .dispatch(action)
// 상태 변경 구독(감지): .subscribe()

/* -------------------------------------------------------------------------- */

function createStore(reducer, initialState = {}) {
  if (typeof reducer !== 'function') {
    throw new Error('reducer 함수는 필수 전달 인자입니다.')
  }

  // 캡슐화 [비공개]
  // 리스너 함수를 기억(메모리)하기 위한 리스너 목록(배열)
  let _listeners = []

  // 상태
  let _state = initialState

  // 상태 반환 함수
  const getState = () => _state

  // 상태 변경 알림 요청 함수
  const dispatch = (action /*{ type[, payload] }*/) => {
    // action을 reducer 함수에 전달, 실행
    // 현재 구독 중인 함수(들)을 모두 실행
    _listeners.forEach((listener) => listener())
  }

  // 구독 함수
  const subscribe = (listener) => {
    // 전달 받은 함수(listener) 구독 설정
    _listeners = [..._listeners, listener]

    // 구독 취소 함수 반환
    return function unsubscribe(removeListener) {
      // 구독을 취소할 함수를 실행 목록에서 제외
      _listeners = _listeners.filter((listener) => listener !== removeListener)
    }
  }

  // 스토어 객체 생성 → 반환
  return {
    getState,
    dispatch,
    subscribe,
  }
}

export { createStore }
