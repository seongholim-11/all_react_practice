import React from 'react'
import { connect } from 'react-redux'
import { addSubscriber, removeSubscriber } from '../redux'

const Subscribers = ({count, addSubscriber}) => {
  return (
    <div className='items'>
        <h2>구독자 수: {count} </h2>
        <button onClick={() => addSubscriber()}>구독하기!</button>
    </div>
  )
}

const mapStateToProps = ({subscribers}) => {
    return{
        count: subscribers.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

const mapDispatchToProps = {
    addSubscriber
}

// mapStateToProps: Redux 스토어의 상태를 React 컴포넌트의 속성(props)으로 연결하는 데에 사용
// mapDispatchToProps: Redux 액션을 React 컴포넌트의 속성(props)으로 매핑하는 데에 사용
export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)