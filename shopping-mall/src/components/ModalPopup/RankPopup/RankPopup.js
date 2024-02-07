import React from 'react'
import './RankPopup.scss'
import dummy from 'data/headerRank.json';

function RankPopup() {
  return (
    <>
          <div className="rank_modal modal">
              <div className="modal__wrap">
                  <div className="modal__contents">
                      <div className='modal-head'>
                        <h3>인기 검색어</h3>
                      </div>
                      <div className="modal-body">
                          <ul className='rank_list'>
                            {dummy.HeaderRank.map((item, _) => (
                                    <li key={item.id} className={`rank__item rank__item--${item.state}`}>
                                        <a href='/'>
                                            <b className='rank__num'>{item.rank}</b>    
                                            <i  className={`rank__state rank__state--${item.state}`} ></i>
                                            <span className='rank__name'>{item.title}</span>
                                        </a> 
                                    </li>
                                ))}
                           </ul>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default RankPopup