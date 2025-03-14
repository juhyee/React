import React, {useState} from 'react';
import './Profile.css';
import profileMenuIcon from '../../../../../assets/profileMenuIcon.svg'
import profileUserIcon from '../../../../../assets/profileUserIcon.svg'

const Profile = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className='utilMenu__link--profile'>
                <button className='profile__button' onClick={() => setToggle(!toggle)}>
                    <img src={profileMenuIcon} alt="" />
                    <img src={profileUserIcon} alt="" />
                </button>
                {toggle && (
                    <div className='profile__menu'>
                        <ul className='profile__list'>
                            <li className='profile__item'><a href="#">회원가입</a></li>
                            <li className='profile__item'><a href="#">로그인</a></li>
                            <li className='profile__item profile__item--line'><a href="#">당신의 공간을 에어비앤비하세요</a></li>
                            <li className='profile__item'><a href="#">체험 호스팅하기</a></li>
                            <li className='profile__item'><a href="#">도움말 센터</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Profile;